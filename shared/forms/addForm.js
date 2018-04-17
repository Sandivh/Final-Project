import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Button } from 'react-native';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const wineToAdd = t.struct({
  wineName: t.String,
  wineType: t.String,
  rating: t.Number,
  description: t.maybe(t.String)
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

  wineSubmit = () => {
    const value = this._form.getValue();
    console.log('value: ', value);
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