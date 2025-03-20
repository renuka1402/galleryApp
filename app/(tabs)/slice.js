import { createSlice } from '@reduxjs/toolkit';
import {  Alert } from "react-native";
const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
 
    // addToCart: (state, action) => {
    //   // state.cartItems.push(action.payload);
    //   // console.log(action.payload);
      addToCart: (state, action) => {
        const sameitem= state.cartItems.some(item => item.id === action.payload.id);
        console.log(action.payload)
        
      
        if (!sameitem) {
          state.cartItems.push({ ...action.payload});
        } else {
           Alert.alert("Error", "All fields are required!");
        }
       
      },
      
      
    

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
      console.log(action.payload);
      
    },
    incrementQuantity: (state, action) => {
      let item = state.cartItems.find(item => item.id === action.payload);
      if (item) {
        item.qut++;  
        item.price = item.qut * item.price;  
      }
    },
    
    decrementQuantity: (state, action) => {
      let item = state.cartItems.find(item => item.id === action.payload);
      if (item) {
        if (item.qut > 1) {
          item.qut--;  
          item.Price = item.qut * item.price;  
        } else {
          
        }
      }
    },
    
    emptyCart: (state) => {
      state.cartItems = [];
    },
  },
});
export const { addToCart, removeFromCart, emptyCart, incrementQuantity, decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;
