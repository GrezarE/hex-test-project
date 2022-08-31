import { AppThunk } from "../store";
import { checkResponse } from "../../utils/check-response";
import { BASE_URL } from "../../utils/constants";
import {
  squeezeRequest,
  squeezeFail,
  squeezeSuccess,
} from "../reducers/apiSlice";

export const postLink: AppThunk =
  (link: string, token: string) => (dispatch) => {
    dispatch(squeezeRequest);
    fetch(`${BASE_URL}/squeeze`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        link: link,
      }),
    })
      .then(checkResponse)
      .then((res) => {
        console.log(res);
        dispatch(squeezeSuccess);
      })
      .catch((err) => {
        console.log(err);
        dispatch(squeezeFail);
      });
  };
