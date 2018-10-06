import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

class Login extends Component {
	render(){
		return(
			<View>
			<TextInput
			style={forstyle.input}
			underlineColorAndroid="rgba(0,0,0,0)"
			placeholder="Email Address"
			placeholderTextColor="#c6c4c4"
			/>
			<TextInput
			style={forstyle.input}
			underlineColorAndroid="rgba(0,0,0,0)"
			placeholder="Enter password"
			placeholderTextColor="#c6c4c4"
			/>
			<TouchableOpacity style={forstyle.tombol}>
				<Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
				Login
				</Text>
			</TouchableOpacity>
			</View>
			)
	}
}

const forstyle = {
	tombol: {
		backgroundColor: 'rgb(255, 85, 0)',
		borderRadius: 15,
		paddingHorizontal: 16,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 10
	},
	input: {
		backgroundColor: 'rgba(255, 255, 255, 1)',
		marginBottom: 10,
		width: 310,
		borderRadius: 15,
		paddingHorizontal: 16,
		color: '#c6c4c4'
	}
}

export default Login;