"use client"
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [{
        "_id": "66abde66b28ee354737f40e6",  // Ensure _id field is used
        "id": 1,
        "title": "Essence Mascara Lash Princess",
        "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        "category": "beauty",
        "price": 9.99,
        "discountPercentage": 7.17,
        "rating": 4.94,
        "stock": 5,
        "tags": [
            "beauty",
            "mascara"
        ],
        "brand": "Essence",
        "sku": "RCH45Q1A",
        "warrantyInformation": "1 month warranty",
        "shippingInformation": "Ships in 1 month",
        "availabilityStatus": "Low Stock",
        "returnPolicy": "30 days return policy",
        "images": [
            "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
        "quantity": 1  // Add a quantity field
    }]
}

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
        },
        remove(state, action) {
            const existingItem = state.items.find(item => item._id === action.payload);
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity--;
                } else {
                    state.items = state.items.filter(item => item._id !== action.payload);
                }
            }
        }
    }
})

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
