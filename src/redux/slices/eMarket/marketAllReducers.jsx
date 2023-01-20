import { combineReducers } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import cartTotalSlice from './cartTotalSlice';
import modalSlice from './modalSlice';
import productsSlice from './productsSlice';

export const marketAllReducers = combineReducers({
  modal: modalSlice,
  cart: cartSlice,
  products: productsSlice,
  total: cartTotalSlice,
});
