import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Grid,
  TextField,
  Button,
  Avatar,
  Box,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
} from "@mui/material";
import { createOurProduct, deleteOurProduct, getOurProduct } from "../../user/redux/OurProduct/Action";
import { findProducts } from "../../user/redux/Product/Action";
import { toast } from "react-hot-toast";

const ManageOurProduct = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [ourProductData, setOurProductData] = useState({
    image: "",
    title: "",
    link: "",
    price: "",
    discountedPrice: "",
    type: "",
  });

  const { ourProduct, product, loading, error } = useSelector((store) => ({
    ourProduct: store.ourProduct,
    product: store.product,
    loading: store.loading,
    error: store.error,
  }));

  useEffect(() => {
    dispatch(getOurProduct());
    dispatch(findProducts({ pageNumber: 1, pageSize: 1000 }));
  }, [dispatch, ourProduct.deleteOurProducts, ourProduct.createOurProducts]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOurProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createOurProduct(ourProductData));
    toast.success("Product added successfully!");
    setSelectedProduct("");
    setOurProductData({
      image: "",
      title: "",
      link: "",
      price: "",
      discountedPrice: "",
      type: "",
    });
  };

  const handleDeleteOurProduct = (ourProductId) => {
    dispatch(deleteOurProduct(ourProductId));
    toast.success("Product deleted successfully!");
  };

  const handleProductSelect = (event) => {
    const productId = event.target.value;
    const selectedProductData = product.products.content.find(
      (p) => p._id === productId
    );
    if (selectedProductData) {
      setOurProductData({
        image: selectedProductData.image,
        title: selectedProductData.name,
        link: `/products/id/${selectedProductData._id}`,
        price: selectedProductData.price,
        discountedPrice: selectedProductData.discountedPrice,
        type: ourProductData.type,
      });
    }
    setSelectedProduct(productId);
  };

  const filteredProducts = product.products?.content?.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress color="primary" />
      </Box>
    );
  }

  if (error) {
    toast.error(error);
    return null;
  }

  return (
    <Box sx={{ backgroundColor: "#121212", minHeight: "100vh", padding: "2rem" }}>
      <Typography variant="h4" align="center" sx={{ color: "#90caf9", marginBottom: "2rem" }}>
        Add New Product (Top - Featured - Workshop)
      </Typography>

      <form onSubmit={handleSubmit} className="min-h-[17rem]">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Search Products"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              variant="outlined"
              sx={{
                backgroundColor: "#1e1e1e",
                borderRadius: 1,
                input: { color: "#ffffff" },
                "& .MuiInputLabel-root": { color: "#90caf9" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#90caf9" },
                  "&:hover fieldset": { borderColor: "#64b5f6" },
                  "&.Mui-focused fieldset": { borderColor: "#42a5f5" },
                },
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined" sx={{ backgroundColor: "#1e1e1e", borderRadius: 1 }}>
              <InputLabel id="product-select-label" sx={{ color: "#90caf9" }}>
                Select Product
              </InputLabel>
              <Select
                labelId="product-select-label"
                id="product-select"
                value={selectedProduct}
                label="Select Product"
                onChange={handleProductSelect}
                sx={{
                  color: "#ffffff",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#90caf9",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#64b5f6",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#42a5f5",
                  },
                }}
              >
                {filteredProducts?.map((item) => (
                  <MenuItem key={item._id} value={item._id}>
                    <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
                      <Typography sx={{ color: "#ffffff" }}>{item.name}</Typography>
                      <Avatar src={item.image} alt={item.name} sx={{ width: 40, height: 40 }} />
                    </Box>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Image URL"
              name="image"
              value={ourProductData.image}
              onChange={handleChange}
              sx={{
                backgroundColor: "#1e1e1e",
                borderRadius: 1,
                input: { color: "#ffffff" },
                "& .MuiInputLabel-root": { color: "#90caf9" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#90caf9" },
                  "&:hover fieldset": { borderColor: "#64b5f6" },
                  "&.Mui-focused fieldset": { borderColor: "#42a5f5" },
                },
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={ourProductData.title}
              onChange={handleChange}
              sx={{
                backgroundColor: "#1e1e1e",
                borderRadius: 1,
                input: { color: "#ffffff" },
                "& .MuiInputLabel-root": { color: "#90caf9" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#90caf9" },
                  "&:hover fieldset": { borderColor: "#64b5f6" },
                  "&.Mui-focused fieldset": { borderColor: "#42a5f5" },
                },
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined" sx={{ backgroundColor: "#1e1e1e", borderRadius: 1 }}>
              <InputLabel id="type-select-label" sx={{ color: "#90caf9" }}>
                Type
              </InputLabel>
              <Select
                labelId="type-select-label"
                id="type-select"
                name="type"
                value={ourProductData.type}
                onChange={handleChange}
                label="Type"
                sx={{
                  color: "#ffffff",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#90caf9",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#64b5f6",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#42a5f5",
                  },
                }}
              >
                <MenuItem value="Top">Top</MenuItem>
                <MenuItem value="Featured">Featured</MenuItem>
                <MenuItem value="Workshop">Workshop</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Product Price"
              name="price"
              value={ourProductData.price}
              onChange={handleChange}
              sx={{
                backgroundColor: "#1e1e1e",
                borderRadius: 1,
                input: { color: "#ffffff" },
                "& .MuiInputLabel-root": { color: "#90caf9" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#90caf9" },
                  "&:hover fieldset": { borderColor: "#64b5f6" },
                  "&.Mui-focused fieldset": { borderColor: "#42a5f5" },
                },
              }}
            />
          </Grid>

     

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Product Link"
              name="link"
              value={ourProductData.link}
              onChange={handleChange}
              sx={{
                backgroundColor: "#1e1e1e",
                borderRadius: 1,
                input: { color: "#ffffff" },
                "& .MuiInputLabel-root": { color: "#90caf9" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#90caf9" },
                  "&:hover fieldset": { borderColor: "#64b5f6" },
                  "&.Mui-focused fieldset": { borderColor: "#42a5f5" },
                },
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#42a5f5",
                "&:hover": { backgroundColor: "#64b5f6" },
                color: "#ffffff",
                p: 1.8,
              }}
              size="large"
              type="submit"
              disabled={!selectedProduct}
            >
              Add Product
            </Button>
          </Grid>
        </Grid>
      </form>

      <Box width={"100%"} mt={5}>
        <Card className="mt-2" sx={{ backgroundColor: "#1e1e1e", borderRadius: 1 }}>
          <CardHeader
            title="All Products"
            sx={{
              color: "#90caf9",
              pt: 2,
              alignItems: "center",
              "& .MuiCardHeader-action": { mt: 0.6 },
            }}
          />
          <TableContainer>
            <Table sx={{ minWidth: 800 }} aria-label="table in dashboard">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ color: "#90caf9" }}>Image</TableCell>
                  <TableCell sx={{ color: "#90caf9" }}>Title</TableCell>
               
                  <TableCell sx={{ color: "#90caf9", textAlign: "center" }}>Type</TableCell>
                  <TableCell sx={{ color: "#90caf9", textAlign: "center" }}>Link</TableCell>
                  <TableCell sx={{ color: "#90caf9", textAlign: "center" }}>Product ID</TableCell>
                  <TableCell sx={{ color: "#90caf9", textAlign: "center" }}>Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {ourProduct?.ourProducts?.map((item) => (
                  <TableRow
                    hover
                    key={item._id}
                    sx={{ "&:last-of-type td, &:last-of-type th": { border: 0 } }}
                  >
                    <TableCell>
                      <Avatar alt={item.title} src={item.image} />
                    </TableCell>
                    <TableCell
                      sx={{ py: (theme) => `${theme.spacing(0.5)} !important` }}
                    >
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography
                          sx={{
                            fontWeight: 500,
                            fontSize: "0.875rem !important",
                            color: "#ffffff",
                          }}
                        >
                          {item.title}
                        </Typography>
                      </Box>
                    </TableCell>
              
                    <TableCell sx={{ textAlign: "center", color: "#ffffff" }}>{item.type}</TableCell>
                    <TableCell align="center">
                  <Button
                    href={item.link}
                    target="_blank"
                    variant="outlined"
                    sx={{ color: "#42a5f5", borderColor: "#42a5f5" }}
                  >
                    View
                  </Button>
                </TableCell>
                    <TableCell sx={{ textAlign: "center", color: "#ffffff" }}>{item._id}</TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      <Button
                        variant="text"
                        onClick={() => handleDeleteOurProduct(item._id)}
                        sx={{ color: "#f44336" }}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Box>
    </Box>
  );
};

export default ManageOurProduct;
