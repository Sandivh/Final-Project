import React from 'react';
import { Text, TouchableHighlight} from 'react-native';
import styles from '../../shared/css/appStyles';

export default class Header extends React.Component {
    render(){
        return(
            <TouchableHighlight onPress={()=>{this.props.navigation.navigate('Home')}}>
                <Text style={styles.heading}>Wine Cellar</Text>
            </TouchableHighlight>
        )
    }
}