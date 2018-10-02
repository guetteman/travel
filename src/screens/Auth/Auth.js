import React, { Component } from 'react';
import { View, Button, ImageBackground, StyleSheet } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import HeadingText from '../../components/UI/HeadingText/HeadingText'
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import DefaultButton from '../../components/UI/DefaultButton/DefaultButton';

import backgroundImage from '../../assets/background.jpg';

class AuthScreen extends Component {
    loginHandler = () => {
        startMainTabs();
    }

    render () {
        return (
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                <View style={styles.container}>
                        <HeadingText>Please Log In</HeadingText>
                        <View style={styles.buttonContainer}>
                            <DefaultButton color="#0288D1">Switch to Login</DefaultButton>
                        </View>
                        <View style={styles.inputContainer} >
                            <DefaultInput placeholder="Your E-Mail Address" />
                        </View>
                        <View style={styles.inputContainer} >
                            <DefaultInput placeholder="Password" />
                        </View>
                        <View style={styles.inputContainer} >
                            <DefaultInput placeholder="Confirm Password" />
                        </View>
                        <View style={styles.buttonContainer}>
                            <DefaultButton color="#0288D1" onPress={this.loginHandler}>Login</DefaultButton>
                        </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    backgroundImage: {
        width: "100%",
        flex: 1
    },
    inputContainer: {
        marginTop: 10,
        width: "80%"
    },
    buttonContainer: {
        marginTop: 10
    }
})

export default AuthScreen;