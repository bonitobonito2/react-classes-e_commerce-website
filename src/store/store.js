import { configureStore } from "@reduxjs/toolkit";
import currenciesSlice from "./currencieSlice";

const store = configureStore({
    reducer: { currenciesSlice: currenciesSlice.reducer }
})

export default store