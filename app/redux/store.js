// app/redux/store.js
"use client";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import qrCartReducer from "./qrCartSlice";
import shoppingListReducer from "./shoppingListSlice";

export const store = configureStore({
    reducer: {
       cart: cartReducer,
       qrCart: qrCartReducer,
       shoppingList: shoppingListReducer,
    }
});
