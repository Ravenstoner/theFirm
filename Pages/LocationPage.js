import React from 'react';
import { Button, View, Text, StyleSheet, KeyboardAvoidingView, TextInput, TouchableHighlight, StatusBar } from 'react-native';

import ButtonUP from '../Components/buttonBig';
import HeadlineBig from '../Components/headlineBig';

// IOS bright StatusBar
StatusBar.setBarStyle('light-content', true);

export default class HomeScreen extends React.Component {

  static navigationOptions =
   { 
      headerStyle: {
      backgroundColor: '#2F2F2F',
      borderBottomColor: '#2F2F2F',
      elevation: 0,
    },
    headerTintColor: '#fff',
   };

  render() {
    return (
      <View style={styles.Box1}> 
        <HeadlineBig text={'Location'} />
        <View style={styles.Box2}>
          <KeyboardAvoidingView keyboardVerticalOffset={80} style={styles.Box4} behavior="padding" enabled>
              <TextInput placeholderTextColor={'#f4f4f4'} selectionColor={'#e0e0e0'} underlineColorAndroid={'#2F2F2F'} style={{color: '#f4f4f4', fontSize: 16, borderBottomColor: '#f4f4f4', borderBottomWidth: 0.5}} placeholder={'my City'}></TextInput>
          </KeyboardAvoidingView>
        </View>
        <View style={styles.Box3}>
          <View style={{alignItems: 'center', paddingBottom: 8}}>
            <Text style={{color: '#f4f4f4', opacity: 0.7}}>get your current Location</Text>
          </View>
          <ButtonUP text={'track'} color={['#E04040', '#962D2D']} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Box1: {
    flex: 1,
    backgroundColor: '#2F2F2F',
  },
  Box2: {
    flex: 16.5,
    padding: 16,
  },
  Box3: {
    flex: 3.5,
    padding: 8,
  },
  Box4: {
    flex: 1,
    justifyContent: 'center',
    padding: 50,
  },
});