import React from 'react';
import { 
  Text, 
  View, 
  ImageBackground, 
  TouchableOpacity, 
  AsyncStorage 
} from 'react-native';
import Storage from 'react-native-storage';
import Nav from '../../shared/nav/nav';
import styles from '../../shared/css/appStyles';
import t from 'tcomb-form-native';
import {saveAllWineDataLocally} from '../../shared/dataModel/wines';

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
        error: 'Please enter your password.',
        password: true,
        secureTextEntry: true
      },
    },
    stylesheet: formStyles,
  };


export default class LoginScreen extends React.Component {
    static navigationOptions = {
      title: 'Login',
    }

    constructor(props) {
      super(props);

      const storage = new Storage({
        storageBackend: AsyncStorage
      });

      global.storage = storage;
    }

    componentWillMount() {
      storage.clearMap();
    }
  
    loginCheck = () => {
        const value = this._form.getValue();
        var anObject = {
            "password": value.password,
            "username": value.userName
        }
        /**Implementing fetch */
        let outputToo = fetch('http://grevaneandsandivh.com/cellarBackEnd/userValidation.php', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify( anObject )
        })
        .then((response) => {
            if(!response.ok){
              throw Error(response.statusText); 
            }
            
            return response.json();
        })
         .then((result) => {
          return saveAllWineDataLocally(result);
        })
        .then((result) =>{
          if(result.length > 1){
            this.props.navigation.navigate('Home')
          }else{
            this.props.navigation.navigate('Add')
          }
        })
        
        .catch(error => { console.log(error); })
        
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