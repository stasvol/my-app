import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './Redux/reduxStore';
// eslint-disable-next-line import/named
import { AppContainer } from './App';

const MyApp = () => (
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <AppContainer state={store.getState()} />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

export default MyApp;
