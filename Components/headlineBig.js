import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight, StatusBar } from 'react-native';
import Expo from 'expo';

export default class headlineBig extends React.Component {

  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Expo.Font.loadAsync({
       'Montserrat': require('../assets/fonts/Montserrat-ExtraBold.ttf'),
     });
     this.setState({ fontLoaded: true });
   }

  render() {
    return (
      <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        { this.state.fontLoaded ? (<Text style={{
          color: '#f4f4f4',
          fontSize: 45,
          fontFamily: 'Montserrat',
        }}>{this.props.text}</Text>) : <Text>loading...</Text>}
      </View>
    );   
  }
}