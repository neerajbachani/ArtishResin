import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { api } from '../../../Config/ApiConfig';
import {
  Box,
  InputBase,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
  IconButton,
  Modal,
  Divider,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSearchChange = async (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    try {
      const { data } = await api.get(`/api/products/search?query=${query}`);
      setSuggestions(data.suggestions);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    navigate(`/products/id/${suggestion._id}`);
    setIsModalOpen(false);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSearchQuery('');
  };

  const trendingProducts = [
    { id: 1, name: 'Product 1', _id: 'product1' },
    { id: 2, name: 'Product 2', _id: 'product2' },
    { id: 3, name: 'Product 3', _id: 'product3' },
    { id: 4, name: 'Product 4', _id: 'product4' },
    { id: 5, name: 'Product 5', _id: 'product5' },
  ];

  return (
    <Box sx={{ position: 'relative', mt: 2 }}>
      {isMobile ? (
        <>
          <IconButton onClick={handleModalOpen}>
            <SearchIcon />
          </IconButton>
          <Modal open={isModalOpen} onClose={handleModalClose}>
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100vw',
                height: '100vh',
                zIndex: '10',
              }}
            >
              <InputBase
                sx={{ mb: 2, fontSize: 18 }}
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearchChange}
                inputProps={{ 'aria-label': 'search products' }}
                fullWidth
              />
              {searchQuery.length === 0 && (
                <>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    Trending Products
                  </Typography>
                  <Paper sx={{ maxHeight: 200, overflow: 'auto', width: '100%' }}>
                    {trendingProducts.map((product) => (
                      <Typography
                        key={product.id}
                        variant="body1"
                        sx={{ p: 1, cursor: 'pointer', '&:hover': { bgcolor: theme.palette.grey[200] } }}
                        onClick={() => handleSuggestionClick(product)}
                      >
                        {product.name}
                      </Typography>
                    ))}
                  </Paper>
                  <Divider sx={{ my: 2, width: '100%' }} />
                </>
              )}
              {suggestions.length > 0 && (
                <Paper sx={{ maxHeight: 200, overflow: 'auto', width: '100%' }}>
                  {suggestions.map((suggestion) => (
                    <Typography
                      key={suggestion.id}
                      variant="body1"
                      sx={{ p: 1, cursor: 'pointer', '&:hover': { bgcolor: theme.palette.grey[200] } }}
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion.name}
                    </Typography>
                  ))}
                </Paper>
              )}
            </Box>
          </Modal>
        </>
      ) : (
        <Paper
          component="form"
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 180,
            boxShadow: 'none',
            border: '1px solid #ccc',
            borderRadius: 2,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1, fontSize: 12 }}
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearchChange}
            inputProps={{ 'aria-label': 'search products' }}
          />
        </Paper>
      )}
      {!isMobile && suggestions.length > 0 && (
        <Paper
          sx={{
            position: 'absolute',
            zIndex: 10,
            mt: 1,
            width: 250,
            maxHeight: 300,
            overflow: 'auto',
          }}
        >
          {suggestions.map((suggestion) => (
            <Typography
              key={suggestion.id}
              variant="body1"
              sx={{ p: 1, cursor: 'pointer', '&:hover': { bgcolor: theme.palette.grey[200] } }}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.name}
            </Typography>
          ))}
        </Paper>
      )}
    </Box>
  );
};

export default SearchBar;