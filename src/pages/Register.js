'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,TextInput, Text, Button
} from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
// import {FormLabel,Form,FormInput,FormValidationMessage} from 'react-native-elements';

class Register extends Component {

  render() {
    return (
    	<View style={styles.container}>
        <View style={styles.titleBox}>
          <Text style={{fontSize: 50}}>
            Register
          </Text>
        </View>
        <View style={styles.formBox}>
          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.inputElement}
              placeholder="Name"
              onChangeText={(username) => this.setState({username})} 
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputElement}
        
                  onChangeText={(email) => this.setState({email})}
                  placeholder="Email"
                />
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputElement}
        
                  onChangeText={(password) => this.setState({password})}
                  placeholder="Password"
                />
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputElement}
        
                  onChangeText={(confirm_password) => this.setState({confirm_password})}
                  placeholder="Confirm Password"
                />
          </View>
          <View style={styles.btnBox}>
            <Button
              buttonStyle={styles.buttonstyle}
              title="Register"
              
              onPress={
                ()=>{
                  console.log(this.state)
                }
              }
            />
          </View>
        </View>
          
      </View>
	    
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#F0FFF0',
    justifyContent:  'center' 
  },
  formBox:{
    height: 350,
    alignItems:  'center',

  },
  inputElement:{
    textAlign:  'center' 
  },
  buttonstyle:{
    width: 100,
  },
  btnBox:{
    marginTop: 20,
    alignItems:  'center' 
  },
  inputContainer:{
    marginTop: 10,
    width: 300,
    backgroundColor: '#fff',
      borderRadius: 25,
      marginBottom: 10,

  },titleBox:{
    height: 100,
    alignItems:  'center' 
    // backgroundColor: 'blue'
  }
  

});


export default Register;