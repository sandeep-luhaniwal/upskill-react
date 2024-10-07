import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add to cart or increase quantity if item exists
    addToCart: (state, action) => {
      const existingItem = state.cart.find((item) => item.tital === action.payload.tital);
      const rate = Number(action.payload.rate); // Ensure rate is treated as a number

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      state.total += rate; // Add item rate to the total as a number
    },

    // Increase the quantity of an item
    increaseQuantity: (state, action) => {
      const item = state.cart[action.payload];
      if (item) {
        item.quantity += 1;
        state.total += Number(item.rate); // Update total as a numerical value
      }
    },

    // Decrease the quantity of an item or remove it if quantity reaches zero
    decreaseQuantity: (state, action) => {
      const item = state.cart[action.payload];
      const rate = Number(item.rate);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.total -= rate; // Deduct item rate from total as a number
      } else if (item && item.quantity === 1) {
        // Remove item from cart if quantity reaches zero
        state.total -= rate; // Deduct rate from total before removing the item
        state.cart.splice(action.payload, 1);
      }
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
