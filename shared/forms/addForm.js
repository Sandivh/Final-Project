import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Button } from 'react-native';
import styles from '../../shared/css/appStyles';
import t from 'tcomb-form-native';
import {saveSingleWineDataLocally, getUserId} from '../dataModel/wines';

const Form = t.form.Form;

const wineToAdd = t.struct({
  wineName: t.String,
  wineType: t.String,
  wineRating: t.Number,
  wineDesc: t.maybe(t.String),
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

    const addObject = {
        "wineName":   value.wineName,
        "wineType":   value.wineType,
        "wineRating": value.wineRating,
        "wineDesc":   value.wineDesc
      };
      const wineAndUserId = getUserId()
      .then((userId) => {
          return {
            ...addObject,
            "userId":  userId[0].userId
          };
      })
      .then((result) => {
        fetch('http://grevaneandsandivh.com/cellarBackEnd/add.php', {
          method: 'POST',
          headers: {
            'Accept':'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify( result )
        })
        .then((response) => {
            if(!response.ok){
              throw Error(response.statusText);
            }
            //need to return json to get wine id and then save it to local
            return response.json();
        })
        //need to check the structure of the response to set the wineId
        .then((result) => {
          const newWineId = result
          return wineData = {
            ...addObject,
            "wineId": newWineId.wineId
          };
        })
         .then((result) => {
           saveSingleWineDataLocally(result)
        })
        .catch(error => console.log(error));
      })
      .catch(error => console.log(error));

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