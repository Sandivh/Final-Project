import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View, ImageBackground, Button } from 'react-native';
import ProfileScreen from '../profile/profile';
import AddScreen from '../addWine/add';
import CellarScreen from '../wineCellar/cellar';
import Header from '../../shared/header/header';
import Nav from '../../shared/nav/nav';
import Table from '../../shared/tables/table';
import styles from '../../shared/css/appStyles';

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
            <Text style={styles.subHeading}>The Top Shelf</Text>
            
            <Table />
            
          </View>
        </ImageBackground>
      </View>
    )
  }
}