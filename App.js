import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';
import { StackNavigator} from 'react-navigation';
import HomeScreen from './views/homeView/home';
import ProfileScreen from './views/profile/profile';


const AppNavigation = StackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Profile: {
      screen: ProfileScreen
    },
  },
  
  {
    initialRouteName: 'Home',
    
    navigationOptions: {

      headerStyle: {
        backgroundColor: 'black',
      },

      headerTintColor: 'white',

      headerTitleStyle: {
        color: '#fff',
      },
    }
  },
)

export default class App extends React.Component {
  render() {
    return (
      <AppNavigation/>
    );
  }
}