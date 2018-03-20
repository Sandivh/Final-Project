import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View, ImageBackground, Button } from 'react-native';
import ProfileScreen from '../profile/profile';
import AddScreen from '../addWine/add';
import CellarScreen from '../wineCellar/cellar';
import Header from '../../shared/header/header';
import Nav from '../../shared/nav/nav';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  }

  render() {
    return (
      <View>
        <ImageBackground 
          source={require('../../images/wineBackground.jpg')} 
          style={{
            width: '100%', 
            height: '100%', 
            alignItems: 'center', 
          }}>
          <View style={styles.container}>
            <Header navigation={this.props.navigation} />
            <Nav navigation={this.props.navigation} />
          </View>
          <View style={styles.body}>
            <Text></Text>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'rgba(0,0,0,.5)',
    alignItems: 'center',
    paddingTop: 20,
  },
  body: {
    width: '90%',
    height: '50%',
    backgroundColor: 'rgba(0,0,0,.5)',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'flex-start',
  }
});
