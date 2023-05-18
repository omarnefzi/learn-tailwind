import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "productsSlice/fetchProducts",
  async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    return res;
  }
);

export const productsSlice = createSlice({
  name: "productsSlice",
  initialState:[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled,(_,action)=>{
      return action.payload
    })
  },
});

export default productsSlice.reducer;
