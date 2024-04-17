

import React from "react";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../../redux/Cart/Action";
import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";

const CartItem = ({ item,showButton }) => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  const handleRemoveItemFromCart = () => {
    const data = { cartItemId: item?._id, jwt };
    dispatch(removeCartItem(data));
  };
  const handleUpdateCartItem=(num)=>{
    const data={data:{quantity:item.quantity+num}, cartItemId:item?._id, jwt}
    console.log("update data ",data)
    dispatch(updateCartItem(data))
  }
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] ">
          <img
            className="w-full h-full object-cover object-top"
            src={item?.product?.image}
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold text-secondary-dark-color font-poppins text-xl ">{item?.product?.name}</p>
          <div className="flex space-x-2 items-center pt-3">
            <p className="opacity-50 line-through text-xl font-poppins">₹{item?.product?.price}</p>
            <p className="font-semibold text-2xl font-poppins text-primarycolor ">
              ₹{item?.product?.discountedPrice}
            </p>
            <p className="text-green-600 font-semibold font-poppins text-secondary-dark-color">
              {item?.product?.discount}% off
            </p>
          </div>
        </div>
      </div>
     {showButton&& <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2 ">
          <button onClick={()=>handleUpdateCartItem(-1)} disabled={item?.quantity<=1}  aria-label="add an alarm" >
            <AiOutlineMinusCircle style={{
              "color": "#1d3557",
              "backgroundColor": "#ffffff"
            }} className="  text-2xl" />
          </button>

          <span className="py-1 px-7 border rounded-sm">{item?.quantity}</span>
          <IconButton onClick={()=>handleUpdateCartItem(1)} color="primary" aria-label="add an alarm">
            <AiOutlinePlusCircle style={{
              "color": "#1d3557",
              "backgroundColor": "#ffffff"
            }}  className=" text-2xl" />
          </IconButton>
        </div>
        <div className="flex text-sm lg:text-base mt-5 lg:mt-0 ">
          
          <Button onClick={handleRemoveItemFromCart} variant="text" sx={{ color: "#e63946" , fontFamily: "poppins" }}>
            Remove{" "}
          </Button>
          
        </div>
      </div>}
      
    </div>
  );
};

export default CartItem;
