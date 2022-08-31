import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../utils/types";

interface IUserData {
  username: string;
  accessToken: string;
  isAuthenticated: boolean;
}

const initialState: IUserData = {
  username: "",
  accessToken: "",
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (store, action: PayloadAction<any>) => ({
      ...store,
      username: action.payload.name,
      accessToken: action.payload.token,
      isAuthenticated: true,
    }),
    clearUser: () => ({
      username: "",
      accessToken: "",
      isAuthenticated: false,
    }),
  },
});

export const { setUser, clearUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
