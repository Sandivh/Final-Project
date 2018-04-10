import React from 'react';
import { Text,  TouchableHighlight, View, ImageBackground, Button } from 'react-native';
import Header from '../../shared/header/header';
import Nav from '../../shared/nav/nav';
import styles from '../../shared/css/appStyles';
import AddForm from '../../shared/forms/addForm';

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
          <View style={styles.body}>
            <Text style={styles.subHeading}>Add Wine</Text>
            
            <AddForm />
            
          </View>
        </ImageBackground>
      </View>
    );
  }
}
