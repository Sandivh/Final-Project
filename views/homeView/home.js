import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View, ImageBackground, Button } from 'react-native';
import Header from '../../shared/header/header';
import Nav from '../../shared/nav/nav';
import Table from '../../shared/tables/table';
import styles from '../../shared/css/appStyles';
// import wineData only for mock calls/views
import wineData from '../../shared/dataModel/wines';
// import { wineDataCall, setLocalData, getLocalData } from '../../shared/dataModel/wines';


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

  // to call for fetch
  //wineDataCall();

  // set local data
  // setLocalData();

  // get local data
  // const localWines = getLocalData();

    this.setState({
        wines: wineData.wines
    });
}

sortWinesAlphabetical() {
  wines = this.state.wines;

  const sortingArray = [];

  // do sorting logic here
  wines.map((item, index) => {
    sortingArray.push(item);
  });

  const sortedArray = wines.map((item, index) => {
    if (sortingArray[index].rating > item.rating) {
      // shift item left in array or someting like that.

      // return something
    }
  })

  this.setState({
    wines: sortedArray
  })
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
            
            <Table wines={this.state.wines}/>
            
          </View>
        </ImageBackground>
      </View>
    )
  }
}