import { configureStore } from "@reduxjs/toolkit";
import currenciesSlice from "./currencieSlice";
import clickedProductIdSlice from "./clickedProductIdSlice";

const store = configureStore({
  reducer: {
    currenciesSlice: currenciesSlice.reducer,
    clickedProductIdSlice: clickedProductIdSlice.reducer,
  },
});

export default store;
