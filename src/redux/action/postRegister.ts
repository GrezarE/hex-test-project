import { AppThunk } from "../store";
import {
  registerRequest,
  registerSuccess,
  registerFail,
  resetApiSlice,
} from "../reducers/apiSlice";
import { checkResponse } from "../../utils/check-response";
import { BASE_URL } from "../../utils/constants";
import { IUser } from "../../utils/types";

export const postRegister: AppThunk = (data: IUser) => (dispatch) => {
  dispatch(registerRequest());
  fetch(
    `${BASE_URL}/register?username=${data.username}&password=${data.password}`,
    {
      method: "POST",
    }
  )
    .then(checkResponse)
    .then((res) => {
      dispatch(registerSuccess());
      setTimeout(() => dispatch(resetApiSlice()), 5000);
    })
    .catch((err) => {
      console.log(err);
      dispatch(registerFail());
    });
};
