import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      const itemIndex = state.products.findIndex(
        (item) => item.id === action.payload
      );
      const item = state.products[itemIndex];

      if (item.quantity === 1) {
        state.products.splice(itemIndex, 1);
      } else {
        state.products[itemIndex] = { ...item, quantity: item.quantity - 1 };
      }
    },
    resetCart: (state) => {
      state.products = [];
    },
  },
});

export const { addToCart, removeItem, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
