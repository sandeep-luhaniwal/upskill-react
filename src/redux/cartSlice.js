import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProductIndex = state.cart.findIndex(item => item.tital === product.tital);

      if (existingProductIndex !== -1) {
        state.cart[existingProductIndex].quantity += 1;
        state.total += Number(state.cart[existingProductIndex].rate);
      } else {
        state.cart.push({ ...product, quantity: 1 });
        state.total += Number(product.rate);
      }
    },
    increaseQuantity: (state, action) => {
      const index = action.payload;
      state.cart[index].quantity += 1;
      state.total += Number(state.cart[index].rate);
    },
    decreaseQuantity: (state, action) => {
      const index = action.payload;
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity -= 1;
        state.total -= Number(state.cart[index].rate);
      } else {
        state.total -= Number(state.cart[index].rate);
        state.cart.splice(index, 1);
      }
    },
    clearCart: (state) => {
      state.cart = [];
      state.total = 0;
    }
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
