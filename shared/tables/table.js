import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from '../../shared/css/appStyles';
import staticJson from '../testJson/staticJson.json';



/* These are the cells.
You may even take parameters to display different data / react elements etc. */
export default class Table extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            wines: []
        };
    }

    componentWillMount() {
        const data = staticJson;

        this.setState({
            wines: data.wines
        });
    }

    renderRow = (wine ,index) => {
        return (
            <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row', width: '100%' }} key={index}>
                <View style={{ flex: 1, alignSelf: 'stretch', backgroundColor: 'red', marginVertical: '2%', marginLeft: '2%', padding: '2%', height: 50 }} key="1">    
                    <Text style={{ color: 'white' }}>{wine.name}</Text>
                </View>
                <View style={{ flex: 1, alignSelf: 'stretch', backgroundColor: 'blue', marginVertical: '2%', padding: '2%', height: 50 }} key="2">
                    <Text style={{ color: 'white' }}>{wine.type}</Text>
                </View>
                <View style={{ flex: 1, alignSelf: 'stretch', backgroundColor: 'green', marginVertical: '2%', marginRight: '2%', padding: '2%', height: 50 }} key="3">
                    <Text style={{ color: 'white' }}>{wine.rating}</Text>
                </View>
            </View>
        );
    }
    render() {
        // const data = [1, 2, 3, 4];
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
                <View style={{ flex: 1, padding: '2%', height: 50 }} >
                    <Text style={{ color:'white'}}>Test</Text>
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