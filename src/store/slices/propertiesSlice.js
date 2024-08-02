
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  
  { id: 1, image: '/path/to/image1.jpg', title: 'Property 1', description: 'Description 1', price: 100 },
  { id: 2, image: '/path/to/image2.jpg', title: 'Property 2', description: 'Description 2', price: 150 },
  
];

const propertiesSlice = createSlice({
  name: 'properties',
  initialState,
  reducers: {
    
  },
});

export default propertiesSlice.reducer;
