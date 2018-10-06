import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class Footer extends Component {
	render(){
		return(
			<View style={forstyle.footer}>
			<Text style={{color:'rgb(255, 255, 255)', fontSize:15}}>
			DON'T HAVE AN ACCOUNT?
			</Text>
			<TouchableOpacity>
			<Text style={{color:'rgb(255, 85, 0)', fontSize:15, fontWeight: 'bold'}}> Sign up now </Text>
			</TouchableOpacity>
			</View>
			)
	}
}

const forstyle = {
	footer: {
		marginTop: 50,
		flexDirection:'row'
	}
}

export default Footer;