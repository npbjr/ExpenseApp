
import React, { Component } from 'react';

import {
  StyleSheet,
  View,Button
} from 'react-native';

import { Input } from 'react-native-elements';
class Login extends Component {
	
  render() {
    return (
    	<View style={styles.container}>
    		<View style={styles.inputBox}>
	    		<Input underlineColorAndroid='rgba(0,0,0,0)' 
	    		containerStyle={styles.inputContainer}
	    			placeholder="Email"
	    			onChangeText={(email) => this.setState({email})} 
	    		/>
	    		<Input
	    		underlineColorAndroid='rgba(0,0,0,0)' 
	    		containerStyle={styles.inputContainer}
	    			onChangeText={(password) => this.setState({password})}
	    			placeholder="Password"
	    		/>
			</View>
			<View style={styles.btnBox}>
				<Button 
					title="Login"
					onPress={
						()=>{
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
		backgroundColor: '#008B8B',

		justifyContent:  'center' 
	},
	inputBox:{
		alignItems :  'center',
		borderRadius: 10

	},
	btnBox:{
		marginTop: 20
	},
	inputContainer:{
		backgroundColor: '#008B8B',
	    borderRadius: 25,
	    marginBottom: 10,
	}

});


export default Login;