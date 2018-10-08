import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight, StatusBar } from 'react-native';
import { LinearGradient } from 'expo';
import Expo from 'expo';

export default class ButtonUP extends React.Component {

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
      <LinearGradient
      colors={this.props.color}

      start={[0, 0]} end={[1, 0.1]}

      style={{
        flex: 1,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#111',
        shadowOffset: {height: 1, width: 0},
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 1,
      }}
      >
        { this.state.fontLoaded ? (<Text style={{
          color: '#f4f4f4',
          fontSize: 35,
          lineHeight: 39,
          fontFamily: 'Montserrat',
        }}>{this.props.text}</Text>) : <Text>loading...</Text>}
      </LinearGradient>
    );   
  }
}