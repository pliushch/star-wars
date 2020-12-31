import { combineReducers } from "redux";

import { peopleReducer } from "./getAllPeople/reducer";
import { detailsReducer } from "./getPersonDetails/reducer";
import { loginReducer } from "./login/reducer";

const rootReducer = combineReducers({
  people: peopleReducer,
  details: detailsReducer,
  login: loginReducer
});

export default rootReducer;
