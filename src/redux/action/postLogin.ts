import { AppThunk } from "../store";
import { checkResponse } from "../../utils/check-response";
import { BASE_URL, URL_LOGIN } from "../../utils/constants";
import { IUserSendData } from "../../utils/types";
import { setUserToken, setUserName, clearUser } from "../reducers/userSlice";

import { loginFail, loginSuccess, loginRequest } from "../reducers/apiSlice";

export const postLogin: AppThunk = (data: IUserSendData) => (dispatch) => {
  dispatch(loginRequest());
  fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=${data.grant_type}&username=${data.username}&password=${data.password}&scope=${data.scope}&client_id=${data.client_id}&client_secret=${data.client_secret}`,
  })
    .then(checkResponse)
    .then((res) => {
      console.log(res.access_token);
      dispatch(loginSuccess());
      dispatch(setUserToken(res.access_token));
      dispatch(setUserName(data.username));
    })
    .catch((err) => {
      console.log(err);
      dispatch(loginFail());
      dispatch(clearUser());
    });
};
