import axios from "axios";

const instance = axios.create({
  baseURL: 'https://swapi.dev/api/'
});

const imagesApi = "https://starwars-visualguide.com/assets/img/characters";

export const getAllPeople = async () => {
  const res = await instance.get(`people/`);
  return res.data.results.map(transformPerson);
};

export const getPersonImage = async (id) => {
  return await axios.get(`${imagesApi}/${id}.jpg`).then((data) => data.config);
};

export const getPersonPlanet = async (id) => {
  return await instance.get(`planets/${id}/`).then((data) => data.data);
};

export const getPerson = async (id) => {
  return await instance.get(`people/${id}`).then((data) => data.data);
};

export const getPersonInfo = async (api) => {
  return await axios.get(api).then((data) => data.data);
};

const transformPerson = (person) => {
  return {
    ...person,
    id: extractId(person),
  };
};

const extractId = (item) => {
  const idRegExp = /\/([0-9]*)\/$/;
  return item.url.match(idRegExp)[1];
};
