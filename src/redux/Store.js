import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './cryptoSlice';
import searchReducer from './searchSlice';

const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
    search: searchReducer,
  },
});

export default store;
