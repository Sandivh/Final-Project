import React from 'react';
import { StyleSheet, Text, TouchableHighlight} from 'react-native';

export default class Header extends React.Component {
    render(){
        return(
            <TouchableHighlight onPress={()=>{this.props.navigation.navigate('Home')}}>
                <Text style={styles.heading}>Wine Cellar</Text>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    heading:{
      fontSize: 40,
      color: '#ffffff',
      marginBottom: 10,
    },
})