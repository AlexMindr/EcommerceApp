import { CartItemType, InitialCartType } from "@/shared/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: InitialCartType = {
  isCartOpen: false,
  cart: [],
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    addToCart: (state, action) => {
      //TODO check after simple func + increased/decresease for 0 & <1
      //   if (
      //     state.cart.find(
      //       (item: CartItemType) => item.id === action.payload.item?.id
      //     ) == null
      //   ) {
      //     state.cart = [...state.cart, action.payload.item];
      //   } else {
      //     state.cart = state.cart.map((item: CartItemType) => {
      //       if (item.id === action.payload.item?.id) {
      //         return { ...item, count: item.count + 1 };
      //       } else {
      //         return item;
      //       }
      //     });
      //   }
      state.cart = [...state.cart, action.payload.item];
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (item: CartItemType) => item.id !== action.payload.id
      );
    },
    increaseCount: (state, action) => {
      state.cart.map((item) => {
        if (item.id === action.payload.id) item.count++;
        return item;
      });
    },
    decreaseCount: (state, action) => {
      state.cart.map((item) => {
        if (item.id === action.payload.id) item.count--;
        return item;
      });
    },
    setisCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const {
  setItems,
  addToCart,
  setisCartOpen,
  decreaseCount,
  increaseCount,
  removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
