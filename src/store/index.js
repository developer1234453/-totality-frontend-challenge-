

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import propertiesReducer from './slices/propertiesSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    properties: propertiesReducer,
  },
});
