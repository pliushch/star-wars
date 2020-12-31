import {
  getAllPeople,
  getPersonImage,
  getPersonPlanet,
} from "../../services/swapi";
import {
  ADD_TO_FAVORITE_LIST,
  FETCH_PEOPLE_FAILURE,
  FETCH_PEOPLE_REQUEST,
  FETCH_PEOPLE_SUCCESS,
} from "../../constants/constants";

const fetchPeopleRequest = () => ({
  type: FETCH_PEOPLE_REQUEST,
});

const fetchPeopleSuccess = (people) => ({
  type: FETCH_PEOPLE_SUCCESS,
  payload: people,
});

const fetchPeopleFailure = () => ({
  type: FETCH_PEOPLE_FAILURE,
});

export const addToFavoriteList = (person) => ({
  type: ADD_TO_FAVORITE_LIST,
  payload: person
})

export const fetchPeople = () => async (dispatch) => {
  dispatch(fetchPeopleRequest());
  try {
    const data = await getAllPeople();
    const people = await Promise.all(
      data.map(async (person) => {
        const { url } = await getPersonImage(person.id);
        const { name } = await getPersonPlanet(person.id);
        return { ...person, image: url, homeworld: name };
      })
    );
    dispatch(fetchPeopleSuccess(people));
  } catch (e) {
    dispatch(fetchPeopleFailure());
  }
};
