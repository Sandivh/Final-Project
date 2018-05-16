import React from 'react';
import { Text, View, Button, TouchableOpacity, Alert } from 'react-native';
import styles from '../../shared/css/appStyles';
import {deleteWine} from '../deleteData/deleteWine';

/* These are the cells.
You may even take parameters to display different data / react elements etc. */
export default class Table extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            wines: this.props.wines
            
        };
    }

    componentWillReceiveProps(){
        console.log(this.state.wines);

        this.setState({
            wines: this.state.wines
        });
    }


    renderRow = (wine ,index) => {
        return (
            <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row', width: '100%' }} key={index}>
                <View style={{ flex: 2, alignSelf: 'stretch', backgroundColor: 'grey', marginVertical: '2%', marginLeft: '2%', padding: '2%', height: 50 }} key="1">    
                    <Text style={{ color: 'white' }}>{wine.wineName}</Text>
                </View>
                <View style={{ flex: 1, alignSelf: 'stretch', backgroundColor: 'grey', marginVertical: '2%', padding: '2%', height: 50 }} key="2">
                    <Text style={{ color: 'white' }}>{wine.wineType}</Text>
                </View>
                <View style={{ flex: .5, alignSelf: 'stretch', backgroundColor: 'grey', marginVertical: '2%', marginRight: '2%', padding: '2%', height: 50 }} key="3">
                    <Text style={{ color: 'white' }}>{wine.wineRating}</Text>
                </View>
                <View style={{ flex: 1, alignSelf: 'stretch', marginVertical: '2%', marginRight: '2%', padding: '2%', height: 50 }} key="4">
                        <TouchableOpacity style={styles.deleteButton} onPress = {() => {Alert.alert("Confrim Deletion","Are you sure you want to delete ?",[{text: "Cancel", onPress: () => console.log('Cancel Pressed'), style: "cancel" },{text: "Confirm", onPress: () => {deleteWine(wine.wineId)}}],{cancelable:true})}}>
                          <Text style={styles.whiteText}>Delete</Text>
                        </TouchableOpacity>
                </View>
            </View>
        );
    }
    render() {
        if(this.state.wines.length < 4){
            return(
            <View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                {
                    this.state.wines.map((wine, index) => { // This will render a row for each data element.
                        return this.renderRow(wine, index);
                    })
                }
                </View>
            </View>
            )
        } else {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            {
                this.state.wines.map((wine, index) => { // This will render a row for each data element.
                    return this.renderRow(wine, index);
                })
            }
            </View>
        );
        }
    }
}