'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,Text
} from 'react-native';
import {Icon} from 'native-base';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import {AsyncStorage} from 'react-native';
import Api from '../../services/Api';

var date = new Date();
date.setMonth(2);
const CURRENT_DATE = date.getFullYear()+"-"+date.getMonth().toLocaleString('en-US', {minimumIntegerDigits: 2})+"-"+date.getDate().toLocaleString('en-US', {minimumIntegerDigits: 2});
const EXPENSE_ITEMS = 'EXPENSE_ITEMS';
const app_api = new Api(EXPENSE_ITEMS);



const getTotal = (data)=>{
	let total = 0;
	// console.log("first"),
	// console.log(data)
	if(data.length>0){
		data.forEach((value)=>{
			
			if(value.price){
				var n = parseInt(value.price)
				total+=n;
			}
		});
		// console.log("getTOtal")
		// console.log(data);
		// console.log("getTotal")
	}
	return total;
}

class Calendar_nav extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {markedDate:'',totalExpense:''};
	}
	static navigationOptions = {
		tabBarIcon:({tintColor}) =>(
			<Icon name="calendar" style={{color:tintColor}}></Icon>
			)
	}

	onDayPress = (date) =>{
		// console.log("selected day", date)
		// console.log(date.dateString)
		this.setState({markedDate:date.dateString})
		// console.log("state")
		// console.log(this.state)
		app_api.getDataByDate(date.dateString,(data)=>{
			// console.log("data by date")
			// console.log(data)
			// console.log("_retrieveData")
			// console.log(data)
			let total = getTotal(data);
			// console.log("total:"+total)
			this.setState({totalExpense:total})
		})
	}


  render() {
    return (
	    <View style={styles.container}>
	    <View>

	      <Calendar
	      	onDayPress={this.onDayPress}
	      	markedDates={{[this.state.markedDate]: {selected: true}}}
	      	monthFormat={'yy MM'}
	      />
	      </View>
			<View>
				<Text>
					Your Total Expense on this date: {this.state.markedDate}
				</Text>
				<Text>
					{this.state.totalExpense}
				</Text>
			</View>
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


export default Calendar_nav;