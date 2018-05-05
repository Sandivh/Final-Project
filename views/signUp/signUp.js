import React from 'react';
import { Text, ScrollView, View, ImageBackground, Button } from 'react-native';
import Nav from '../../shared/nav/nav';
import styles from '../../shared/css/appStyles';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const signUpInfo = t.struct({
    userName: t.String,
    email: t.String,
    password: t.String,
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
      userName: {
        error: 'Please enter your desired user name.'
      },
      email:{
          error: 'Please enter your Email.'
      },
      password: {
        error: 'Please enter your a vaild password.'
      },
    },
    stylesheet: formStyles,
  };


export default class SignUpScreen extends React.Component {
    static navigationOptions = {
      title: 'Sign Up',
    }

    loginCheck = () => {
        const value = this._form.getValue();
        console.log('value: ', value);
        if(value !== null)
        {
            this.props.navigation.navigate('Login')
        }
      }

    
    render() {
      return (
        <View>
          <ImageBackground 
            source={require('../../images/wineBackground.jpg')} 
            style={{
              width: '100%', 
              height: '100%', 
              alignItems: 'center', 
            }}>
                <View style={styles.container}>
                <Text style={styles.heading}>Sign Up</Text>
                </View>
                <View style={styles.body}>
                    <View style={styles.formContainer}>
                    <ScrollView>
                        <Form ref={c => this._form = c } type={signUpInfo} options={options}/>
                        <Button
                        title="Sign Up"
                        onPress = {this.loginCheck}
                        />
                    </ScrollView>
                    </View>
                </View>
          </ImageBackground>
        </View>
      );
    }
  }