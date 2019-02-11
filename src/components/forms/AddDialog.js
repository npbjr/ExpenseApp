'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';
import Dialog from "react-native-dialog";
class AddDialog extends Component {
	state = {
		item:"",
		value:"",
		store:"",
		date: new Date().toLocaleDateString()+ " "+ new Date().toLocaleTimeString(),
		isVisible: (this.props.isVisible == true) ? true : false
	}
	handleSubmit = (data) =>{
		this.props.dialogData(data);
		this.setState({isVisible:false})

	}
	handleCancel = ()=>{
		this.setState({isVisible:false})
	}
	getVisible = () =>{
		this.setState({isVisible:this.props.isVisible})
		
	}
	componentWillReceiveProps (newProps) {
	  console.log("newProps")
	  console.log(newProps)
	  if(newProps.hasOwnProperty("isVisible")){
	  	this.setState({isVisible:newProps.isVisible})
	  }
	}

  render() {
    return (
	    <View>
	      	
	      	<Dialog.Container visible={this.state.isVisible} myItems={this.state}>
				<Dialog.Title>EXPENSE FORM</Dialog.Title>
				<Dialog.Description>
					Add your daily expenses
				</Dialog.Description>
				<Dialog.Input onChangeText={(item) => this.setState({item})} wrapperStyle={styles.dialog_inputs} label="Item"></Dialog.Input>
				<Dialog.Input onChangeText={(store) => this.setState({store})} wrapperStyle={styles.dialog_inputs} label="Store"></Dialog.Input>
				<Dialog.Input onChangeText={(value) => this.setState({value})} wrapperStyle={styles.dialog_inputs} label="Value"></Dialog.Input>
				<Dialog.Button label="Cancel" onPress={()=> this.handleCancel()} />
				<Dialog.Button label="Submit" 
					onPress={()=> this.handleSubmit({
						'item':this.state.item,
						'value':this.state.value,
						'store':this.state.store
				})}/>
			</Dialog.Container>
      	</View>
    );
  }
}
const styles = StyleSheet.create({
	dialog_inputs:{
		borderBottomWidth: .5,
		borderBottomColor: 'black'
	}
});


export default AddDialog;