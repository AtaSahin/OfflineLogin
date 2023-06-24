import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../pages/LoginPage/LoginScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/HomePage/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function TabNavigation(props) {
    return (

      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name='LoginScreen' component={LoginScreen}  />
        <Tab.Screen name='HomeScreen' component={HomeScreen} options={{headerShadowVisible:false}}/>
      </Tab.Navigator>
     
    );
  }
  
  function StackNavigation(props) {
    return (
      <Stack.Navigator initialRouteName='Root' screenOptions={{ headerShown: false }}>
  
        <Stack.Screen name='Root' component={TabNavigation}  />
        <Stack.Screen name='HomeScreen' component={HomeScreen}  />
        <Tab.Screen name='LoginScreen' component={LoginScreen} />
      </Stack.Navigator>
    );
  }
  

export default StackNavigation;