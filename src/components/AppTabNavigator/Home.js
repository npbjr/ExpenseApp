'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,Text, Button,FlatList, ListView,List,ScrollView
} from 'react-native';
import {Icon} from 'native-base';
import Login from '../pages/Login';
import { ListItem } from 'react-native-elements';
import AddDialog from '../forms/AddDialog';
import uuid from 'uuid';
import Api from '../../services/Api';

// import {AsyncStorage} from 'react-native';
var date = new Date();
date.setMonth(2);
const CURRENT_DATE = date.getFullYear()+"-"+date.getMonth().toLocaleString('en-US', {minimumIntegerDigits: 2})+"-"+date.getDate().toLocaleString('en-US', {minimumIntegerDigits: 2});
const EXPENSE_ITEMS = 'EXPENSE_ITEMS';
// const _retrieveData = async (callback) => {
//   try {
//     const value = await AsyncStorage.getItem(EXPENSE_ITEMS);
//     if (value !== null) {
//       // We have data!!
//       console.log(value);
//       // return JSON.parse(value)
//       callback(JSON.parse(value))
//     }
//   } catch (error) {
//   	callback(false)
//     // Error retrieving data
//   }
// };
// const _storeData = async (items) => {
//   try {
//     await AsyncStorage.setItem(EXPENSE_ITEMS, JSON.stringify(items));
//   } catch (error) {
//     // Error saving data
//   }
// };
	
const app_api = new Api(EXPENSE_ITEMS);

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {isDialogVisible:false,list:[]}
		app_api.getAllData((data)=>{
			this.setState({list:data})
		})
	}

	static navigationOptions = {
		tabBarIcon:({tintColor}) =>(
			<Icon name="home" style={{color:tintColor}}></Icon>
			)
	}

	// let item_list = [{'item':'shampoo','store':'threesixty'},{'item':'kojic','store':'threesixty'},{'item':'keratinGOLD','store':'threesixty'}];
	deleteItem = (id) =>{
		console.log("delete item")
		console.log("id number:"+id)
		let mlist = [...this.state.list.filter(list=>list.id !== id)]
		this.setState({list:mlist})
		app_api.setData(mlist)
		console.log("this state")
		console.log(this.state.list)
		app_api.getAllData((data)=>{
			console.log("this data")
			console.log(data)
		})
	}
	keyExtractor = (item, index) => index.toString()
	renderItem = ({ item }) => (
		  <ListItem
		  	containerStyle={styles.list_style}
		    title={item.name}
		    subtitle={
		    	<View>
		    		<Text>{item.subtitle}</Text>
		    		<Text>{item.date}</Text>
		    	</View>
		    }
		    // onPressRightIcon={this.deleteItem}
		    rightSubtitle={item.price + ' php'}
		    rightIcon={<Icon type="AntDesign" name="delete" onPress={()=> this.deleteItem(item.id)}></Icon>}
		    // rightAvatar={{ source: { uri: item.avatar_url } }}
		  />

		)
	getTotal = (data)=>{
		let total = 0;
		console.log("first"),
		console.log(data)
		if(data.length>0){
			data.forEach((value)=>{
				console.log(value)
				var n = parseInt(value.price)
				total+=n;
			});
			console.log("getTOtal")
			console.log(data);
			console.log("getTotal")
		}
		return total;
	}
	openDialog = ()=>{
		this.setState({isDialogVisible:true})
		console.log(this.state)
	}
	myItems = (data)=>{
		console.log("myItems")
		console.log(data)
		var raw = {
			'id':uuid.v4(),
			'date':CURRENT_DATE+ " "+ new Date().toLocaleTimeString(),
			'name':data.item,
			'subtitle':data.store,
			'price':data.value
		}
		console.log("raw")
		console.log(raw)
		console.log(this.state.list.length)
		if(this.state.list){
			let mlist = [...this.state.list, raw]
			this.setState({list:mlist})
			app_api.setData(mlist)
			console.log("updated")
			console.log(this.state.list)
		}
		else{
			this.setState({list:raw})
			app_api.setData([raw])
		}
		console.log(this.state.list)
		this.setState({isDialogVisible:false})
	}
	render() {
		return ( 

		 <View style={styles.container}>
		  	<AddDialog isVisible={this.state.isDialogVisible} dialogData={this.myItems}/>
		  	<View style={styles.body}>
		      	<View style={styles.top_menu}>
		      		<Text style={{fontSize: 20,textAlign:  'center' }}>Your Daily Expenses</Text>
		      		<View style={styles.add_expense_btn}>
			      		<Button onPress={()=>this.openDialog()}
			      			title="Add"
			      		/>
		      		</View>
		      		
		      	</View>
		      	<View style={styles.content}>
		      	<ScrollView>
			      	<FlatList
				      keyExtractor={this.keyExtractor}
				      data={this.state.list}
				      renderItem={this.renderItem}
				    />
				    <View>
				    	
				    	<Text style={{textAlign:  'right',fontSize: 20 }}> Total : 

					    	{
					    		this.getTotal(this.state.list)					
							}
							pesos

						</Text>
				    </View>
				</ScrollView>
		      	</View>

		  	</View>
		  </View>
		);
  	}
}
const styles = StyleSheet.create({
	
	add_expense_btn:{
		width: 100,
		justifyContent:  'center',

	},
	list_style:{
		borderBottomColor: 'black',
		borderBottomWidth: .5,
		backgroundColor: 'transparent'
	},
	container:{
			flex:1,
			alignItems:'center',
			justifyContent:  'center',
			// backgroundColor: '#DCDCDC'
			
		}
	,
	top_menu:{
		flex: 1,
		justifyContent:  'center' 
		// height: 150
		// backgroundColor: 'red'
	},
	body:{
		shadowOffset:{  width: 10,  height: 10,  },
		shadowColor: 'black',
		shadowOpacity: 1.0,
		borderRadius: 5,
		flexDirection:  'column', 
		alignSelf: 'stretch', 
		backgroundColor: 'white',
		marginTop: 5,
		marginBottom: 5,
		marginRight: 5,
		marginLeft: 5,
		flex: 1
	},
	content:{
		flex: 3
		// backgroundColor: 'blue',
		// height: 400
	},
	list:{
		borderColor: '#DCDCDC',
		backgroundColor: '#DCDCDC'
	}
});


export default Home;