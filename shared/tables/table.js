import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

/* Edit these are the cells.
You may even take parameters to display different data / react elements etc. */
export default class Table extends React.Component {
    renderRow = (index) => {
        return (
            <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row', width: '100%' }} key={index}>
                <View style={{ flex: 1, alignSelf: 'stretch', backgroundColor: 'red', marginVertical: '2%', marginLeft: '2%' }} key="1">    
                    <Text style={{ color: 'white' }}>1</Text>
                </View>
                <View style={{ flex: 1, alignSelf: 'stretch', backgroundColor: 'blue', marginVertical: '2%' }} key="2">
                    <Text style={{ color: 'white' }}>2</Text>
                </View>
                <View style={{ flex: 1, alignSelf: 'stretch', backgroundColor: 'green', marginVertical: '2%' }} key="3">
                    <Text style={{ color: 'white' }}>3</Text>
                </View>
                <View style={{ flex: 1, alignSelf: 'stretch', backgroundColor: 'purple', marginVertical: '2%', marginRight:'2%' }} key="4">
                    <Text style={{ color: 'white' }}>4</Text>
                </View>
            </View>
        );
    }
    render() {
        const data = [1, 2, 3, 4, 5];
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            {
                data.map((datum, index) => { // This will render a row for each data element.
                    return this.renderRow(index);
                })
            }
            </View>
        );
    }
}