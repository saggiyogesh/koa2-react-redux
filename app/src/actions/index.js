import axios from 'axios';
import { ACTIONS } from '../constants';

const { LOGIN, LOGOUT } = ACTIONS;

const url = '/user/';

export const doLogin = (creds) => {
  const method = 'login';
  const request = axios.post(`${url}${method}`, creds);

  return {
    type: LOGIN,
    payload: request
  };
};

export const doLogout = () => {
  // remove from local storage
  return {
    type: LOGOUT,
    payload: {
      isLoggedIn: false,
      user: {}
    }
  };
};
