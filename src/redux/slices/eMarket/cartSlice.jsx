import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    setCart: (state, { payload }) => {
      state.cart.push(payload);
    },
    removeFromCart: (state, { payload }) => {
      const newCart = state.cart.filter((cart) => cart.id !== payload);
      state.cart = newCart;
    },
    increaseQuantity: (state, { payload }) => {
      const handleIncrease = () => {
        const update = state.cart.find((p) => p.id === payload);
        update.quantity += 1;
        const quantityBasePrice = update.price * update.quantity;
        update.quantityBasePrice = quantityBasePrice;
        return update;
      };
      const increase = state.cart.map((cart) =>
        cart.id === payload ? handleIncrease() : cart
      );
      state.cart = increase;
    },
    decreaseQuantity: (state, { payload }) => {
      const handleDecrease = () => {
        const update = state.cart.find((p) => p.id === payload);
        if (update.quantity > 1) {
          update.quantity -= 1;
          const quantityBasePrice = update.price * update.quantity;
          update.quantityBasePrice = quantityBasePrice;
        }
        return update;
      };
      const decrease = state.cart.map((cart) =>
        cart.id === payload ? handleDecrease() : cart
      );
      state.cart = decrease;
    },
    clearCart: (state, { payload }) => {
      console.log('Hitted on cartSlice');
      state.cart = [];
    },
  },
});

export const {
  setCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
