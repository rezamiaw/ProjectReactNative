import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

class Judul extends Component{
	 render() {
    return (
      <Image style={{width:200, height:200}} 
        source={require('../src/images/faceit.png')}/>
    )
  }
}

export default Judul;