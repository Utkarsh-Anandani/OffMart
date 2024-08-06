"use client"
import React, { useEffect } from 'react';
import { Provider, useDispatch } from "react-redux";
import { store } from "./store";
import { setItems } from './cartSlice';

const StoreInitializer = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart") || "[]");
    dispatch(setItems(items));
  }, [dispatch]);

  return children;
}

export const StoreProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <StoreInitializer>
        {children}
      </StoreInitializer>
    </Provider>
  )
}
