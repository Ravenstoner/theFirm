import  React  from "react";
import { View, Text, StyleSheet, Easing, Dimensions, Button, Image, Animated, TouchableWithoutFeedback, StatusBar } from 'react-native';
import { LinearGradient } from 'expo';

import ButtonBigoag from '../Components/buttonBigoag';

export default class IndexUP extends React.Component {

    static navigationOptions =
    { 
        headerStyle: {
        backgroundColor: 'transparent',
        borderBottomColor: 'transparent',
        elevation: 0,
        },
        headerTintColor: '#f4f4f4',
        header : null
    };

    

    render() {

        

        return(
            <View style={{
                position: 'absolute',
                height: Dimensions.get('window').height,
                width: Dimensions.get('window').width,
                backgroundColor: '#272727',
                justifyContent: 'flex-end',
            }}>
                    <ButtonBigoag bottom={90} color={['#E04040', '#962D2D']} text={'register'} />
                    <ButtonBigoag bottom={8} color={['#333333', '#303030']} text={'login'} />
            </View>
        );
    }
}