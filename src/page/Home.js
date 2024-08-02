
import React, { useState, useEffect } from 'react';
import PropertyCard from '../components/PropertyCard';
import Filter from '../components/Filter';
import { Grid, Container } from '@mui/material';

// Mock properties
const mockProperties = [
  { id: 1, image: 'https://picsum.photos/400/300?random=1', title: 'Property 1', description: 'Description 1', price: 100 },
  { id: 2, image: 'https://picsum.photos/400/300?random=2', title: 'Property 2', description: 'Description 2', price: 150 },
  { id: 3, image: 'https://picsum.photos/400/300?random=3', title: 'Property 3', description: 'Description 3', price: 200 },
  { id: 4, image: 'https://picsum.photos/400/300?random=4', title: 'Property 4', description: 'Description 4', price: 250 },
  { id: 5, image: 'https://picsum.photos/400/300?random=5', title: 'Property 5', description: 'Description 5', price: 300 },
  { id: 6, image: 'https://picsum.photos/400/300?random=6', title: 'Property 6', description: 'Description 6', price: 350 },
  { id: 7, image: 'https://picsum.photos/400/300?random=7', title: 'Property 7', description: 'Description 7', price: 400 },
  { id: 8, image: 'https://picsum.photos/400/300?random=8', title: 'Property 8', description: 'Description 8', price: 450 },
  { id: 9, image: 'https://picsum.photos/400/300?random=9', title: 'Property 9', description: 'Description 9', price: 500 },
  { id: 10, image: 'https://picsum.photos/400/300?random=10', title: 'Property 10', description: 'Description 10', price: 550 },
  { id: 11, image: 'https://picsum.photos/400/300?random=11', title: 'Property 11', description: 'Description 11', price: 600 },
  { id: 12, image: 'https://picsum.photos/400/300?random=12', title: 'Property 12', description: 'Description 12', price: 650 },
  { id: 13, image: 'https://picsum.photos/400/300?random=13', title: 'Property 13', description: 'Description 13', price: 700 },
  { id: 14, image: 'https://picsum.photos/400/300?random=14', title: 'Property 14', description: 'Description 14', price: 750 },
  { id: 15, image: 'https://picsum.photos/400/300?random=15', title: 'Property 15', description: 'Description 15', price: 800 },
  { id: 16, image: 'https://picsum.photos/400/300?random=16', title: 'Property 16', description: 'Description 16', price: 850 },
  { id: 17, image: 'https://picsum.photos/400/300?random=17', title: 'Property 17', description: 'Description 17', price: 900 },
  { id: 18, image: 'https://picsum.photos/400/300?random=18', title: 'Property 18', description: 'Description 18', price: 950 },
  { id: 19, image: 'https://picsum.photos/400/300?random=19', title: 'Property 19', description: 'Description 19', price: 1000 },
  { id: 20, image: 'https://picsum.photos/400/300?random=20', title: 'Property 20', description: 'Description 20', price: 1050 },
  { id: 21, image: 'https://picsum.photos/400/300?random=21', title: 'Property 21', description: 'Description 21', price: 1100 },
  { id: 22, image: 'https://picsum.photos/400/300?random=22', title: 'Property 22', description: 'Description 22', price: 1150 },
  { id: 23, image: 'https://picsum.photos/400/300?random=23', title: 'Property 23', description: 'Description 23', price: 1200 },
  { id: 24, image: 'https://picsum.photos/400/300?random=24', title: 'Property 24', description: 'Description 24', price: 1250 },
  { id: 25, image: 'https://picsum.photos/400/300?random=25', title: 'Property 25', description: 'Description 25', price: 1300 },
];

function Home() {
  const [filters, setFilters] = useState({ location: '', priceRange: '', bedrooms: '', amenities: '' });
  const [properties, setProperties] = useState(mockProperties);

  // Example filter logic
  useEffect(() => {
    let filteredProperties = mockProperties;

    // Implement filtering logic based on filters state here
    // For example:
    if (filters.priceRange) {
      const [minPrice, maxPrice] = filters.priceRange.split('-').map(Number);
      filteredProperties = filteredProperties.filter(property => property.price >= minPrice && property.price <= maxPrice);
    }

    // Update properties state with filtered properties
    setProperties(filteredProperties);
  }, [filters]);

  return (
    <Container>
      <Filter filters={filters} setFilters={setFilters} />
      <Grid container spacing={4}>
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </Grid>
    </Container>
  );
}

export default Home;
