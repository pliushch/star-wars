import { SUCCESS_LOGIN, SUCCESS_LOGOUT } from "../../constants/constants";

export const login = (info) => ({
  type: SUCCESS_LOGIN,
  payload: info
})

export const logOut = () => ({
  type: SUCCESS_LOGOUT,
})
