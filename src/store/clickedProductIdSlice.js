import { createSlice } from "@reduxjs/toolkit";

let initialState = { clickedProductId: "" };

const clickedProductIdSlice = createSlice({
  name: "clickedProductId",
  initialState,
  reducers: {
    setClickedProductId(state, action) {
      state.clickedProductId = action.payload;
    },
  },
});



export default clickedProductIdSlice

export const clickedProductIdActions = clickedProductIdSlice.actions