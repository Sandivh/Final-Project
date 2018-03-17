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
          }}>
          <View style={styles.container}>
            <Text style={styles.heading}>Wine Cellar</Text>
            <View style={styles.buttonBox}>
              <Button style={{marginRight: 10, flex: 1,}} onPress={()=>{}} title="Profile"/>
              <Button style={{marginRight: 10, flex: 1,}} onPress={()=>{}} title="Wine Cellar"/>
              <Button style={{ flex: 1,}} onPress={()=>{}} title="Add Wine"/>
            </View>
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
    paddingTop: 50,
  },
});
