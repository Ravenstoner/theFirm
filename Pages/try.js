import React from 'react';
import { View, Text, StyleSheet, Easing, Dimensions, Button, Image, Animated, TouchableHighlight, StatusBar } from 'react-native';
import ButtonUP from '../Components/buttonBig';

// IOS bright StatusBar
StatusBar.setBarStyle('light-content', true);

export default class HomeScreen extends React.Component {

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
  offPresser() {
    Animated.timing(this.state.heightT, {
      toValue: 0,
      easing: Easing.linear(),
      duration: 300,
    }).start();
  }

  static navigationOptions =
   { 
      headerStyle: {
      backgroundColor: '#272727',
      borderBottomColor: '#272727',
      elevation: 0,
    },
    headerTintColor: '#f4f4f4',
   };
   

  render() {
    
    let {heightX, widthX} = Dimensions.get('screen');

    let { heightT } = this.state;

    let transformStyle = { transform: [{ translateY: heightT.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -100]
    }) }], height: heightT.interpolate({
      inputRange: [0, 1],
      outputRange: [100, Dimensions.get('window').height]
    }), width: heightT.interpolate({
      inputRange: [0, 1],
      outputRange: [100, Dimensions.get('window').width]
    }), backgroundColor: '#456', marginLeft: heightT.interpolate({
      inputRange: [0, 1],
      outputRange: [8, 0]
    }), marginRight: heightT.interpolate({
      inputRange: [0, 1],
      outputRange: [8, 0]
    }), marginBottom: 8};

    return (
      <View style={styles.Box1}>
        <View style={styles.Box2}>
          <Animated.View style={transformStyle}></Animated.View>
        </View>
        <View style={{flex: 5 }}>
        <View style={{flex: 5}}>
          <TouchableHighlight onPress={this.offPresser.bind(this)} underlayColor={'transparent'} style={{flex: 5}} >
            <ButtonUP text={'register'} color={['#E04040', '#962D2D']} />
          </TouchableHighlight>
          </View>
          <TouchableHighlight underlayColor={'transparent'} onPress={this.onPresser.bind(this)} style={{flex: 5, marginLeft: 8, marginRight: 8, marginBottom: 8}} >
            <ButtonUP text={'login'} color={['#333333', '#303030']} />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Box1: {
    flex: 1,
    backgroundColor: '#272727',
  },
  Box2: {
    flex: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});