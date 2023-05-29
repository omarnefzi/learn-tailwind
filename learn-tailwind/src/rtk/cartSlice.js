import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {

    items: [],

  },
  reducers: {
    addToCard: (state, action) => {
      const findProduct = state.items.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCard: (state, action) => {
      return state.items.filter((product) => product.id !== action.payload.id);
    },
    clear: () => {
      return [];
    },
    increament: (state,action) => {

const {id}=action.payload
const product=state.items.find((item)=>item.id=== id)
if(product){
  product.quantity +=1
}

      
    },  
    decreament: (state,action) => {
      const {id}=action.payload
      const product=state.items.find((item)=>item.id=== id)
      if (product) {
        if (product.quantity > 1) {
          product.quantity -= 1;
        } else {
      
          state.items = state.items.filter((product) => product.id !== id);
        }
      }
    },
  },
});
export const { addToCard, removeFromCard, clear,increament,decreament } = cartSlice.actions;

export default cartSlice.reducer;
