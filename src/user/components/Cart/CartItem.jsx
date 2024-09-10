import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../../redux/Cart/Action";
import { 
  Box, 
  Typography, 
  Button, 
  IconButton, 
  TextField, 
  Paper,
  Grid,
  Avatar
} from "@mui/material";
import { Add as AddIcon, Remove as RemoveIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { toast } from "react-toastify";

const CartItem = ({ item, showButton, onUpdateSuccess, onDeleteSuccess }) => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  const [customizationNote, setCustomizationNote] = useState(
    item?.customizationNote || ""
  );
  const [customizationImage, setCustomizationImage] = useState(
    item?.customizationImage || null
  );

  useEffect(() => {
    setCustomizationNote(item?.customizationNote || "");
    setCustomizationImage(item?.customizationImage || null);
  }, [item?.customizationNote, item?.customizationImage]);

  const handleRemoveItemFromCart = () => {
    const data = { cartItemId: item?._id, jwt };
    dispatch(removeCartItem(data))
      .then(() => {
        onDeleteSuccess();
        toast.success("Item removed from cart");
      })
      .catch(() => toast.error("Failed to remove item"));
  };

  const handleUpdateCartItem = () => {
    const formData = new FormData();
    formData.append("quantity", item.quantity);
    formData.append("customizationNote", customizationNote);
    if (customizationImage instanceof File) {
      formData.append("customizationImage", customizationImage);
    }

    const data = { data: formData, cartItemId: item._id, jwt };
    dispatch(updateCartItem(data))
      .then(() => {
        onUpdateSuccess();
        toast.success("Cart item updated");
      })
      .catch(() => toast.error("Failed to update cart item"));
  };

  const handleQuantityChange = (num) => {
    const newQuantity = Math.max(1, item.quantity + num);
    const formData = new FormData();
    formData.append("quantity", newQuantity);

    const data = { data: formData, cartItemId: item._id, jwt };
    dispatch(updateCartItem(data))
      .then(() => {
        onUpdateSuccess();
        toast.success("Quantity updated");
      })
      .catch(() => toast.error("Failed to update quantity"));
  };

  const handleImageUpload = (event) => {
    setCustomizationImage(event.target.files[0]);
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} sm={3}>
          <Avatar
            src={item?.product?.image}
            alt={item?.product?.name}
            variant="rounded"
            sx={{ width: 100, height: 100 }}
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography variant="h6" gutterBottom>
            {item?.product?.name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Price: ₹{item?.product?.discountedPrice}{" "}
            <Typography component="span" sx={{ textDecoration: 'line-through', color: 'text.disabled' }}>
              ₹{item?.product?.price}
            </Typography>
          </Typography>
        </Grid>
        {showButton && (
          <Grid item xs={12} sm={4}>
            <Box display="flex" alignItems="center" justifyContent="flex-end">
              <IconButton onClick={() => handleQuantityChange(-1)} disabled={item?.quantity <= 1}>
                <RemoveIcon />
              </IconButton>
              <Typography sx={{ mx: 2 }}>{item?.quantity}</Typography>
              <IconButton onClick={() => handleQuantityChange(1)}>
                <AddIcon />
              </IconButton>
              <IconButton onClick={handleRemoveItemFromCart} color="error" sx={{ ml: 2 }}>
                <DeleteIcon />
              </IconButton>
            </Box>
          </Grid>
        )}
      </Grid>
      
      {showButton && (
        <Box mt={3}>
          <Typography variant="h6" gutterBottom>
            Customization
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Customization Note"
                variant="outlined"
                value={customizationNote}
                onChange={(e) => setCustomizationNote(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <input
                accept="image/*"
                style={{ display: 'none' }}
                id={`upload-image-${item?._id}`}
                type="file"
                onChange={handleImageUpload}
              />
              <label htmlFor={`upload-image-${item?._id}`}>
                <Button variant="outlined" component="span" fullWidth>
                  Upload Customization Image
                </Button>
              </label>
            </Grid>
          </Grid>
          
          {(customizationNote || customizationImage) && (
            <Box mt={2}>
              <Typography variant="body2" gutterBottom>
                {customizationNote}
              </Typography>
              {customizationImage && (
                <Box mt={1}>
                  <img
                    src={customizationImage instanceof File ? URL.createObjectURL(customizationImage) : customizationImage}
                    alt="Customization"
                    style={{ maxWidth: '100%', maxHeight: 200, objectFit: 'contain' }}
                  />
                </Box>
              )}
            </Box>
          )}
          
          <Button
            variant="contained"
            onClick={handleUpdateCartItem}
            sx={{ 
              mt: 2, 
              backgroundColor: "#000",
              '&:hover': {
                backgroundColor: "#333",
              },
            }}
          >
            Update
          </Button>
        </Box>
      )}
    </Paper>
  );
};

export default CartItem;