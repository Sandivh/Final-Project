import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <ImageBackground 
          source={require('./images/wineBackground.jpg')} 
          style={{
            width: '100%', 
            height: '100%', 
            alignItems: 'center', 
            justifyContent: 'center',
          }}>
          <View style={styles.container}>
            <Text style={styles.heading}>Wine Cellar</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  heading:{
    fontSize: 40,
    color: '#ffffff',
  },
  
  container: {
    backgroundColor: 'rgba(0,0,0,.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
