import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      state.push(product);
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      return state.filter((product) => product.id !== itemId);
    },
    getTotal: (state) => {
      // Calculate the total
      // Replace this with your own logic to calculate the total
      return state.reduce((total, product) => total + product.price, 0);
    },
    clearCart: () => {
      return [];
    },
  },
});

export const { addToCart, removeFromCart, getTotal, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
