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
} from '@mui/material';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
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
  };

  return (
   
    <Box sx={{ position: 'relative', mt: 2 }}>
      <Paper
        component="form"
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: isMobile ? 150 : 250,
          boxShadow: 'none',
          border: '1px solid #ccc',
          borderRadius: 2,
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchChange}
          inputProps={{ 'aria-label': 'search products' }}
        />
      </Paper>
      {suggestions.length > 0 && (
        <Paper
          sx={{
            position: 'absolute',
            zIndex: 10,
            mt: 1,
            width: isMobile ? 150 : 250,
            maxHeight: 300,
            overflow: 'auto',
          }}
        >
          {suggestions.map((suggestion) => (
            <Typography
              key={suggestion.id}
              variant="body1"
              sx={{
                p: 1,
                cursor: 'pointer',
                '&:hover': { bgcolor: theme.palette.grey[200] },
              }}
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