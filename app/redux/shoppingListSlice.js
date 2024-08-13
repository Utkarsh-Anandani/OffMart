"use client";
import { createSlice } from "@reduxjs/toolkit";

// Helper functions to manage localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("shoppingList");
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (err) {
    return [];
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("shoppingList", serializedState);
  } catch (err) {
    // Ignore write errors
  }
};

const initialState = {
  items: loadState(),
};

export const shoppingListSlice = createSlice({
  name: "shoppingList",
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
      saveState(state.items);
    },
    editItem(state, action) {
      const { index, item } = action.payload;
      state.items[index] = item;
      saveState(state.items);
    },
    removeItem(state, action) {
      state.items.splice(action.payload, 1);
      saveState(state.items);
    },
    setItems(state, action) {
      state.items = action.payload;
      saveState(state.items);
    },
  },
});

export const { addItem, editItem, removeItem, setItems } = shoppingListSlice.actions;

export default shoppingListSlice.reducer;
