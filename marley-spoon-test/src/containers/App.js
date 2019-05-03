import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import ListContainer from './../containers/listContainer'

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
        <ListContainer/>
        </Provider>
      </div>
    );
  }
}

export default App;
