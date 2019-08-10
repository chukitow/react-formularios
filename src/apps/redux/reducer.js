import {
  CHANGE_FIRST_NAME,
  CHANGE_LAST_NAME,
  CHANGE_EMAIL
} from './actions';

const INITIAL_STATE = {
  first_name: '',
  last_name: '',
  email: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_FIRST_NAME:
      return {...state, first_name: action.payload };
    case CHANGE_LAST_NAME:
      return {...state, last_name: action.payload };
    case CHANGE_EMAIL:
      return {...state, email: action.payload };
    default:
      return state;
  }
}
