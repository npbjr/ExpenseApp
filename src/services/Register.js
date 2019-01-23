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
          <View style={styles.inputBox}>

            <Input
              leftIcon={
                <Icon
                  name='user'

                  size={20}
                  color='black'
                />
              }
              style={styles.input1}
              placeholder="Name"
              onChangeText={(username) => this.setState({username})}
            />
            <Input
              leftIcon={{ name: 'email', size: 20, color:'black' }}
              style={styles.input1}
              placeholder="Email Address"
              onChangeText={(email) => this.setState({email})}
            />

            <Input
             leftIcon={
                <Icon
                  name='lock'
                  size={20}
                  color='black'
                />
              }
              style={styles.input1}
              secureTextEntry={true}
              placeholder="Password"
              onChangeText={(password) => this.setState({password})}
            />
            <Input
             leftIcon={
                <Icon
                  name='lock'
                  size={20}
                  color='black'
                />
              }
              style={styles.input1}
              secureTextEntry={true}
              placeholder="Confirm Password"
              onChangeText={(password) => this.setState({password})}
            />
            
          </View>
          <View style={styles.btnBox}>
            <Button
                style={{paddingTop: 10}}
                title="Register"
                backgroundColor="#841584"
                onPress={
                  ()=> {
                      console.log(this.state)
                  }
                }
              />
          </View>
      </View>
	    
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:  'center' 

  },
  inputBox:{
    alignItems: 'center'
    

  },
  input1:{
    flex: 0,
    width: 250,
  },
  btnBox:{
    marginTop: 10
  }
  

});


export default Register;