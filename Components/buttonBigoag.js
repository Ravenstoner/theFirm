import React from 'react';
import { View, Text, StyleSheet, Easing, Dimensions, Button, Image, Animated, TouchableWithoutFeedback, StatusBar } from 'react-native';
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

  state = {
      heightT: new Animated.Value(0),
  };

  onPresser() {
      Animated.timing(this.state.heightT, {
      toValue: 1,
      easing: Easing.linear(),
      duration: 300,
      }).start();
  }

  render() {

    let { heightT } = this.state;
    let transformStyle = {
        position: 'absolute',
        width: heightT.interpolate({
            inputRange: [0, 1],
            outputRange: [Dimensions.get('window').width - 16, Dimensions.get('window').width]
        }),            
        height: heightT.interpolate({
            inputRange: [0, 1],
            outputRange: [Dimensions.get('screen').height / 10, Dimensions.get('screen').height]
        }),
        borderRadius: heightT.interpolate({
            inputRange: [0, 1],
            outputRange: [100, 0]
        }),
        overflow: 'hidden',
        bottom: heightT.interpolate({
          inputRange: [0, 1],
          outputRange: [this.props.bottom, 0]
        }),
        marginLeft: heightT.interpolate({
          inputRange: [0, 1],
          outputRange: [8, 0]
        }),
        zIndex: heightT.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 10]
        }),
        marginRight: heightT.interpolate({
          inputRange: [0, 1],
          outputRange: [8, 0]
      }),
    };

    let textTransformStyle = {
        color: '#f4f4f4',
        fontSize: 35,
        lineHeight: 39,
        fontFamily: 'Montserrat',
        paddingTop: heightT.interpolate({
            inputRange: [0, 1],
            outputRange: [(Dimensions.get('screen').height / 10) / 4, 100]
        }),
    };

    return (
      <Animated.View style={transformStyle}>
        <TouchableWithoutFeedback onPress={this.onPresser.bind(this)}>
            <LinearGradient 
            colors={this.props.color} 
            start={[0, 0]} end={[1, 0.1]} 
            style={{
                flex:1,
                alignItems:'center',
            }}>
                { this.state.fontLoaded ? (<Animated.Text style={textTransformStyle}>{this.props.text}</Animated.Text>) : <Text>loading...</Text>}
            </LinearGradient>
        </TouchableWithoutFeedback>
    </Animated.View>
    );   
  }
}