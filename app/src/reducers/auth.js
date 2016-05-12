import { ACTIONS } from '../constants';

const { LOGIN, LOGOUT } = ACTIONS;

const initialState = {
  isLoggedIn: false,
  user: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return Object.assign({},
        state, action.payload.data
      );

    case LOGOUT:
      return Object.assign({},
        state, action.payload
      );

    default:
      return state;
  }
}
