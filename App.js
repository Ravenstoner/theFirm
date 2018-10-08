import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import HomeScreen from './Pages/IndexPage';
import RegisterPage from './Pages/RegisterPage';
import LoginPage from './Pages/LoginPage';
import LocationPage from './Pages/LocationPage';
import Try from './Pages/try';
import IndexUP from './Pages/IndexUP';

const RootStack = createStackNavigator(
  {
    Index: HomeScreen,
    Register: RegisterPage,
    Login: LoginPage,
    Location: LocationPage,
    Try: IndexUP,
  },
  {
    initialRouteName: 'Register',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}