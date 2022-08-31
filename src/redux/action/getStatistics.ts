import { AppThunk } from "../store";
import { checkResponse } from "../../utils/check-response";
import { BASE_URL } from "../../utils/constants";
import {
  statisticFail,
  statisticRequest,
  statisticSuccess,
} from "../reducers/apiSlice";

export const getStatistics: AppThunk = () => (dispatch) => {
  dispatch(statisticRequest);
  fetch(`${BASE_URL}/statistics`, {
    headers: { "Content-Type": "application/json" },
  })
    .then(checkResponse)
    .then((res) => {
      console.log(res);
      dispatch(statisticSuccess);
    })
    .catch((err) => {
      dispatch(statisticFail);
      console.log(err);
    });
};
