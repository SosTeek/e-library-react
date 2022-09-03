import { endpoints } from '../constants/endpoints';
import { publicApi, authAxios } from '../helpers/baseApiInstance';

// for login
export const signInWithUsernameAndPassword = (username, password) => {
  const loginData = {
    username,
    password,
  };
  return publicApi.post(endpoints.login, loginData);
};

export const getAllPublicData = (endpoint) => {
  return publicApi.get(endpoint);
};

export const getAllData = (endpoint) => {
  return authAxios.get(endpoint);
};

export const createData = (endpoint, payload) => {
  return authAxios.post(endpoint, payload);
};

export const deleteSingleItem = (endpoint) => {
  return authAxios.delete(endpoint);
};

export const updateItem = (endpoint, payload) => {
  return authAxios.patch(endpoint, payload);
};

export const getItemById = (endpoint) => {
  return authAxios.get(endpoint);
};
