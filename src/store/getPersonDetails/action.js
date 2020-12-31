import { getPerson, getPersonInfo } from "../../services/swapi";
import {
  FETCH_DETAILS_FAILURE,
  FETCH_DETAILS_REQUEST,
  FETCH_DETAILS_SUCCESS,
} from "../../constants/constants";

const fetchDetailsRequest = () => ({
  type: FETCH_DETAILS_REQUEST,
});

const fetchDetailsSuccess = (films, vehicles) => ({
  type: FETCH_DETAILS_SUCCESS,
  payload: { films, vehicles },
});

const fetchDetailsFailure = () => ({
  type: FETCH_DETAILS_FAILURE,
});

export const fetchPersonDetails = (id) => async (dispatch) => {
  dispatch(fetchDetailsRequest());
  try {
    const data = await getPerson(id);
    const films = await Promise.all(
      data.films.map(async (api) => {
        const { title } = await getPersonInfo(api);
        return title;
      })
    );
    const vehicles = await Promise.all(
      data.vehicles.map(async (api) => {
        const { name, model } = await getPersonInfo(api);
        return { name, model };
      })
    );
    dispatch(fetchDetailsSuccess(films, vehicles));
  } catch (e) {
    dispatch(fetchDetailsFailure());
  }
};
