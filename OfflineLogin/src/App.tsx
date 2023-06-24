import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './navigation/StackNavigation';
import { store } from './app/store'
import { Provider } from 'react-redux'

const Stack = createStackNavigator();


function App(props) {
  return (
    <Provider store={store}>
    <NavigationContainer >
    <StackNavigation />
    </NavigationContainer>
    </Provider>
  );
}

export default App;