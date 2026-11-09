import { configureStore } from "@reduxjs/toolkit";

import accountReducer from "./accountSlice";
import { accountApi } from "../services/accountApi";

export const store = configureStore({
  reducer: {
    account: accountReducer,
    [accountApi.reducerPath]: accountApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(accountApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;