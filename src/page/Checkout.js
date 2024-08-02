
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextField, Button, Typography, Box, Grid, Alert } from '@mui/material';
import { clearCart } from '../store/slices/cartSlice'; // Ensure this path is correct

function Checkout() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const [details, setDetails] = useState({ name: '', email: '', payment: '' });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleCheckout = () => {
    if (!details.name || !details.email || !details.payment) {
      setError('Please fill out all fields.');
      return;
    }
    setError(null);

   
    setTimeout(() => {
      dispatch(clearCart()); 
      setSuccess('Booking completed successfully!');
      setDetails({ name: '', email: '', payment: '' }); 
    }, 1000);
  };

  return (
    <Box padding={2}>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>
      <Typography variant="h6" gutterBottom>
        Total: ${total}
      </Typography>
      {error && <Alert severity="error">{error}</Alert>}
      {success && <Alert severity="success">{success}</Alert>}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Name"
            name="name"
            value={details.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Email"
            name="email"
            value={details.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Payment Details"
            name="payment"
            value={details.payment}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleCheckout}>
            Complete Booking
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Checkout;
