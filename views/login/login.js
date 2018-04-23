import React from 'react';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import Nav from '../../shared/nav/nav';
import styles from '../../shared/css/appStyles';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const loginInfo = t.struct({
    userName: t.String,
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
        error: 'Please enter your user name.'
      },
      password: {
        error: 'Please enter your password.'
      },
    },
    stylesheet: formStyles,
  };


export default class LoginScreen extends React.Component {
    static navigationOptions = {
      title: 'Login',
    }
    loginCheck = () => {
        const value = this._form.getValue();
        console.log('value: ', value);
        if(value !== null)
        {
            this.props.navigation.navigate('Home')
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
                <Text style={styles.heading}>Login</Text>
                </View>
                <View style={styles.body}>
                    <View style={styles.formContainer}>
                        <Form ref={c => this._form = c } type={loginInfo} options={options}/>
                        <TouchableOpacity style={styles.formButton} onPress = {this.loginCheck}>
                          <Text style={styles.whiteText}>Login</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.formButton} onPress = {()=>{this.props.navigation.navigate('SignUp')}}>
                          <Text style={styles.whiteText}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
          </ImageBackground>
        </View>
      );
    }
  }