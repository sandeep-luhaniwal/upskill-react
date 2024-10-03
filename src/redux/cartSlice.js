import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],  // Array to hold cart items
  total: 0,  // Holds total price of the items in the cart
};

export const cartSlice = createSlice({
  name: 'cart',  // Name of the slice
  initialState,  // Initial state of the slice
  reducers: {
    // Add a product to the cart or update quantity if it already exists
    addToCart: (state, action) => {
      const product = action.payload;  // The product being added
      const existingProductIndex = state.cart.findIndex(item => item.title === product.title);  // Check if product already exists in the cart

      if (existingProductIndex !== -1) {
        // If the product already exists, increase its quantity and update the total
        state.cart[existingProductIndex].quantity += 1;
        state.total += Number(state.cart[existingProductIndex].rate);
      } else {
        // If the product does not exist in the cart, add it and update the total
        state.cart.push({ ...product, quantity: 1 });
        state.total += Number(product.rate);
      }
    },

    // Increase the quantity of a specific product in the cart
    increaseQuantity: (state, action) => {
      const index = action.payload;  // Index of the product to increase quantity
      state.cart[index].quantity += 1;
      state.total += Number(state.cart[index].rate);  // Update the total price
    },

    // Decrease the quantity of a specific product in the cart
    decreaseQuantity: (state, action) => {
      const index = action.payload;  // Index of the product to decrease quantity
      if (state.cart[index].quantity > 1) {
        // If quantity is greater than 1, simply decrease the quantity and update the total
        state.cart[index].quantity -= 1;
        state.total -= Number(state.cart[index].rate);
      } else {
        // If quantity is 1, remove the product from the cart and update the total
        state.total -= Number(state.cart[index].rate);
        state.cart.splice(index, 1);
      }
    },

    // Clear the entire cart
    clearCart: (state) => {
      state.cart = [];  // Reset the cart array
      state.total = 0;  // Reset the total price
    },
  },
});

// Export actions so they can be dispatched from your components
export const { addToCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;

// Export the reducer to be included in the store
export default cartSlice.reducer;
