import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import LoadingBar from 'react-top-loading-bar';
import { getOrderById } from '../../redux/Order/Action';
import { createPayment } from '../../redux/Payment/Action';
import AddressCard from '../Address/AddressCard';
import CartItem from '../Cart/CartItem';

const OrderSummary = () => {
  const [progress, setProgress] = useState(0);
  const location = useLocation();
  const dispatch = useDispatch();
  const { order } = useSelector((state) => state);

  const orderId = new URLSearchParams(location.search).get('order_id');

  useEffect(() => {
    setProgress(50);
    dispatch(getOrderById(orderId))
      .then(() => {
        setProgress(100);
        setTimeout(() => setProgress(0), 500);
      })
      .catch(() => setProgress(0));
  }, [orderId, dispatch]);

  const handleCreatePayment = () => {
    setProgress(50);
    dispatch(createPayment(order.order?._id))
      .then(() => {
        setProgress(100);
        setTimeout(() => setProgress(0), 500);
      })
      .catch(() => {
        setProgress(0);
      });
  };

  if (!order.order) return null;

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50">
      <LoadingBar color="#60A5FA" progress={progress} onLoaderFinished={() => setProgress(0)} />
      
      <h1 className="text-3xl font-bold mb-8 text-black">Order Summary</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <AddressCard address={order.order.shippingAddress} />
          
          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
            <h2 className="text-xl font-semibold mb-4 text-black">Order Items</h2>
            <div className="space-y-4">
              {order.order.orderItems.map((item) => (
                <CartItem key={item._id} item={item} showButton={false} />
              ))}
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
            <h2 className="text-xl font-semibold mb-4 text-black">Order Details</h2>
            <div className="space-y-2 text-gray-700">
              <p><span className="font-semibold">Order ID:</span> {order.order._id}</p>
              <p><span className="font-semibold">Order Date:</span> {new Date(order.order.orderDate).toLocaleString()}</p>
              <p><span className="font-semibold">Order Status:</span> <span className="text-blue-400 font-semibold">{order.order.orderStatus}</span></p>
              <p><span className="font-semibold">Payment Status:</span> <span className="text-blue-400 font-semibold">{order.order.paymentDetails.paymentStatus}</span></p>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 sticky top-4">
            <h2 className="text-xl font-semibold mb-4 text-black">Price Details</h2>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between">
                <span>Price ({order.order.totalItem} items)</span>
                <span>₹{order.order.totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span className="text-green-600">-₹{order.order.discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charges</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="border-t pt-3 mt-3">
                <div className="flex justify-between font-semibold text-lg text-black">
                  <span>Total Amount</span>
                  <span>₹{order.order.totalDiscountedPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <Button
              onClick={handleCreatePayment}
              variant="contained"
              fullWidth
              sx={{
                marginTop: '1.5rem',
                backgroundColor: '#60A5FA',
                '&:hover': { backgroundColor: '#3B82F6' },
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 'bold',
                textTransform: 'none',
              }}
            >
              Proceed to Payment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;