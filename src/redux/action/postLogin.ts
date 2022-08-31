import { AppThunk } from "../store";
import { checkResponse } from "../../utils/check-response";
import { BASE_URL } from "../../utils/constants";
import { IUser } from "../../utils/types";

import { loginFail, loginSuccess, loginRequest } from "../reducers/apiSlice";

export const postLogin: AppThunk = (data: IUser) => (dispatch) => {
  dispatch(loginRequest);
  fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: data.username,
      password: data.password,
    }),
  })
    .then(checkResponse)
    .then((res) => {
      console.log(res);
      dispatch(loginSuccess);
    })
    .catch((err) => {
      console.log(err);
      dispatch(loginFail);
    });
};
