
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Card, CardHeader, Grid, FormControl, InputLabel, Select, MenuItem, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Typography, Chip, Button, Menu, Collapse, Avatar, AvatarGroup, Pagination } from '@mui/material';
import LoadingBar from 'react-top-loading-bar';
import { format } from 'date-fns';
import { confirmOrder, deleteOrder, deliveredOrder, getOrders, shipOrder } from '../../user/redux/Admin/Order/Action';
import { getOrderById } from '../../user/redux/Order/Action';

const ITEMS_PER_PAGE = 10;

const OrdersTable = () => {
  const dispatch = useDispatch();
  const { adminOrder, order } = useSelector((store) => store);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({ status: '', sort: 'newest' });
  const [currentPage, setCurrentPage] = useState(1);
  const [anchorEl, setAnchorEl] = useState({});
  const [openDetails, setOpenDetails] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setProgress(30);
      await dispatch(getOrders());
      setProgress(60);
      
      const completedOrders = adminOrder.orders?.filter(
        (order) => order.paymentDetails?.paymentStatus === 'COMPLETED'
      );

      if (completedOrders) {
        await Promise.all(completedOrders.map((order) => dispatch(getOrderById(order._id))));
      }

      setProgress(100);
      setIsLoading(false);
    };

    fetchData();
  }, [dispatch, adminOrder.confirmed, adminOrder.shipped, adminOrder.delivered, adminOrder.deleteOrder]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleStatusUpdate = (orderId, status) => {
    const actions = {
      CONFIRMED: confirmOrder,
      SHIPPED: shipOrder,
      DELIVERED: deliveredOrder,
    };
    dispatch(actions[status](orderId));
    handleMenuClose(orderId);
  };

  const handleDeleteOrder = (orderId) => {
    dispatch(deleteOrder(orderId));
    handleMenuClose(orderId);
  };

  const handleMenuClick = (event, orderId) => {
    setAnchorEl(prev => ({ ...prev, [orderId]: event.currentTarget }));
  };

  const handleMenuClose = (orderId) => {
    setAnchorEl(prev => ({ ...prev, [orderId]: null }));
  };

  const handleToggleDetails = (orderId) => {
    setOpenDetails(prev => ({ ...prev, [orderId]: !prev[orderId] }));
  };

  const handlePaginationChange = (event, value) => {
    setCurrentPage(value);
  };

  const filteredAndSortedOrders = adminOrder.orders
    ?.filter((order) => {
      const paymentCompleted = order.paymentDetails?.paymentStatus === 'COMPLETED';
      return formData.status === '' ? paymentCompleted : paymentCompleted && order.orderStatus === formData.status;
    })
    .sort((a, b) => formData.sort === 'newest' 
      ? new Date(b.createdAt) - new Date(a.createdAt) 
      : new Date(a.createdAt) - new Date(b.createdAt)
    )
    .slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const FilterSort = () => (
    <Card className="p-3">
      <CardHeader title="Sort & Filter" />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel>Status</InputLabel>
            <Select name="status" value={formData.status} label="Status" onChange={handleChange}>
              <MenuItem value="">All</MenuItem>
              {['PLACED', 'CONFIRMED', 'SHIPPED', 'DELIVERED', 'CANCELED'].map(status => (
                <MenuItem key={status} value={status}>{status}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel>Sort By</InputLabel>
            <Select name="sort" value={formData.sort} label="Sort By" onChange={handleChange}>
              <MenuItem value="newest">Newest</MenuItem>
              <MenuItem value="oldest">Oldest</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Card>
  );

  const OrderRow = ({ item }) => {
    const orderDetails = order.orders[item._id];
    const userDetails = orderDetails?.user;
    const shippingAddress = orderDetails?.shippingAddress;

    return (
      <>
        <TableRow hover>
          <TableCell>
            <AvatarGroup max={4} sx={{ justifyContent: "start" }}>
              {item.orderItems.map((orderItem) => (
                <Avatar key={orderItem._id} alt={item.name} src={orderItem.product?.image} />
              ))}
            </AvatarGroup>
          </TableCell>
          <TableCell>
            <Button onClick={() => handleToggleDetails(item._id)}>
              <Typography sx={{ fontWeight: 500, fontSize: "0.875rem" }}>
                {item?.orderItems.map((order) => order.product?.name).join(', ')}
              </Typography>
            </Button>
          </TableCell>
          <TableCell>{item?.totalDiscountedPrice}</TableCell>
          <TableCell>{item?._id}</TableCell>
          <TableCell>
            <Chip
              label={item?.orderStatus}
              size="small"
              color={item.orderStatus === "PENDING" ? "info" : item?.orderStatus === "DELIVERED" ? "success" : "secondary"}
              sx={{ color: "white", fontWeight: "bold" }}
            />
          </TableCell>
          <TableCell>
            <Button
              onClick={(event) => handleMenuClick(event, item._id)}
              aria-controls={`status-menu-${item._id}`}
              aria-haspopup="true"
            >
              Update Status
            </Button>
            <Menu
              id={`status-menu-${item._id}`}
              anchorEl={anchorEl[item._id]}
              open={Boolean(anchorEl[item._id])}
              onClose={() => handleMenuClose(item._id)}
            >
              {['CONFIRMED', 'SHIPPED', 'DELIVERED'].map(status => (
                <MenuItem 
                  key={status}
                  onClick={() => handleStatusUpdate(item._id, status)}
                  disabled={item.orderStatus === status || (status === 'SHIPPED' && item.orderStatus === 'DELIVERED')}
                >
                  {status} ORDER
                </MenuItem>
              ))}
            </Menu>
          </TableCell>
          <TableCell>
            <Button onClick={() => handleDeleteOrder(item._id)} color="error">
              Delete
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
            <Collapse in={openDetails[item._id]} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <OrderDetails item={item} orderDetails={orderDetails} userDetails={userDetails} shippingAddress={shippingAddress} />
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    );
  };

  const OrderDetails = ({ item, orderDetails, userDetails, shippingAddress }) => (
    <>
      <Typography variant="h6" gutterBottom component="div">
        Order Details
      </Typography>
      <Table size="small" aria-label="purchases">
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Customization Note</TableCell>
            <TableCell>Customization Image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {item.orderItems.map((orderItem) => (
            <TableRow key={orderItem._id}>
              <TableCell>{orderItem.product.name}</TableCell>
              <TableCell>{orderItem.quantity}</TableCell>
              <TableCell>{orderItem.discountedPrice}₹</TableCell>
              <TableCell>{orderItem?.customizationNote}</TableCell>
              <TableCell>
                <a href={orderItem?.customizationImage} target="_blank" rel="noreferrer">
                  <img src={orderItem?.customizationImage} width={70} height={70} alt="Customization" />
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {orderDetails && (
        <>
          <Typography variant="h6" gutterBottom component="div" mt={2}>
            User Details
          </Typography>
          {userDetails && (
            <>
              <Typography variant="body1">
                Name: {userDetails.firstName} {userDetails.lastName}
              </Typography>
              <Typography variant="body1">Email: {userDetails.email}</Typography>
              <Typography variant="body1">Order Date: {format(new Date(item.createdAt), 'PP')}</Typography>
            </>
          )}
          <Typography variant="h6" gutterBottom component="div" mt={2}>
            Shipping Address
          </Typography>
          {shippingAddress && (
            <>
              <Typography variant="body1">Address: {shippingAddress.streetAddress}</Typography>
              <Typography variant="body1">City: {shippingAddress.city}</Typography>
              <Typography variant="body1">State: {shippingAddress.state}</Typography>
              <Typography variant="body1">Postal Code: {shippingAddress.pincode}</Typography>
              <Typography variant="body1">Contact No: {shippingAddress.mobile}</Typography>
            </>
          )}
          <Typography variant="h6" gutterBottom component="div" mt={2}>
            Payment Details
          </Typography>
          <Typography variant="body1">Payment Status: {item.paymentDetails.paymentStatus}</Typography>
          <Typography variant="body1">Payment ID: {item.paymentDetails.paymentId}</Typography>
        </>
      )}
    </>
  );

  return (
    <div>
      <Box>
        <LoadingBar color="#f11946" progress={progress} onLoaderFinished={() => setProgress(0)} />
        <FilterSort />
        <Card className="mt-2">
          <CardHeader
            title="All Orders"
            sx={{
              pt: 2,
              alignItems: "center",
              "& .MuiCardHeader-action": { mt: 0.6 },
            }}
          />
          {isLoading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
              Loading...
            </Box>
          ) : (
            <TableContainer>
              <Table sx={{ minWidth: 800 }} aria-label="orders table">
                <TableHead>
                  <TableRow>
                    <TableCell>Image</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Id</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Update</TableCell>
                    <TableCell>Delete</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredAndSortedOrders.map((item) => (
                    <OrderRow key={item._id} item={item} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Card>
        <Card className="mt-2 flex justify-center items-center">
          <Pagination
            className="py-5 w-auto"
            size="large"
            count={Math.ceil(adminOrder.orders.length / ITEMS_PER_PAGE)}
            page={currentPage}
            color="primary"
            onChange={handlePaginationChange}
          />
        </Card>
      </Box>
    </div>
  );
};

export default OrdersTable;