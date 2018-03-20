import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View, ImageBackground, Button } from 'react-native';
import AddScreen from '../addWine/add';
import CellarScreen from '../wineCellar/cellar';
import Header from '../../shared/header/header';
import Nav from '../../shared/nav/nav';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
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
            <Header  navigation={this.props.navigation}/>
            <Nav navigation={this.props.navigation} />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonBox:{
    width: '75%',
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    width: '100%',
    backgroundColor: 'rgba(0,0,0,.5)',
    alignItems: 'center',
    paddingTop: 20,
  },
});
