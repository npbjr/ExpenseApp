'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,Text, Button,FlatList, ListView,List,ScrollView
} from 'react-native';
import {Icon} from 'native-base';
import Login from '../pages/Login';
import { ListItem } from 'react-native-elements';

class Home extends Component {
	state = {
		dataSource:this.props.list
	};
	static navigationOptions = {
		tabBarIcon:({tintColor}) =>(
			<Icon name="home" style={{color:tintColor}}></Icon>
			)
	}

	// let item_list = [{'item':'shampoo','store':'threesixty'},{'item':'kojic','store':'threesixty'},{'item':'keratinGOLD','store':'threesixty'}];

	keyExtractor = (item, index) => index.toString()
	renderItem = ({ item }) => (
		  <ListItem
		  	containerStyle={styles.list_style}
		    title={item.name}
		    subtitle={item.subtitle}
		    rightSubtitle={item.price + ' php'}
		    rightIcon={{ name: 'edit' }}
		    // rightAvatar={{ source: { uri: item.avatar_url } }}
		  />
		)
	

	render() {
		return (

		  <View style={styles.container}>
		  	<View style={styles.body}>
		  		
		      	<View style={styles.top_menu}>
		      		<Text style={{fontSize: 20,textAlign:  'center' }}>Imong mga Gastos Karong Adlawa</Text>
		      		<View style={styles.add_expense_btn}>
			      		<Button onPress={
				      				()=>{
				      					console.log("button pressed")
				      				}
				      			}
			      			title="Add"
			      		/>
		      		</View>
		      		
		      	</View>
		      	<View style={styles.content}>
		      	<ScrollView>
			      	<FlatList
				      keyExtractor={this.keyExtractor}
				      data={this.state.dataSource}
				      renderItem={this.renderItem}
				    />
				    <View>
				    	
				    	<Text style={{textAlign:  'right',fontSize: 20 }}> Total : 237pesos</Text>
				    </View>
				</ScrollView>
		      	</View>

		  	</View>
		  </View>
		);
  	}
}
Home.defaultProps = {
  list: [
	  {
	    name: 'Bugas',
	    subtitle: 'tindahan kilid sa CUT',
	    price:'102'
	  },
	  {
	    name: 'shampoo',
	    subtitle: '3sixty',
	    price:'6'
	  },
	  {
	    name: 'downy',
	    subtitle: '3sixty',
	    price:'7'
	  },
	  {
	    name: 'safeguard',
	    subtitle: '3sixty',
	    price:'18'
	  },
	  {
	    name: 'kojic',
	    subtitle: '3sixty',
	    price:'23'
	  },
	  {
	    name: 'orange',
	    subtitle: 'colonade',
	    price:'10'
	  },
	  {
	    name: 'slice bread',
	    subtitle: 'mang tinapay',
	    price:'38'
	  },
	  {
	    name: 'load',
	    subtitle: '3sixty',
	    price:'33'
	  }
	]
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
		backgroundColor: '#F5F5DC',
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