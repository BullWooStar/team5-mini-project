import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingIndex = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (!existingIndex) {
        state.cartItems.push({ ...action.payload });
      } else {
        return alert("이미 추가된 상품입니다.");
      }
    },
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    clearCart(state) {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
