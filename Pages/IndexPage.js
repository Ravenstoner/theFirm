import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight, StatusBar } from 'react-native';
import ButtonUP from '../Components/buttonBig';

// IOS bright StatusBar
StatusBar.setBarStyle('light-content', true);

export default class HomeScreen extends React.Component {

  

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
    return (
      <View style={styles.Box1}>
        <View style={styles.Box2}>
          
        </View>
        <View style={styles.Box3}>
          <TouchableHighlight underlayColor={'transparent'} style={{flex: 5, marginLeft: 8, marginRight: 8, marginBottom: 8}} onPress={() => this.props.navigation.navigate('Register')}>
            <ButtonUP text={'register'} color={['#E04040', '#962D2D']} />
          </TouchableHighlight>
          <TouchableHighlight underlayColor={'transparent'} style={{flex: 5, marginLeft: 8, marginRight: 8, marginBottom: 8}} onPress={() => this.props.navigation.navigate('Login')}>
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
  Box3: {
    flex: 5,
  },
});