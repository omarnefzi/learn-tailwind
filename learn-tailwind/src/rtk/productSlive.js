import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "productsSlice/fetchProducts",
  async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    return res.data;
  }
);

export const productsSlice = createSlice({
  name: "productsSlice",
  initialState:[],
  reducers: {
    removeFun:(state,action)=>{
      return state.filter(item=> item.id !== action.payload.id)
    
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled,(_,action)=>{
      return action.payload
    })
  },
});
export const {removeFun} =productsSlice.actions
export default productsSlice.reducer;
