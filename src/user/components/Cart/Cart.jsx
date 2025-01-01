import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCart } from "../../redux/Cart/Action";
import CartItem from "./CartItem";
import { Button, Typography, Box, Divider, Paper, Link } from "@mui/material";
import { ShoppingBag } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingBar from "react-top-loading-bar";

const Cart = () => {
  const [progress, setProgress] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  const { cart } = useSelector((store) => store);

  const handleWhatsAppDeliveryInfo = () => {
    const message = encodeURIComponent(`Can I get delivery charge info of this product ${window.location.origin}/products/id/${cart.cartItems[0]?.product?._id}`);
    window.open(`https://wa.me/9429350252?text=${message}`, '_blank');
  };

  useEffect(() => {
    setProgress(50);
    dispatch(getCart(jwt))
      .then(() => {
        setProgress(100);
        setTimeout(() => setProgress(0), 500);
      })
      .catch(() => {
        setProgress(0);
        toast.error("Failed to load cart. Please try again.");
      });
  }, [jwt, cart.addedCartItems, cart.updateCartItem, cart.deleteCartItem, dispatch]);

  const handleUpdateSuccess = () => {
    toast.success("Cart updated successfully!");
  };

  const handleDeleteSuccess = () => {
    toast.success("Item removed from cart!");
  };

  if (cart.cartItems?.length === 0) {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "70vh" }}>
        <ShoppingBag size={64} color="#000" />
        <Typography variant="h5" sx={{ mt: 2, mb: 2 }}>Your cart is empty</Typography>
        <Button variant="contained" onClick={() => navigate("/products")} sx={{ backgroundColor: "#3b82f6", "&:hover": { backgroundColor: "#2563eb" } }}>
          Shop Now
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 1200, margin: "0 auto", padding: 3 }}>
      <LoadingBar color="#3b82f6" progress={progress} onLoaderFinished={() => setProgress(0)} />
      <ToastContainer position="top-right" autoClose={3000} />
      
      <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>Your Cart</Typography>
      
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3 }}>
        <Box sx={{ flex: 2 }}>
          {cart.cartItems.map((item) => (
            <CartItem 
              key={item?._id} 
              item={item} 
              showButton={true}
              onUpdateSuccess={handleUpdateSuccess}
              onDeleteSuccess={handleDeleteSuccess}
            />
          ))}
        </Box>
        
        <Paper elevation={3} sx={{ flex: 1, p: 3, alignSelf: "flex-start", marginLeft: "auto", marginRight: "auto" }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>PRICE DETAILS</Typography>
          <Divider sx={{ mb: 2 }} />
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography>Price ({cart.cart?.totalItem} items)</Typography>
            <Typography>₹{cart.cart?.totalPrice}</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography>Discount</Typography>
            <Typography color="green">-₹{cart.cart?.discount}</Typography>
          </Box>
          
          {/* Updated Delivery Charges Section */}
          <Box sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 1, mb: 1, mt: 1 }}>
            <Typography sx={{ mb: 1 }}>Delivery Charges</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Will be calculated after payment
            </Typography>
            <Box 
              onClick={handleWhatsAppDeliveryInfo}
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                cursor: 'pointer',
                color: '#25D366',
                '&:hover': { textDecoration: 'underline' }
              }}
            >
              <FaWhatsapp style={{ marginRight: '8px' }} />
              <Typography variant="body2">
                Check delivery charges on WhatsApp
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 2 }} />
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>Total Amount</Typography>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>₹{cart.cart?.totalDiscountedPrice}</Typography>
              <Typography variant="caption" color="text.secondary">
                (+ Delivery charges)
              </Typography>
            </Box>
          </Box>
          <Button 
            variant="contained" 
            fullWidth
            onClick={() => navigate("/checkout?step=2")}
            sx={{ 
              mt: 2, 
              backgroundColor: "#000", 
              color: "#fff",
              "&:hover": { backgroundColor: "#333" },
              py: 1.5,
              fontSize: "1rem",
              fontWeight: "bold"
            }}
          >
            Proceed to Checkout
          </Button>
        </Paper>
      </Box>
    </Box>
  );
};

export default Cart;