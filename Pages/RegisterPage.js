import React from 'react';
import { Button, View, Text, StyleSheet, Image, KeyboardAvoidingView, TextInput, TouchableHighlight, StatusBar } from 'react-native';

import HeadlineBig from '../Components/headlineBig';

// IOS bright StatusBar
StatusBar.setBarStyle('light-content', true);

export default class HomeScreen extends React.Component {

  static navigationOptions =
   {
      headerStyle: {
      backgroundColor: '#CF3B3B',
      borderBottomColor: '#CF3B3B',
      elevation: 0,
    },
    headerTintColor: '#f4f4f4',
   };

  render() {
    return (
      <View style={styles.Box1}>
        <HeadlineBig text={'register'} />
        <View style={styles.Box2}>
          <KeyboardAvoidingView keyboardVerticalOffset={150} style={styles.Box5} behavior="padding" enabled>
              <TextInput placeholderTextColor={'#f4f4f4'} selectionColor={'#e0e0e0'} underlineColorAndroid={'#CF3B3B'} style={{color: '#f4f4f4', fontSize: 16, borderBottomColor: '#f4f4f4', borderBottomWidth: 0.5}} placeholder={'Name'}></TextInput>
              <TextInput placeholderTextColor={'#f4f4f4'} selectionColor={'#e0e0e0'} underlineColorAndroid={'#CF3B3B'} style={{color: '#f4f4f4', fontSize: 16, borderBottomColor: '#f4f4f4', borderBottomWidth: 0.5}} placeholder={'E-Mail'}></TextInput>
              <TextInput placeholderTextColor={'#f4f4f4'} selectionColor={'#e0e0e0'} underlineColorAndroid={'#CF3B3B'} style={{color: '#f4f4f4', fontSize: 16, borderBottomColor: '#f4f4f4', borderBottomWidth: 0.5}} placeholder={'Password'}></TextInput>
              <TextInput placeholderTextColor={'#f4f4f4'} selectionColor={'#e0e0e0'} underlineColorAndroid={'#CF3B3B'} style={{color: '#f4f4f4', fontSize: 16, borderBottomColor: '#f4f4f4', borderBottomWidth: 0.5}} placeholder={'Password'}></TextInput>
          </KeyboardAvoidingView>
        </View>
        {/* Bottom Navigation Thing */}
        <View style={styles.Box3}>
          <TouchableHighlight underlayColor={'#CF3B3B'} style={styles.Box4} onPress={() => this.props.navigation.navigate('Index')}>
            <Text style={styles.TextBottom}>back</Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor={'#CF3B3B'} style={styles.Box4} onPress={() => this.props.navigation.navigate('Location')}>
            <Text style={styles.TextBottom}>register</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Box1: {
    flex: 1,
    backgroundColor: '#CF3B3B',
  },
  Box2: {
    flex: 16,
    padding: 16,
  },
  Box3: {
    marginTop: 50,
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