export const CHANGE_FIRST_NAME = 'CHANGE_FIRST_NAME';
export const CHANGE_LAST_NAME = 'CHANGE_LAST_NAME';
export const CHANGE_EMAIL = 'CHANGE_EMAIL';

export const changeFirstName = (first_name) => {
  return {
    type: CHANGE_FIRST_NAME,
    payload: first_name
  };
};

export const changeLastName = (last_name) => {
  return {
    type: CHANGE_LAST_NAME,
    payload: last_name
  };
};

export const changeEmail = (email) => {
  return {
    type: CHANGE_EMAIL,
    payload: email
  };
};
