'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,Text
} from 'react-native';
import {Icon} from 'native-base';
class Calendar extends Component {
	static navigationOptions = {
		tabBarIcon:({tintColor}) =>(
			<Icon name="calendar" style={{color:tintColor}}></Icon>
			)
	}
  render() {
    return (
      <View style={styles.container}>
      	<Text>mag tipid nata, pero kaon gihapon ta lami</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container:{
			flex:1,
			alignItems:'center',
			justifyContent:  'center' 
		}
});


export default Calendar;