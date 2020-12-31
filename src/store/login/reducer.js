import { SUCCESS_LOGIN, SUCCESS_LOGOUT } from "../../constants/constants";

const initialState = {
  isLoggedIn: false,
  userId: "",
  name: "",
  email: "",
  picture: "",
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        userId: action.payload.userId,
        name: action.payload.name,
        email: action.payload.email,
        picture: action.payload.picture.data.url,
      };
    case SUCCESS_LOGOUT:
      return initialState
    default:
      return state;
  }
};
