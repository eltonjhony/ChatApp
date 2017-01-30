import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import * as reducers from '../reducers';

import {
  Router,
  Scene,
} from 'react-native-router-flux'

import Home from '../components/Home'
import Chat from '../components/Chat'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root" style={{paddingTop: 56}}>
            <Scene key="home" component={Home} title="Home" />
            <Scene key="chat" component={Chat} title="Chat" />
          </Scene>
        </Router>
      </Provider>
    )
  }
}

export default App;
