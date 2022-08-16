import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import currenciesSlice from "./currencieSlice";
import clickedProductIdSlice from "./clickedProductIdSlice";

const store = configureStore({
  reducer: {
    currenciesSlice: currenciesSlice.reducer,
    clickedProductIdSlice: clickedProductIdSlice.reducer,
    cartSlice: cartSlice.reducer,
  },
});

export default store;
