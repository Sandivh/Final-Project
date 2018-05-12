import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Button } from 'react-native';
import styles from '../../shared/css/appStyles';
import t from 'tcomb-form-native';
import {saveSingleWineDataLocally} from '../dataModel/wines';

const Form = t.form.Form;

const wineToAdd = t.struct({
  wineName: t.String,
  wineType: t.String,
  wineRating: t.Number,
  wineDesc: t.maybe(t.String),
  userId: t.Number
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10
    },
  },
  controlLabel: {
    normal: {
      color: 'white',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    },
    
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    }
  },
  textbox:
    {
      normal:{
        borderColor: 'white',
        color: 'white',
      },
      error:{
        borderColor: 'red',
        color: 'white'
      }
    },
  textboxView:
  {
    normal:{
      borderColor: 'white',
      borderWidth: 2,
      padding: 3,
    },
    error:{
      borderColor: 'red',
      borderWidth: 2,
      padding: 3,
    }
  }
}

const options = {
  fields: {
    wineName: {
      error: 'Please enter a wine name.'
    },
    wineType: {
      error: 'Please enter a wine type.'
    },
    rating: {
      error: 'Please enter a rating for your wine.'
    }
  },
  stylesheet: formStyles,
};

export default class AddForm extends Component {

  constructor (props){
    super(props)
    this.state = {
      wineData: null
    }
  }

  wineSubmit = () => {
    const value = this._form.getValue();
    console.log('value: ', value);
    var addObject = {
      "winename":   value.wineName,
      "winetype":   value.wineType,
      "winerating": value.wineRating,
      "winedesc":   value.wineDesc,
      "userid":     value.userId
    }
    
    let outputToo = fetch('http://grevaneandsandivh.com/cellarBackEnd/add.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( addObject )
    })
    .then((response) => {
        if(!response.ok){
          throw Error(response.statusText);
        }
        
        return response.json();
    })
    //need to check the structure of the response to set the wineId
    .then((result) => {
      return wineData = {
        ...addObject,
        result
      };
    })
     .then((result) => {
       saveSingleWineDataLocally(result)
    })

  }

  render() {
    return (
      <View style={styles.formContainer}>
        <ScrollView>
          <Form ref={c => this._form = c } type={wineToAdd} options={options}/>
          <Button
          title="Add Wine"
          onPress = {this.wineSubmit}
          />
        </ScrollView>
      </View>
    );
  }
}