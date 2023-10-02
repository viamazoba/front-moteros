/* eslint-disable arrow-body-style */
import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice'
import { userApi } from "./services/userApi";
import { setupListeners } from "@reduxjs/toolkit/query";


export const store = configureStore({
    reducer: {
        userReducer,
        [userApi.reducerPath]: userApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([userApi.middleware])
})

setupListeners(store.dispatch)