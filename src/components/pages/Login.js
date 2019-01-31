
import React, { Component } from 'react';

import {
  StyleSheet,
  View, TextInput,Text
} from 'react-native';

import { Input ,Button} from 'react-native-elements';
class Login extends Component {
	
  render() {
    return (
    	<View style={styles.container}>
    		<View style={styles.titleBox}>
    			<Text style={{fontSize: 50}}>
    				Login
    			</Text>
    		</View>
    		<View style={styles.formBox}>
	    		<View style={styles.inputContainer}>
		    		<TextInput 
		    			style={styles.inputElement}
		    			placeholder="Email"
		    			onChangeText={(email) => this.setState({email})} 
		    		/>
				</View>
				<View style={styles.inputContainer}>
				<TextInput style={styles.inputElement}
				secureTextEntry={true}
		    			onChangeText={(password) => this.setState({password})}
		    			placeholder="Password"
		    		/>
		    	</View>
				<View style={styles.btnBox}>
					<Button
						buttonStyle={styles.buttonstyle}
						title="Login"
						
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
		height: 300,
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
		height: 200,
		alignItems:  'center' 
		// backgroundColor: 'blue'
	}

});


export default Login;