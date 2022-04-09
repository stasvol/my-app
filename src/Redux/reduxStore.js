import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import dialogReducer from './dialog_reducer';
import postReducer from './prof_reducer';
import siteBarReducer from './sitebar_reducer';
import userReducer from './user_reducer';
import authReducer from './auth_reducer';
import appReducer from './app_reducer';
import SetReducer from '../Components/Settings/Set_reducers/setReducer';
import SetMesReducer from '../Components/Settings/Set_reducers/setMesreducer';
import SetUserReducer from '../Components/Settings/Set_reducers/setUserReducer';
import SetAuthReducer from '../Components/Settings/Set_reducers/setAuthReducer';

const reducers = combineReducers({
  dialogPage: dialogReducer,
  profPage: postReducer,
  siteBar: siteBarReducer,
  usersPage: userReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
  message: SetReducer,
  posts: SetMesReducer,
  users: SetUserReducer,
  setAuth: SetAuthReducer,
});

const composeEnhancers =
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 })) ||
  compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
// const store = createStore(reducers, /* preloadedState, */ compose(

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
