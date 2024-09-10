import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Typography,
  Grid,
  Button,
  Box,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  CircularProgress,
  IconButton,
} from "@mui/material";
import { Delete } from '@mui/icons-material';
import toast, { Toaster } from 'react-hot-toast';
import {
  createOurFeaturedProduct,
  deleteOurFeaturedProduct,
  getOurFeaturedProduct,
} from "../../user/redux/OurFeaturedProduct/Action";
import { findProducts } from "../../user/redux/Product/Action";

const ManageFeaturedProduct = () => {
  const dispatch = useDispatch();
  const { ourFeaturedProduct, product, loading, error } = useSelector((store) => ({
    ourFeaturedProduct: store.ourFeaturedProduct,
    product: store.product,
    loading: store.loading,
    error: store.error,
  }));

  const [selectedProduct, setSelectedProduct] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(getOurFeaturedProduct());
    dispatch(findProducts({ pageNumber: 1, pageSize: 100 }));
  }, [dispatch , ourFeaturedProduct.createOurFeaturedProduct, ourFeaturedProduct.deleteOurFeaturedProduct ]);

  const handleProductSelect = useCallback((event) => {
    setSelectedProduct(event.target.value);
  }, []);

  const handleAddFeaturedProduct = useCallback(() => {
    const selectedProductData = product.products.content.find(p => p._id === selectedProduct);
    if (selectedProductData) {
      const featuredProductData = {
        image: selectedProductData.image,
        title: selectedProductData.name,
        link: `/products/id/${selectedProductData._id}`,
        price: selectedProductData.price,
        discountedPrice: selectedProductData.discountedPrice,
      };
      dispatch(createOurFeaturedProduct(featuredProductData))
        .then(() => {
          toast.success('Product added to featured successfully!');
          setSelectedProduct("");
        })
        .catch(() => {
          toast.error('Failed to add product to featured. Please try again.');
        });
    }
  }, [dispatch, product.products, selectedProduct]);

  const handleDeleteOurFeaturedProduct = useCallback((ourFeaturedProductId) => {
    dispatch(deleteOurFeaturedProduct(ourFeaturedProductId))
      .then(() => {
        toast.success('Featured product deleted successfully!');
      })
      .catch(() => {
        toast.error('Failed to delete featured product. Please try again.');
      });
  }, [dispatch]);

  const filteredProducts = product.products?.content?.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box className="bg-gray-900 text-white min-h-screen p-8">
      <Toaster position="top-right" />
      <Typography variant="h3" align="center" className="py-10">
        Manage Featured Products
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Search Products"
            variant="outlined"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{ style: { color: "white" } }}
            InputLabelProps={{ style: { color: "white" } }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="product-select-label" style={{ color: "white" }}>
              Select Product
            </InputLabel>
            <Select
              labelId="product-select-label"
              id="product-select"
              value={selectedProduct}
              label="Select Product"
              onChange={handleProductSelect}
              sx={{ color: "white" }}
            >
              {filteredProducts?.map((item) => (
                <MenuItem key={item._id} value={item._id}>
                  <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
                    <Typography>{item.name}</Typography>
                    <Avatar src={item.image} alt={item.name} sx={{ width: 40, height: 40 }} />
                  </Box>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            sx={{ p: 1.8, backgroundColor: '#2563EB', '&:hover': { backgroundColor: '#1E40AF' } }}
            size="large"
            onClick={handleAddFeaturedProduct}
            disabled={!selectedProduct}
            fullWidth
          >
            Add to Featured Products
          </Button>
        </Grid>
      </Grid>

      <FeaturedProductsTable
        featuredProducts={ourFeaturedProduct?.ourFeaturedProducts}
        onDelete={handleDeleteOurFeaturedProduct}
      />
    </Box>
  );
};

const FeaturedProductsTable = React.memo(({ featuredProducts, onDelete }) => (
  <Box width="100%" mt={4}>
    <Card sx={{ backgroundColor: '#2D3748', color: 'white' }}>
      <CardHeader
        title="Featured Products"
        sx={{
          pt: 2,
          backgroundColor: '#2563EB',
          color: 'white',
          alignItems: "center",
          "& .MuiCardHeader-action": { mt: 0.6 },
        }}
      />
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label="featured products table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Title</TableCell>
              <TableCell align="center">Original price</TableCell>
              <TableCell align="center">Discounted price</TableCell>
              <TableCell align="center">Link</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {featuredProducts?.map((item) => (
              <TableRow key={item._id} hover>
                <TableCell>
                  <Avatar alt={item.title} src={item.image} sx={{ width: 50, height: 50 }} />
                </TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell align="center">{item.price}</TableCell>
                <TableCell align="center">{item.discountedPrice}</TableCell>
                <TableCell align="center">
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">
                    View Product
                  </a>
                </TableCell>
                <TableCell align="center">
                  <IconButton color="error" onClick={() => onDelete(item._id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  </Box>
));

export default ManageFeaturedProduct;

