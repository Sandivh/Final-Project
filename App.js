import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';
import { StackNavigator} from 'react-navigation';
import HomeScreen from './views/homeView/home';


const AppNavigation = StackNavigator({
  Home: {
    screen: HomeScreen
  }
})

export default class App extends React.Component {
  render() {
    return (
      <AppNavigation/>
    );
  }
}