import { AppThunk } from "../store";
import { checkResponse } from "../../utils/check-response";
import { BASE_URL } from "../../utils/constants";
import {
  squeezeRequest,
  squeezeFail,
  squeezeSuccess,
} from "../reducers/apiSlice";
import { addLink, ILink } from "../reducers/sortingSlice";

export const postLink: AppThunk =
  (link: string, token: string, linksArray: ILink[]) => (dispatch) => {
    dispatch(squeezeRequest());
    fetch(`${BASE_URL}/squeeze?link=${link}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        accept: "application/json",
      },
      method: "POST",
    })
      .then(checkResponse)
      .then((res) => {
        const newLinksArray = linksArray.slice();
        newLinksArray.push(res);
        dispatch(addLink(newLinksArray));

        dispatch(squeezeSuccess());
      })
      .catch((err) => {
        console.log(err);
        dispatch(squeezeFail());
      });
  };
