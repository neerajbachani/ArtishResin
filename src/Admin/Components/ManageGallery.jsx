import React, { useState, useEffect } from 'react';
import { Typography, Grid, Button, Avatar, Card, CardHeader, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, LinearProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createGalleryPhoto, deleteGalleryPhoto, getGalleryPhotos } from "../../user/redux/Gallery/Action";
import { Upload, Trash2 } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const ManageGallery = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { gallery } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getGalleryPhotos());
  }, [dispatch, gallery.deleteGalleryPhoto, gallery.createGalleryPhoto]);

  const handleFileChange = (e) => {
    setSelectedFiles([...e.target.files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedFiles.length === 0) {
      toast.error('Please select at least one file to upload.');
      return;
    }

    setLoading(true);

    const uploadPromises = selectedFiles.map(file => {
      const formData = new FormData();
      formData.append('image', file);

      return dispatch(createGalleryPhoto(formData));
    });

    Promise.all(uploadPromises)
      .then(() => {
        setSelectedFiles([]);
        setLoading(false);
        toast.success('Photos uploaded successfully!');
      })
      .catch((error) => {
        console.error('Failed to create gallery photos:', error);
        setLoading(false);
        toast.error('Failed to upload photos. Please try again.');
      });
  };

  const handleDeleteGalleryPhoto = (galleryPhotoId) => {
    dispatch(deleteGalleryPhoto(galleryPhotoId))
      .then(() => {
        toast.success('Photo deleted successfully!');
      })
      .catch((error) => {
        console.error('Failed to delete gallery photo:', error);
        toast.error('Failed to delete photo. Please try again.');
      });
  };
  

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <Toaster position="top-right" />
      <Typography variant="h3" className="text-3xl font-bold text-center mb-8 text-gray-800">
        Manage Your Gallery
      </Typography>
      <Card className="mb-8 p-6 shadow-lg">
        {loading && <LinearProgress />}
        <form onSubmit={handleSubmit}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <input
                type="file"
                id="gallery-upload"
                multiple
                onChange={handleFileChange}
                className="hidden"
              />
              <label htmlFor="gallery-upload" className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition-colors">
                <Upload className="mr-2" />
                <span>{selectedFiles.length > 0 ? `${selectedFiles.length} file(s) selected` : 'Choose files'}</span>
              </label>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button
                variant="contained"
                size="large"
                type="submit"
                startIcon={<Upload />}
                fullWidth
                sx={{
                  p: 2,
                  backgroundColor: '#3B82F6',
                  '&:hover': { backgroundColor: '#2563EB' },
                }}
              >
                Upload to Gallery
              </Button>
            </Grid>
          </Grid>
        </form>
      </Card>
      <Card className="shadow-lg">
        <CardHeader
          title="Gallery Photos"
          sx={{
            p: 4,
            backgroundColor: '#3B82F6',
            color: 'white',
          }}
        />
        <TableContainer>
          <Table sx={{ minWidth: 800 }} aria-label="gallery photos table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Link</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {gallery?.galleryPhotos?.flatMap((item) => 
                item.image.map((imageUrl, index) => (
                  <TableRow
                    hover
                    key={`${item._id}-${index}`}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell>
                      <Avatar
                        alt={`Image ${index + 1}`}
                        src={imageUrl}
                        sx={{ width: 60, height: 60 }}
                      />
                    </TableCell>
                    <TableCell>
                      <a href={imageUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        {imageUrl}
                      </a>
                    </TableCell>
                    <TableCell align="center">
                      <IconButton
                        onClick={() => handleDeleteGalleryPhoto(item._id, imageUrl)}
                        color="error"
                      >
                        <Trash2 />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default ManageGallery;




