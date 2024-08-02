
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';

function PropertyCard({ property }) {
  const dispatch = useDispatch();

  const handleBookNow = () => {
    dispatch(addToCart(property));
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
          borderRadius: '16px', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)', 
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)', 
          },
        }}
      >
        <CardMedia
          component="img"
          alt={property.title}
          height="200"
          image={property.image}
          sx={{ borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }} 
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {property.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {property.description}
          </Typography>
          <Typography variant="h6">
            ${property.price}/night
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleBookNow}
            sx={{ mt: 2 }} 
          >
            Book Now
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default PropertyCard;
