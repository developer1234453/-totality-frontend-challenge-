
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Typography, Button } from '@mui/material';

function PropertyDetails() {
  const { id } = useParams();
  const property = useSelector((state) => state.properties.find((p) => p.id === parseInt(id)));

  if (!property) return <Typography variant="h6">Property not found</Typography>;

  return (
    <div>
      <img src={property.image} alt={property.title} style={{ width: '100%' }} />
      <Typography variant="h4">{property.title}</Typography>
      <Typography variant="body1">{property.description}</Typography>
      <Typography variant="h6">${property.price}/night</Typography>
      <Button variant="contained" color="primary">Book Now</Button>
    </div>
  );
}

export default PropertyDetails;
