"use client"
import { createSlice } from "@reduxjs/toolkit";

// Helper functions to manage localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (err) {
    return [];
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cart", serializedState);
  } catch (err) {
    // Ignore write errors
  }
};

const initialState = {
  items: loadState(),
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      const existingItem = state.items.find(item => item._id === action.payload._id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      saveState(state.items); // Save to localStorage
    },
    decrement(state, action) {
      const existingItem = state.items.find(item => item._id === action.payload);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity--;
        } else {
          state.items = state.items.filter(item => item._id !== action.payload);
        }
      }
      saveState(state.items); // Save to localStorage
    },
    remove(state, action) {
      state.items = state.items.filter(item => item._id !== action.payload);
      saveState(state.items); // Save to localStorage
    },
    setItems(state, action) {
      state.items = action.payload;
      saveState(state.items); // Save to localStorage
    }
  }
})

export const { add, decrement, remove, setItems } = cartSlice.actions;

export default cartSlice.reducer;
