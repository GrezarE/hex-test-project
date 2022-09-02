import { createSlice } from "@reduxjs/toolkit";

interface IApiSlice {
  errorText: string;
  registerRequest: boolean;
  registerSuccess: boolean;
  registerFail: boolean;
  loginRequest: boolean;
  loginSuccess: boolean;
  loginFail: boolean;
  squeezeRequest: boolean;
  squeezeSuccess: boolean;
  squeezeFail: boolean;
  statisticRequest: boolean;
  statisticSuccess: boolean;
  statisticFail: boolean;
}

const initialState: IApiSlice = {
  errorText: "",
  registerRequest: false,
  registerSuccess: false,
  registerFail: false,
  loginRequest: false,
  loginSuccess: false,
  loginFail: false,
  squeezeRequest: false,
  squeezeSuccess: false,
  squeezeFail: false,
  statisticRequest: false,
  statisticSuccess: false,
  statisticFail: false,
};

export const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    registerRequest: (state) => ({
      ...state,
      registerRequest: true,
    }),
    registerSuccess: (state) => ({
      ...state,
      registerRequest: false,
      registerSuccess: true,
    }),
    registerFail: (state) => ({
      ...state,
      registerRequest: false,
      registerFail: true,
    }),
    loginRequest: (state) => ({
      ...state,
      loginRequest: true,
    }),
    loginSuccess: (state) => ({
      ...state,
      loginRequest: false,
      loginSuccess: true,
    }),
    loginFail: (state) => ({
      ...state,
      loginRequest: false,
      loginFail: true,
    }),
    squeezeRequest: (state) => ({
      ...state,
      squeezeRequest: true,
    }),
    squeezeSuccess: (state) => ({
      ...state,
      squeezeRequest: false,
      squeezeSuccess: true,
    }),
    squeezeFail: (state) => ({
      ...state,
      squeezeRequest: false,
      squeezeFail: true,
    }),
    statisticRequest: (state) => ({
      ...state,
      statisticRequest: true,
    }),
    statisticSuccess: (state) => ({
      ...state,
      statisticRequest: false,
      statisticSuccess: true,
    }),
    statisticFail: (state) => ({
      ...state,
      statisticRequest: false,
      statisticFail: true,
    }),
    resetApiSlice: () => ({
      errorText: "",
      registerRequest: false,
      registerSuccess: false,
      registerFail: false,
      loginRequest: false,
      loginSuccess: false,
      loginFail: false,
      squeezeRequest: false,
      squeezeSuccess: false,
      squeezeFail: false,
      statisticRequest: false,
      statisticSuccess: false,
      statisticFail: false,
    }),
  },
});

export const {
  registerRequest,
  registerSuccess,
  registerFail,
  loginRequest,
  loginSuccess,
  loginFail,
  squeezeRequest,
  squeezeSuccess,
  squeezeFail,
  statisticRequest,
  statisticSuccess,
  statisticFail,
  resetApiSlice,
} = apiSlice.actions;

export const apiReducer = apiSlice.reducer;
