"use client"
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import qrCartReducer from "./qrCartSlice";

export const store = configureStore({
    reducer: {
       cart : cartReducer,
       qrCart : qrCartReducer,
    }
})