import { configureStore } from '@reduxjs/toolkit';
import numReducer from '../features/trannum/TrannumSlice'
export const store = configureStore({
  
  reducer: {
    num: numReducer,
  },
});
