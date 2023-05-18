import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productsSlice  from "./productSlive";

const store =configureStore({
  reducer :{
    products:productsSlice,
    cart:cartSlice
  }
})
export default  store