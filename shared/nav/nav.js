import React from 'react';
import { StyleSheet, View, Button } from 'react-native';


export default class Nav extends React.Component {
    render(){
        return(
            <View style={styles.buttonBox}>
                <Button style={{marginRight: 5, flex: 1,}} onPress={()=>{this.props.navigation.navigate('Profile')}} title="Profile"/>
                <Button style={{marginRight: 5, flex: 1,}} onPress={()=>{this.props.navigation.navigate('Cellar')}} title="Cellar"/>
                <Button style={{ flex: 1,}} onPress={()=>{this.props.navigation.navigate('Add')}} title="Add Wine"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonBox:{
      width: '75%',
      paddingBottom: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
})