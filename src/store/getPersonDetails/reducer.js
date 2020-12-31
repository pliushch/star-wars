import {
  FETCH_DETAILS_FAILURE,
  FETCH_DETAILS_REQUEST,
  FETCH_DETAILS_SUCCESS,
} from "../../constants/constants";

const initialState = {
  loading: false,
  films: [],
  vehicles: [],
  error: false,
};

export const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DETAILS_REQUEST:
      return {
        loading: true,
        films: [],
        vehicles: [],
        error: false,
      };
    case FETCH_DETAILS_SUCCESS:
      const { films, vehicles } = action.payload;
      return {
        loading: false,
        films,
        vehicles,
        error: false,
      };
    case FETCH_DETAILS_FAILURE:
      return {
        loading: false,
        films: [],
        vehicles: [],
        error: true,
      };
    default:
      return state;
  }
};
