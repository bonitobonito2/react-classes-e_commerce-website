import { createSlice } from "@reduxjs/toolkit";
let initialState = {index : 0 }

const currenciesSlice = createSlice({
    name: " currency",
    initialState,
    reducers: {
        changeCurrency(state, action) {
            state.index = action.payload
        }
    }
})

export const currencyActions = currenciesSlice.actions;

export default currenciesSlice