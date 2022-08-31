import { configureStore } from "@reduxjs/toolkit";
import thunk, { ThunkAction } from "redux-thunk";

import { Action, ActionCreator } from "redux";
import { apiReducer } from "./reducers/apiSlice";
import { userReducer } from "./reducers/userSlice";

export const store = configureStore({
  reducer: { api: apiReducer, user: userReducer },
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, RootState, unknown, Action>
>;
