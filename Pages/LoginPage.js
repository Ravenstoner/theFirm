import React from 'react';
import { Button, View, Text, StyleSheet, Image, KeyboardAvoidingView, TextInput, TouchableHighlight, StatusBar } from 'react-native';
import Expo from 'expo';

import HeadlineBig from '../Components/headlineBig';

// IOS bright StatusBar
StatusBar.setBarStyle('light-content', true);

export default class HomeScreen extends React.Component {

  state = {
    fontLoaded: false,
  };

  static navigationOptions =
   { 
      headerStyle: {
      backgroundColor: '#2F2F2F',
      borderBottomColor: '#2F2F2F',
      elevation: 0,
    },
    headerTintColor: '#f4f4f4',
   };

   async componentDidMount() {
     await Expo.Font.loadAsync({
        'Montserrat': require('../assets/fonts/Montserrat-Regular.ttf'),
      });
      this.setState({ fontLoaded: true });
    }

  render() {
    return (
      <View style={styles.Box1}>
        <HeadlineBig text={'login'} />
        <View style={styles.Box2}>
          <KeyboardAvoidingView keyboardVerticalOffset={80} style={styles.Box5} behavior="padding" enabled>
              <TextInput placeholderTextColor={'#f4f4f4'} selectionColor={'#e0e0e0'} underlineColorAndroid={'#2F2F2F'} style={{color: '#f4f4f4', fontSize: 16, borderBottomColor: '#f4f4f4', borderBottomWidth: 0.5}} placeholder={'E-Mail'}></TextInput>
              <TextInput placeholderTextColor={'#f4f4f4'} selectionColor={'#e0e0e0'} underlineColorAndroid={'#2F2F2F'} style={{color: '#f4f4f4', fontSize: 16, borderBottomColor: '#f4f4f4', borderBottomWidth: 0.5}} placeholder={'Password'}></TextInput>
          </KeyboardAvoidingView>
        </View>
        {/* Bottom Navigation Thing */}
        <View style={styles.Box3}>
          <TouchableHighlight underlayColor={'#2F2F2F'} style={styles.Box4} onPress={() => this.props.navigation.navigate('Index')}>
            <Text style={styles.TextBottom}>back</Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor={'#2F2F2F'} style={styles.Box4} onPress={() => this.props.navigation.navigate('Location')}>
            <Text style={styles.TextBottom}>login</Text>
          </TouchableHighlight>
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
    flex: 16,
    padding: 16,
  },
  Box3: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  TextBottom: {
    color: '#f4f4f4',
    paddingLeft: 16,
    paddingRight: 16,
  },
  Box5: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 50,
  },
});