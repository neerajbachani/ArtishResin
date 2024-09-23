import React from 'react';
import { useState } from "react";
import { TextField, Button, Typography, Box, Grid, Paper, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createContact } from "../../redux/Contact/Action";
import { Phone, Email, LocationOn } from '@mui/icons-material';

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const { auth } = useSelector((store) => store);
  const userId = auth?.user?._id;
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createContact({userId, name, email, phone, message}));
  };

  return (
    <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
      <Grid container spacing={4} maxWidth="lg" margin="auto">
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
            <Typography variant="h4" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body1" paragraph>
              We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.
            </Typography>
            <Box sx={{ mb: 2 }}>
              <IconButton color="primary" aria-label="phone">
                <Phone />
              </IconButton>
              <Typography variant="body1" display="inline">
                +91 9429350252
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <IconButton color="primary" aria-label="email">
                <Email />
              </IconButton>
              <Typography variant="body1" display="inline">
                artishisha1@gmail.com
              </Typography>
            </Box>
            <Box>
              <IconButton color="primary" aria-label="location">
                <LocationOn />
              </IconButton>
              <Typography variant="body1" display="inline">
                Artish_Isha's Resin Art Studio, Vadodara, Gujarat
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
                required
                type="email"
              />
              <TextField
                fullWidth
                label="Phone Number"
                value={phone}
                onChange={(e) => setPhoneNumber(e.target.value)}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                margin="normal"
                required
                multiline
                rows={4}
              />
              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{
                  mt: 2,
                  backgroundColor: "#000",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#111",
                  },
                }}
              >
                Submit
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
      <Box sx={{ mt: 4, width: '100%', height: '450px' }}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.991818381604!2d73.12744447529306!3d22.31614917967511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc933ad095567%3A0xf08f50e967d73000!2sArtish_Isha&#39;s%20Resin%20Art%20Studio!5e0!3m2!1sen!2sin!4v1714390868858!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }}
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </Box>
  );
}