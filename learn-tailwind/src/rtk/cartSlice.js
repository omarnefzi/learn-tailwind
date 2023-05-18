import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: [],
  reducers: {
    addToCard: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCard: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    clear: () => {
      return [];
    },
  },
});
export const { addToCard, removeFromCard, clear } = cartSlice.actions;

export default cartSlice.reducer;
