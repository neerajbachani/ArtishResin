import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, findProducts } from '../../user/redux/Product/Action';
import { Toaster } from 'react-hot-toast';
import {
  Box,
  Card,
  CardHeader,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  TextField,
  Button,
  Avatar,
  Pagination,
  CircularProgress
} from '@mui/material';
import debounce from 'lodash/debounce';

const ProductsTable = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { product } = useSelector((store) => store);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const searchParams = new URLSearchParams(location.search);
  const availability = searchParams.get("availability");
  const sort = searchParams.get("sort");
  const page = searchParams.get("page") || 1;

  const fetchProducts = useCallback((searchValue = "") => {
    setIsLoading(true);
    const data = {
      colors: [],
      varmalaPreservation: [],
      workshop: [],
      wallClock: [],
      namePlate: [],
      navkarMantraFrame: [],
      resinSpecial: [],
      resinRawMaterials: [],
      geodeArt: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 100000,
      minDiscount: 0,
      sort: sort || "price_low",
      pageNumber: page,
      pageSize: 10,
      stock: availability,
      search: searchValue,
    };
    dispatch(findProducts(data)).then(() => setIsLoading(false));
  }, [dispatch, availability, sort, page]);

  const debouncedFetchProducts = useCallback(
    debounce((searchValue) => fetchProducts(searchValue), 300),
    [fetchProducts]
  );

  useEffect(() => {
    fetchProducts(searchTerm);
  }, [fetchProducts, searchTerm]);

  const handlePaginationChange = (event, value) => {
    searchParams.set("page", value);
    const query = searchParams.toString();
    navigate({ search: `?${query}` });
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    searchParams.set("search", value);
    searchParams.set("page", "1");  // Reset to first page on new search
    const query = searchParams.toString();
    navigate({ search: `?${query}` });
    debouncedFetchProducts(value);
  };

  const handleDeleteProduct = (productId) => {
    dispatch(deleteProduct(productId));
  };

  const handleUpdateProduct = (productId) => {
    navigate(`/admin/product/update/${productId}`);
  };

  return (
    <>
      <Toaster />
      <Box width={"100%"}>
        <Card className="mt-2">
          <CardHeader
            title="All Products"
            sx={{
              pt: 2,
              alignItems: "center",
              "& .MuiCardHeader-action": { mt: 0.6 },
            }}
          />
          <Box sx={{ mb: 2, display: 'flex', justifyContent: 'flex-end', px: 2 }}>
            <TextField
              label="Search products"
              variant="outlined"
              size="small"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </Box>
          {isLoading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
              <CircularProgress />
            </Box>
          ) : (
            <>
              <TableContainer>
                <Table sx={{ minWidth: 800 }} aria-label="table in dashboard">
                  <TableHead>
                    <TableRow>
                      <TableCell>Image</TableCell>
                      <TableCell>Title</TableCell>
                      <TableCell sx={{ textAlign: "center" }}>Discounted/Original Price</TableCell>
                      <TableCell sx={{ textAlign: "center" }}>Price</TableCell>
                      <TableCell sx={{ textAlign: "center" }}>Discount</TableCell>
                      <TableCell sx={{ textAlign: "center" }}>Update</TableCell>
                      <TableCell sx={{ textAlign: "center" }}>Delete</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {product?.products?.content?.map((item) => (
                      <TableRow
                        hover
                        key={item._id}
                        sx={{ "&:last-of-type td, &:last-of-type th": { border: 0 } }}
                      >
                        <TableCell>
                          <Avatar alt={item.title} src={item.image} />
                        </TableCell>
                        <TableCell sx={{ py: (theme) => `${theme.spacing(0.5)} !important` }}>
                          <Box sx={{ display: "flex", flexDirection: "column" }}>
                            <Typography sx={{ fontWeight: 500, fontSize: "0.875rem !important" }}>
                              {item.title}
                            </Typography>
                            <Typography variant="caption">{item.name}</Typography>
                          </Box>
                        </TableCell>
                        <TableCell sx={{ textAlign: "center" }}>{item.discountedPrice}</TableCell>
                        <TableCell sx={{ textAlign: "center" }}>{item.price}</TableCell>
                        <TableCell sx={{ textAlign: "center" }}>{item.discount}</TableCell>
                        <TableCell sx={{ textAlign: "center" }}>
                          <Button variant="text" onClick={() => handleUpdateProduct(item._id)}>
                            Update
                          </Button>
                        </TableCell>
                        <TableCell sx={{ textAlign: "center" }}>
                          <Button variant="text" onClick={() => handleDeleteProduct(item._id)}>
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              {product?.products?.content?.length === 0 && (
                <Typography sx={{ textAlign: 'center', my: 3 }}>
                  No products found.
                </Typography>
              )}
            </>
          )}
        </Card>
        <Card className="mt-2 border">
          <div className="mx-auto px-4 py-5 flex justify-center shadow-lg rounded-md">
            <Pagination
              count={product.products?.totalPages}
              page={parseInt(page)}
              color="primary"
              className=""
              onChange={handlePaginationChange}
            />
          </div>
        </Card>
      </Box>
    </>
  );
};

export default ProductsTable;