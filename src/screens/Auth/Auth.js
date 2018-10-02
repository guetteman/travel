import React, { Component } from 'react';
import { View, Button, ImageBackground, StyleSheet } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import HeadingText from '../../components/UI/HeadingText/HeadingText'
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';

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
                        <Button title="Switch to Login" />
                        <View style={styles.inputContainer} >
                            <DefaultInput placeholder="Your E-Mail Address" />
                        </View>
                        <View style={styles.inputContainer} >
                            <DefaultInput placeholder="Password" />
                        </View>
                        <View style={styles.inputContainer} >
                            <DefaultInput placeholder="Confirm Password" />
                        </View>
                        <Button title="Login" onPress={this.loginHandler} />
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
    }
})

export default AuthScreen;