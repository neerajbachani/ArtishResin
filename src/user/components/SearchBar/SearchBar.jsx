import React, { useState, useEffect } from 'react';
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
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSearchChange = async (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    try {
      const response = await api.get(`/api/products?query=${query}`);
      if (response.status === 200 && response.headers['content-type']?.includes('application/json')) {
        setSuggestions(response.data.suggestions);
        setShowSuggestions(response.data.suggestions.length > 0);
      } else {
        setSuggestions([]);
        setShowSuggestions(false);
        console.error('Unexpected response format:', response);
      }
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/products?query=${encodeURIComponent(searchQuery)}`);
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (suggestion) => {
    navigate(`/products/id/${suggestion._id}`);
    setIsModalOpen(false);
    setShowSuggestions(false);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSearchQuery('');
    setShowSuggestions(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const searchBar = document.getElementById('search-bar');
      if (searchBar && !searchBar.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Box sx={{ position: 'relative', mt: 2 }} id="search-bar">
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
              {showSuggestions && (
                <Paper sx={{ maxHeight: 200, overflow: 'auto', width: '100%' }}>
                  {suggestions.map((suggestion) => (
                    <Typography
                      key={suggestion._id}
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
          onSubmit={handleSearchSubmit}
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
          <IconButton type="submit">
            <SearchIcon />
          </IconButton>
        </Paper>
      )}
      {!isMobile && showSuggestions && (
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
              key={suggestion._id}
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



