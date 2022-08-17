import { createSlice } from "@reduxjs/toolkit";

let initialState = { cartProducts: [], totalAmount: 0 };

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addProductToCart(state, action) {
      let myState = state.cartProducts;
      if (myState.length === 0) myState.push(action.payload);
      else {
        const existingProductIndex = myState.findIndex(
          (item) => item.id === action.payload.id
        );
        let existingItem = myState[existingProductIndex];
        if (existingItem) {
          existingItem = {
            ...existingItem,
            count: (existingItem.count += 1),
          };
        } else {
          myState.push(action.payload);
        }
      }

      state.totalAmount += 1;
    },
    addProductFromCart(state, action) {
      let myState = state.cartProducts;
      const existingProductIndex = myState.findIndex(
        (item) => item.id === action.payload.id
      );
      let existingItem = myState[existingProductIndex];
      existingItem = {
        ...existingItem,
        count: (existingItem.count += 1),
      };
      state.totalAmount += 1;
    },

    removeProductFromCart(state, action) {
      let myState = state.cartProducts;
      const existingProductIndex = myState.findIndex(
        (item) => item.id === action.payload.id
      );
      let existingProduct = myState[existingProductIndex];
      if (existingProduct.count === 1) {
        console.log("shemovedi washlashi");
        myState.splice(existingProductIndex, 1);
        state.cartProducts = myState;
      } else {
        existingProduct = {
          ...existingProduct,
          count: (existingProduct.count -= 1),
        };
      }
      state.totalAmount -= 1;
    },
  },
});

export default cartSlice;

export const cartSliceActions = cartSlice.actions;
