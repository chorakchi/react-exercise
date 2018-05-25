import React from 'react';
import storage from 'redux-persist/lib/storage'
import {Provider} from 'react-redux';
import {compose, applyMiddleware, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import FloodItApp from './FloodItApp';

const store = createStore(reducer, undefined, compose(applyMiddleware(thunk), persistReducer()));

class FloodIt extends React.Component {
  async componentWillMount() {
    await this._persistStore();

    this.setState({appIsReady: true});
  }

  async _persistStore() {
    return new Promise(resolve => persistStore(store, {storage: storage}, resolve));
  }

  state = {
    appIsReady: false
  };

  render() {
    return (
      <Provider store={store}>
        <FloodItApp/>
      </Provider>
    );
  }
}

export default FloodIt;
