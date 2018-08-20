
import React, {Component} from 'react';
//import {StyleSheet} from 'react-native';
import {StackNavigator,} from 'react-navigation';
import Login from './src/Login/index';
import SuperheroesList from './src/List/index';
import Middle from './src/Details/middle';
import {Provider} from 'react-redux';
//import {createStore} from 'redux';
//import Reducers from './src/Reducers/index';
import { PersistGate } from 'redux-persist/integration/react'
import {store} from './src/Storage/store'
const AppStackNavigator = StackNavigator({
  Home: { screen: Login },
  List : {screen : SuperheroesList},
  Details : {screen : Middle}
});

//const store = createStore(Reducers);
export default class App extends Component{
  render() {
    return (
      <Provider store={store}>
     
        <AppStackNavigator/>
      
      </Provider>
    );
  }
}

