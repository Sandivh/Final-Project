import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View, ImageBackground, Button } from 'react-native';
import Header from '../../shared/header/header';
import Nav from '../../shared/nav/nav';
import Table from '../../shared/tables/table';
import styles from '../../shared/css/appStyles';
import { getAllWineData } from '../../shared/dataModel/wines';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  }

  constructor(props) {
    super(props);

    this.state = {
        wines: []
    };
}

componentWillMount() {

  getAllWineData()
  .then((wineData) => {
    if(wineData.length > 0){  
      this.setState({
          wines: wineData
      });
    }else{
      this.props.navigation.navigate('Add');
    }
  });
}

  render() {
    if(this.state.wines && this.state.wines.length){
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
            
            <Table wines={this.state.wines}/>
            
          </View>
        </ImageBackground>
      </View>
    )
  }else{
    return null;
  }
  }
}