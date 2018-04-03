import React from 'react';
import { Text,  TouchableHighlight, View, ImageBackground, Button } from 'react-native';
import ProfileScreen from '../profile/profile';
import CellarScreen from '../wineCellar/cellar';
import Header from '../../shared/header/header';
import Nav from '../../shared/nav/nav';
import styles from '../../shared/css/appStyles';

export default class AddScreen extends React.Component {
  static navigationOptions = {
    title: 'Add Wine',
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
