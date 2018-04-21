import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';
import { StackNavigator} from 'react-navigation';
import HomeScreen from './views/homeView/home';
import ProfileScreen from './views/profile/profile';
import AddScreen from './views/addWine/add'; 
import CellarScreen from './views/wineCellar/cellar';
import LoginScreen from './views/login/login';
import SignUpScreen from './views/signUp/signUp';

const AppNavigation = StackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Profile: {
      screen: ProfileScreen
    },
    Add: {
      screen: AddScreen
    },
    Cellar: {
      screen: CellarScreen
    },
    Login: {
      screen: LoginScreen
    },
    SignUp:{
      screen: SignUpScreen
    }
  },
  
  {
    initialRouteName: 'Login',
    
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