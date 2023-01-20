import { createSlice } from '@reduxjs/toolkit';

const cartTotal = { subTotal: 0, shipping: 20, tax: 0, total: 0 };

const cartTotalSlice = createSlice({
  name: 'cartTotal',
  initialState: {
    cartTotal: cartTotal,
  },
  reducers: {
    countCartTotal: (state, { payload }) => {
      let newSubTotal = 0;
      payload?.map((product) => (newSubTotal += product.quantityBasePrice));
      state.cartTotal.subTotal = newSubTotal;
      state.cartTotal.tax = (newSubTotal / 100) * 5;
      state.cartTotal.total =
        state.cartTotal.tax + newSubTotal + state.cartTotal.shipping;
    },
  },
});

export const { countCartTotal } = cartTotalSlice.actions;

export default cartTotalSlice.reducer;
