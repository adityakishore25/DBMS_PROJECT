import {configureStore} from "@reduxjs/toolkit";
import paperSlice from "./Slices/paperSlice";

export const store=configureStore({
  reducer:{
    cart:paperSlice
  }
})