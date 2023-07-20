import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "productsSlice/fetchProducts",
  async (_,rejectWithValue) => {
    try{
      const {data} = await axios.get("https://fakestoreapi.com/products");
      return data;
    }catch(error){
return rejectWithValue(error.message)
    }
  }
);
export const fetchProductsById = createAsyncThunk(
  "productsSlice/fetchProductsById",
  async (id) => {
    const res = await axios.get("https://fakestoreapi.com/products/" + id);
    return res.data;
  }
);


export const productsSlice = createSlice({
  name: "productsSlice",
  initialState:{
    isLoading:false,
    products:[],
    error:false
  },
  reducers: {
    removeFun:(state,action)=>{
      return state.filter(item=> item.id !== action.payload.id)
    
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending,(state,action)=>{
      state.isLoading=true
      state.error=false
    })
    .addCase(fetchProducts.fulfilled,(state,action)=>{
      state.isLoading=false
      state.products=action.payload
    })
    .addCase(fetchProducts.rejected,(state,action)=>{
      state.isLoading=false
      state.error=true
    })
    .addCase(fetchProductsById.fulfilled,(state,action)=>{
      return action.payload
    })
  },
});
export const {removeFun} =productsSlice.actions
export default productsSlice.reducer;
