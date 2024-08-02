
import React from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';

function Filter({ filters, setFilters }) {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleClearFilters = () => {
    setFilters({ location: '', priceRange: '', bedrooms: '', amenities: '' });
  };

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" mb={3} mt={3}>
      <FormControl variant="outlined" style={{ minWidth: 120 }}>
        <InputLabel>Location</InputLabel>
        <Select
          name="location"
          value={filters.location}
          onChange={handleChange}
          label="Location"
        >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem> value="New York</MenuItem>
  <MenuItem value="los-angeles">Los Angeles</MenuItem>
<MenuItem value="chicago">Chicago</MenuItem>
<MenuItem value="houston">Houston</MenuItem>
<MenuItem value="phoenix">Phoenix</MenuItem>
<MenuItem value="philadelphia">Philadelphia</MenuItem>
<MenuItem value="san-antonio">San Antonio</MenuItem>
<MenuItem value="san-diego">San Diego</MenuItem>
<MenuItem value="dallas">Dallas</MenuItem>
<MenuItem value="san-jose">San Jose</MenuItem>
<MenuItem value="austin">Austin</MenuItem>
<MenuItem value="jacksonville">Jacksonville</MenuItem>
<MenuItem value="san-francisco">San Francisco</MenuItem>
<MenuItem value="columbus">Columbus</MenuItem>
<MenuItem value="indianapolis">Indianapolis</MenuItem>
<MenuItem value="fort-worth">Fort Worth</MenuItem>
<MenuItem value="charlotte">Charlotte</MenuItem>
<MenuItem value="seattle">Seattle</MenuItem>
<MenuItem value="denver">Denver</MenuItem>
<MenuItem value="el-paso">El Paso</MenuItem>
<MenuItem value="detroit">Detroit</MenuItem>
<MenuItem value="boston">Boston</MenuItem>
<MenuItem value="memphis">Memphis</MenuItem>
<MenuItem value="nashville">Nashville</MenuItem>
<MenuItem value="portland">Portland</MenuItem>
        
        </Select>
      </FormControl>

      <FormControl variant="outlined" style={{ minWidth: 120 }}>
        <InputLabel>Price</InputLabel>
        <Select
          name="priceRange"
          value={filters.priceRange}
          onChange={handleChange}
          label="Price Range"
        >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value="0-1000">₹0 - ₹1,000</MenuItem>
<MenuItem value="1000-2000">₹1,000 - ₹2,000</MenuItem>
<MenuItem value="2000-3000">₹2,000 - ₹3,000</MenuItem>
<MenuItem value="3000-4000">₹3,000 - ₹4,000</MenuItem>
<MenuItem value="4000-5000">₹4,000 - ₹5,000</MenuItem>
<MenuItem value="5000-6000">₹5,000 - ₹6,000</MenuItem>
<MenuItem value="6000-7000">₹6,000 - ₹7,000</MenuItem>
<MenuItem value="7000-8000">₹7,000 - ₹8,000</MenuItem>
          
        </Select>
      </FormControl>

      <FormControl variant="outlined" style={{ minWidth: 120 }}>
        <InputLabel>Bedrooms</InputLabel>
        <Select
          name="bedrooms"
          value={filters.bedrooms}
          onChange={handleChange}
          label="Bedrooms"
        >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value="1">1 Bedroom</MenuItem>
          <MenuItem value="2">2 Bedrooms</MenuItem>
           
          <MenuItem value="2">3 Bedrooms</MenuItem>
          <MenuItem value="2">4 Bedrooms</MenuItem>
        </Select>
      </FormControl>

      <Button variant="outlined" onClick={handleClearFilters}>Clear Filters</Button>
    </Box>
  );
}

export default Filter;
