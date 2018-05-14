import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, AsyncStorage } from 'react-native';
import { StackNavigator} from 'react-navigation';
import HomeScreen from './views/homeView/home';
import ProfileScreen from './views/profile/profile';
import AddScreen from './views/addWine/add'; 
import CellarScreen from './views/wineCellar/cellar';
import LoginScreen from './views/login/login';
import SignUpScreen from './views/signUp/signUp';
import Storage from 'react-native-storage';

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
    initialRouteName: 'Add',
    
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

  constructor(props) {
    super(props);

    const storage = new Storage({
      storageBackend: AsyncStorage
    });

    global.storage = storage;
  }

  render() {
    return (
      <AppNavigation/>
    );
  }
}