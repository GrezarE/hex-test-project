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
    setUserToken: (store, action: PayloadAction<string>) => ({
      ...store,
      accessToken: action.payload,
      isAuthenticated: true,
    }),
    clearUser: () => ({
      username: "",
      accessToken: "",
      isAuthenticated: false,
    }),
    setUserName: (store, action: PayloadAction<any>) => ({
      ...store,
      username: action.payload,
    }),
  },
});

export const { setUserToken, clearUser, setUserName } = userSlice.actions;
export const userReducer = userSlice.reducer;
