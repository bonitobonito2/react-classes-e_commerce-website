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
          (item) =>
            item.id === action.payload.id &&
            item.index1 === action.payload.index1 &&
            item.index2 === action.payload.index2 &&
            item.index2 === action.payload.index2
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

      const existingProductIndex = myState.findIndex((item) => {
        return (
          item.id === action.payload.id.id &&
          item.index1 === action.payload.id.indexes[0] &&
          item.index2 === action.payload.id.indexes[1] &&
          item.index3 === action.payload.id.indexes[2]
        );
      });

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
        (item) =>
          item.id === action.payload.id.id &&
          item.index1 === action.payload.id.indexes[0] &&
          item.index2 === action.payload.id.indexes[1] &&
          item.index3 === action.payload.id.indexes[2]
      );
      let existingProduct = myState[existingProductIndex];
      if (existingProduct.count === 1) {
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
