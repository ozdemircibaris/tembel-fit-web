import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import RouterComp from './components/router';
import 'semantic-ui-css/semantic.min.css';

export default class App extends Component {
  render() {
    const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <RouterComp />
      </Provider>
    )
  }
}