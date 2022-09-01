import { AppThunk } from "../store";
import { checkResponse } from "../../utils/check-response";
import { BASE_URL } from "../../utils/constants";
import {
  statisticFail,
  statisticRequest,
  statisticSuccess,
} from "../reducers/apiSlice";
import { setAllLinks, setLength } from "../reducers/sortingSlice";

export const getStatistics: AppThunk =
  (token, order, offset, limit, type) => (dispatch) => {
    dispatch(statisticRequest());
    fetch(
      `${BASE_URL}/statistics?order=${order}&offset=${offset}&limit=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then(checkResponse)
      .then((res) => {
        if (type === "check") {
          dispatch(setLength(res.length));
        }
        if (type === "set") {
          dispatch(statisticSuccess());
          dispatch(setAllLinks(res));
        }
      })
      .catch((err) => {
        dispatch(statisticFail());
        console.log(err);
      });
  };
