// import thunk from 'redux-thunk';
import { authThunkCreator } from './auth_reducer';
// import {loginApi, loginUser, userApi} from "../Api/api";
// import {stopSubmit} from "Redux-form";

const INITIALISED_SUCCESS = 'INITIALISED SUCCESS';

const initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALISED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};
// data
export const initializedSuccess = () => ({ type: INITIALISED_SUCCESS });

export const initializeApp = () => dispatch => {
  const promise = dispatch(authThunkCreator());
  // dispatch(AC1())
  // dispatch(AC2())
  //  promise.then(() =>{
  //      dispatch(initializedSuccess() );
  //  })
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess());
  });
};

//     authThunkCreator = (id, email, login,isAuth) => {
//
//     return   (dispatch ) => {
//
//         loginApi.loginUser().then(data => {
//             if (data.resultCode === 0) {
//                 let {id, email, login} = data.data
//                 dispatch(setAuthUserData(id, email, login,true));
//             }
//         });
//     }
// }

// export  const loginPost = (email, password, rememberMe) => (dispatch ) => {
//
//         loginApi.login(email, password, rememberMe).then(data => {
//
//             if (data.resultCode === 0) {
//                 dispatch(authThunkCreator(email, password, rememberMe));
//             } else {
//     // let action = stopSubmit('login', {email: 'Email is wrong'});
//      let messages = data.messages ? data.messages : 'Some Error';
//                 // let action = stopSubmit('login', {_error: messages});
//                 // dispatch(action);
//                 dispatch(stopSubmit('login', {_error: messages}));
//             }
//         });
// }
//
// export  const loginOut = (email, password, rememberMe,isAuth) => {
//
//     return   (dispatch ) => {
//         loginApi.logOut().then(data => {
//
//             if (data.resultCode === 0) {
//                 dispatch(setAuthUserData(null, null, null,false));
//             }
//         });
//     }
// }

export default appReducer;
