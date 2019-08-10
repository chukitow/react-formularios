import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import reducer from './reducer';
import ReduxContainer from './containers/ReduxContainer';

const store = createStore(reducer);

const Redux = () => (
  <Provider store={store}>
    <ReduxContainer />
  </Provider>
)

export default Redux
