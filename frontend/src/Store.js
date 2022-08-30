import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./reducers/reducers.js";

const store = configureStore({
    reducer:{
        contact : contactReducer,
    }
})

export default store;