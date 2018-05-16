import React from 'react';
import {Text,View} from 'react-native';
import styles from '../../shared/css/appStyles';

export default class TableHeadings extends React.Component {
    render(){
        return (
            <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row', width: '100%' }}>
                <View style={{ flex: 2, alignSelf: 'stretch', marginLeft: '2%', padding: '2%', height: 50 }} key="1">    
                    <Text style={{ color: 'white' }}>Wine Name</Text>
                </View>
                <View style={{ flex: 2, alignSelf: 'stretch', padding: '2%', height: 50 }} key="2">
                    <Text style={{ color: 'white' }}>Wine Type</Text>
                </View>
                <View style={{ flex: 2, alignSelf: 'stretch',  padding: '2%', height: 50 }} key="3">
                    <Text style={{ color: 'white' }}>Wine Rating</Text>
                </View>
                <View style={{ flex: .5, alignSelf: 'stretch', marginRight: '2%', padding: '2%', height: 50 }} key="4">
                    <Text style={{ color: 'white' }}></Text>
                </View>
            </View>
        );
    }
}