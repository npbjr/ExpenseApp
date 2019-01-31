'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';
import {createBottomTabNavigator,createAppContainer } from 'react-navigation'

import CalendarTab from '../AppTabNavigator/Calendar'
import ChartTab from '../AppTabNavigator/Chart'
import HomeTab from '../AppTabNavigator/Home'



const AppTabNavigator = createBottomTabNavigator({
	Calendar:{
		screen:CalendarTab
	},
	Home:{
		screen:HomeTab
	},
	Chart:{
		screen:ChartTab
	}

})
const App = createAppContainer(AppTabNavigator);
class MainPage extends Component {
  render() {
    return (
      <App />
    );
  }
}

const styles = StyleSheet.create({

});
export default MainPage;