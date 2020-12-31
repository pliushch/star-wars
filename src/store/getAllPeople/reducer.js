import {
  ADD_TO_FAVORITE_LIST,
  FETCH_PEOPLE_FAILURE,
  FETCH_PEOPLE_REQUEST,
  FETCH_PEOPLE_SUCCESS,
} from "../../constants/constants";

const initialState = {
  loading: false,
  people: [],
  error: false,
  favorites: [],
};

export const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PEOPLE_REQUEST:
      return {
        loading: true,
        people: [],
        error: false,
        favorites: [],
      };
    case FETCH_PEOPLE_SUCCESS:
      return {
        loading: false,
        people: action.payload,
        error: false,
        favorites: [],
      };
    case FETCH_PEOPLE_FAILURE:
      return {
        loading: false,
        people: [],
        error: true,
        favorites: [],
      };
    case ADD_TO_FAVORITE_LIST:
      if (!state.favorites.find(({ id }) => id === action.payload.id)) {
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      } else {
        const favorites = state.favorites.filter(
          ({ id }) => id !== action.payload.id
        );
        return {
          ...state,
          favorites,
        };
      }
    default:
      return state;
  }
};
