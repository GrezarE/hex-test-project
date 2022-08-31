import { AppThunk } from "../store";
import {
  registerRequest,
  registerSuccess,
  registerFail,
} from "../reducers/apiSlice";
import { checkResponse } from "../../utils/check-response";
import { BASE_URL } from "../../utils/constants";
import { IUser } from "../../utils/types";

export const postRegister: AppThunk = (data: IUser) => (dispatch) => {
  dispatch(registerRequest);
  fetch(`${BASE_URL}/register`, {
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
      dispatch(registerSuccess);
    })
    .catch((err) => {
      console.log(err);
      dispatch(registerFail);
    });
};
