'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';
import {createBottomTabNavigator,createAppContainer } from 'react-navigation'

import CalendarTab from '../AppTabNavigator/Calendar_nav'
import ChartTab from '../AppTabNavigator/Chart_nav'
import HomeTab from '../AppTabNavigator/Home'
import uuid from 'uuid'
import {AsyncStorage} from 'react-native';

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
const EXPENSE_ITEMS = 'EXPENSE_ITEMS';
const _retrieveData = async (callback) => {
  try {
    const value = await AsyncStorage.getItem(EXPENSE_ITEMS);
    if (value !== null) {
      // We have data!!
      console.log(value);
      callback(value)

    }
  } catch (error) {
  	callback(false)
    // Error retrieving data
  }
};
const _storeData = async (items) => {
  try {
    await AsyncStorage.setItem(EXPENSE_ITEMS, JSON.stringify(items));
  } catch (error) {
    // Error saving data
  }
};
const sample_date = new Date().toLocaleDateString()+ " "+ new Date().toLocaleTimeString();
const MyExpenses = [
	{
	    id:uuid.v4(),
	    date:sample_date,
	    name: 'Bugas',
	    subtitle: 'tindahan kilid sa CUT',
	    price:'102'
	},
	{
	    id:uuid.v4(),
	    date:sample_date,
	    name: 'shampoo',
	    subtitle: '3sixty',
	    price:'6'
	},
	{
	    id:uuid.v4(),
	    date:sample_date,
	    name: 'downy',
	    subtitle: '3sixty',
	    price:'7'
	},
	{
	    id:uuid.v4(),
	    date:sample_date,
	    name: 'safeguard',
	    subtitle: '3sixty',
	    price:'18'
	},
	{
	    id:uuid.v4(),
	    date:sample_date,
	    name: 'kojic',
	    subtitle: '3sixty',
	    price:'23'
	},
	{
	    id:uuid.v4(),
	    date:sample_date,
	    name: 'orange',
	    subtitle: 'colonade',
	    price:'10'
	},
	{
	    id:uuid.v4(),
	    date:sample_date,
	    name: 'slice bread',
	    subtitle: 'mang tinapay',
	    price:'38'
	},
	{
	    id:uuid.v4(),
	    date:sample_date,
	    name: 'load',
	    subtitle: '3sixty',
	    price:'33'
	}
]

const App = createAppContainer(AppTabNavigator);
class MainPage extends Component {
	constructor(props) {
		super(props);

		this.state = {list:[]};

	}
	render() {
		return (
		  <App screenProps = {{list:this.state.list}} />
		);
	}
}

const styles = StyleSheet.create({

});
export default MainPage;