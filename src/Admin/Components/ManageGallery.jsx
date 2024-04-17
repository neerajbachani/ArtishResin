import { useState } from "react";
import { Typography } from "@mui/material";

import {
  Grid,
  TextField,
  Button,
 
} from "@mui/material";


import { useDispatch } from "react-redux";
import { createHeroSection, deleteHeroSection, getHeroSection } from "../../user/redux/HeroSection/Action";
// import { createProduct } from "../../user/redux/Product/Action";
import {
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
 
  } from "@mui/material";
  
  import React from "react";
  // import { dressPage1 } from "../../../Data/dress/page1";
  import { useLocation, useNavigate } from "react-router-dom";
  import { useEffect } from "react";
  import {  useSelector } from "react-redux";
  import { deleteProduct, findProducts } from "../../user/redux/Product/Action";
import { createGalleryPhoto, deleteGalleryPhoto, getGalleryPhotos } from "../../user/redux/Gallery/Action";




const ManageGallery = () => {
  
  const [galleryPhotoData, setGalleryPhotoData] = useState({
    link: "",
  });
const dispatch=useDispatch();
const jwt=localStorage.getItem("jwt")

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGalleryPhotoData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createGalleryPhoto(galleryPhotoData))
    // dispatch(createProduct(productData))
    console.log(galleryPhotoData);
  };
  
  const { gallery } = useSelector((store) => store);

  useEffect(() => {
    
    dispatch(getGalleryPhotos())
  }, [gallery.deleteGalleryPhoto]);


  const handleDeleteGalleryPhoto=(galleryPhotoId)=>{
    console.log("delete product ", galleryPhotoId)
    dispatch(deleteGalleryPhoto(galleryPhotoId))
  }

  return (
    <div className=" bg-[#1b1b1b]">
      <Typography
        variant="h3"
        sx={{ textAlign: "center" }}
        className="py-10 text-center "
      >
        Add Photos in your Gallery 
      </Typography>
      <form
        onSubmit={handleSubmit}
        className=" min-h-[17rem]"
      >
        <Grid container spacing={2}>
         
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Image Gallery"
              name="link"
              value={gallery?.galleryPhotos?.link}
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
              Add Photo to your Gallery
            </Button>
         
          </Grid>
        </Grid>
      </form>
      <div className="">
      <Box width={"100%"}>
      
      <Card className="mt-2">
        <CardHeader
          title="All Photos"
          sx={{
            pt: 2,
            alignItems: "center",
            "& .MuiCardHeader-action": { mt: 0.6 },
          }}
        />
        <TableContainer>
          <Table sx={{ minWidth: 800 }} aria-label="table in dashboard">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
               
                <TableCell sx={{ textAlign: "center" }}>Link</TableCell>
               
                <TableCell sx={{ textAlign: "center" }}>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {gallery?.galleryPhotos?.map((item) => (
                <TableRow
                  hover
                  key={item.link}
                  sx={{ "&:last-of-type td, &:last-of-type th": { border: 0 } }}
                  
                >
                  <TableCell>
                    {" "}
                    <Avatar alt={item.link} src={item.link} />{" "}
                  </TableCell>

                
                  {/* <TableCell sx={{ textAlign: "center" }}>{item.category.name}</TableCell> */}
                   <TableCell sx={{ textAlign: "center" }}>{item.link}</TableCell>
                   
              
                  <TableCell sx={{ textAlign: "center" }}>
                    <Button variant="text" 
                    onClick={()=>handleDeleteGalleryPhoto(item._id)}
                    >Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
      
    </Box>
      </div>
    </div>
  );
};

export default ManageGallery;