'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,Text
} from 'react-native';
import {Icon} from 'native-base';
class Chart_nav extends Component {
	static navigationOptions = {
		tabBarIcon:({tintColor}) =>(
			<Icon type="AntDesign" name="linechart" style={{color:tintColor}}></Icon>
			)
	}
  render() {
    return (
      <View style={styles.container}>
      	<Text>imong mama</Text>
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


export default Chart_nav;