import { createReducer } from "@reduxjs/toolkit";


export const contactReducer = createReducer({}, {
    "ADD_CONTACT_REQUEST": (state) => {
        state.loading = true;
    },
    "ADD_CONTACT_SUCCESS": (state, action) => {
        state.loading = false;
        state.contact = action.payload;
    },
    "ADD_CONTACT_FAILURE": (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    "CLEAR_ERRORS": (state) => {
        state.error = null;
    },
    "CLEAR_MESSAGE": (state) => {
        state.message = null;
    },

})