// const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';
import { newAuthMeApi } from '../Api/SetApiAxios';

const SET_AUTH_REDUCER = 'SET_AUTH_REDUCER';

const initialState = {
  id: null,
  email: null,
  login: null,
  isSetAuth: false,
};

const SetAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_REDUCER:
      return {
        ...state,
        ...action.date,
        isSetAuth: true,
      };

    default:
      return state;
  }
};

export const setAuthReducerAcCr = (id, email, login) => ({
  type: SET_AUTH_REDUCER,
  data: { id, email, login },
});

export const newAuthThunk = () => dispatch => {
  newAuthMeApi().then(data => {
    if (data.resultCode === 0) {
      const { id, email, login } = data.data;
      dispatch(setAuthReducerAcCr(id, email, login));
    }
  });
};

export default SetAuthReducer;
