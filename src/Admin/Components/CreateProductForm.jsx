import { useState } from "react";
import React from 'react'
import { Typography } from "@mui/material";
import {
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";


import { Fragment } from "react";

import { useDispatch } from "react-redux";
import { createProduct } from "../../user/redux/Product/Action";
import { Toaster, toast } from 'react-hot-toast';
import { showSuccessToast, showErrorToast } from '../../user/components/toast';

 

const CreateProductForm = () => {
  
  const [selectedFile, setSelectedFile] = useState(null);
  const [productData, setProductData] = useState({
    image: "",
    name: "",
    details: "",
    color: "",
    discount: "",
    price: "",
    discountPercent: "",
    discountedPrice: "",
    quantity: "",
    varmalaPreservation: "",
    workshop: "",
    wallClock: "",
    namePlate: "",
    navkarMantraFrame: "",
    resinSpecial: "",
    geodeArt: "",
    description1: "",
    description2: "",
    description3: "",

  });
const dispatch=useDispatch();
const jwt=localStorage.getItem("jwt")

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const resizeImage = (file, maxWidth, maxHeight) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > maxWidth) {
              height *= maxWidth / width;
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width *= maxHeight / height;
              height = maxHeight;
            }
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);

          canvas.toBlob((blob) => {
            resolve(new File([blob], file.name, { type: 'image/jpeg', lastModified: Date.now() }));
          }, 'image/jpeg', 0.7);
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const resizedFile = await resizeImage(file, 1920, 1080); // Adjust max dimensions as needed
      setSelectedFile(resizedFile);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct({ ...productData, image: selectedFile }))
      .then(() => {
        setProductData({
          image: '',
          name: '',
          details: '',
          color: '',
          discount: '',
          price: '',
          discountPercent: '',
          discountedPrice: '',
          quantity: '',
          geodeArt: '',
          varmalaPreservation: '',
          workshop: '',
          wallClock: '',
          namePlate: '',
          navkarMantraFrame: '',
          resinSpecial: '',
          description1: '',
          description2: '',
          description3: '',
        });
        setSelectedFile(null);
        // showSuccessToast('Product created successfully');
      })
      .catch((error) => {
        console.log('error');
        // showErrorToast('Failed to create product. Please try again.');
      });
  };

 
  return (
    <><Toaster />
    <div className=" bg-[#1b1b1b]">
      <Typography
        variant="h3"
        sx={{ textAlign: "center" }}
        className="py-10 text-center "
      >
        Add New Product
      </Typography>
      <form
        onSubmit={handleSubmit}
        className="createProductContainer min-h-screen"
      >
        <Grid container spacing={2}>
        <Grid item xs={12}>
  <input
    type="file"
    name="image"
    onChange={handleFileChange}
  />
</Grid>
          
        
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={productData.name}
              onChange={handleChange}
            />
          </Grid>
          
          
          
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Price"
              name="price"
              value={productData.price}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Discounted Price"
              name="discountedPrice"
              value={productData.discountedPrice}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Discount Percentage"
              name="discount"
              value={productData.discount}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Varmala Preservation</InputLabel>
              <Select
                name="varmalaPreservation"
                value={productData.varmalaPreservation}
                onChange={handleChange}
                label="Varmala Preservation"
              >
                <MenuItem value="planter">Planter</MenuItem>
                <MenuItem value="unevenRound">10' Uneven Round</MenuItem>
                <MenuItem value="square8">8' Square</MenuItem>
                <MenuItem value="square12">12' Square</MenuItem>
                <MenuItem value="square18">18' Square</MenuItem>
                <MenuItem value="clock12">12' Clock</MenuItem>
                <MenuItem value="round12">12' Round</MenuItem>
                <MenuItem value="round18">18' Round</MenuItem>
                <MenuItem value="otherVarmalaStyles">Other Varmala Styles</MenuItem>




              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Wall Clock</InputLabel>
              <Select
                name="wallClock"
                value={productData.wallClock}
                onChange={handleChange}
                label="Wall Clock"
              >
                <MenuItem value="resinWallClock">Resin Wall Clock</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Name Plate</InputLabel>
              <Select
                name="namePlate"
                value={productData.namePlate}
                onChange={handleChange}
                label="Name Plate"
              >
                <MenuItem value="customizedNamePlate">Customized Name Plate</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Resin Special</InputLabel>
              <Select
                name="resinSpecial"
                value={productData.resinSpecial}
                onChange={handleChange}
                label="Resin Special"
              >
                <MenuItem value="ourSignatureStyle">Our Signature Style</MenuItem>
                <MenuItem value="resinSpecial">Resin Special</MenuItem>
                <MenuItem value="wallArt">Wall Art</MenuItem>
                <MenuItem value="resinTable">Resin Table</MenuItem>
                <MenuItem value="opalArt">Opal Art</MenuItem>
                <MenuItem value="pichwaiArt">Pichwai Art</MenuItem>


              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Navkar Mantra Frame</InputLabel>
              <Select
                name="navkarMantraFrame"
                value={productData.navkarMantraFrame}
                onChange={handleChange}
                label="navkarMantraFrame"
              >
                <MenuItem value="presonalizedMantraFrame">Personalized Mantra Frame</MenuItem>
              

              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Geode Art</InputLabel>
              <Select
                name="geodeArt"
                value={productData.geodeArt}
                onChange={handleChange}
                label="Geode Art"
              >
                <MenuItem value="geodeartedition">Geode Art Edition</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Workshop</InputLabel>
              <Select
                name="workshop"
                value={productData.workshop}
                onChange={handleChange}
                label="Workshop"
              >
                <MenuItem value="bookWorkshop">Book a Workshop</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Description 1"
              multiline
              name="description1"
              rows={3}
              onChange={handleChange}
              value={productData.description1}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Description 2"
              multiline
              name="description2"
              rows={3}
              onChange={handleChange}
              value={productData.description2}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Description 3"
              multiline
              name="description3"
              rows={3}
              onChange={handleChange}
              value={productData.description3}
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              fullWidth
              label="Details"
              name="details"
              value={productData.details}
              onChange={handleChange}
            />
          </Grid>
          
          <Grid item xs={12} >
            <Button
              variant="contained"
              sx={{ p: 1.8 }}
              className="py-20"
              size="large"
              type="submit"
            >
              Add New Product
            </Button>
         
          </Grid>
        </Grid>
      </form>
   
    </div>
    </>
  );
};

export default CreateProductForm;