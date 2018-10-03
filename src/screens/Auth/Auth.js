import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, Dimensions } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import HeadingText from '../../components/UI/HeadingText/HeadingText'
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import DefaultButton from '../../components/UI/DefaultButton/DefaultButton';

import backgroundImage from '../../assets/background.jpg';

class AuthScreen extends Component {
    
    state = {
        viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape"
    }
    
    constructor(props) {
        super(props);

        Dimensions.addEventListener("change", this.updateStyles);
    }

    componentWillUnmount = () => {
        Dimensions.removeEventListener("change", this.updateStyles);
    }

    updateStyles = (dimensions) => {
        this.setState({
            viewMode: dimensions.window.height > 500 ? "portrait" : "landscape"
        });
    }

    loginHandler = () => {
        startMainTabs();
    }

    render () {
        let headingText = null;

        if (this.state.viewMode === "portrait") {
            headingText = (
                <HeadingText>Please Log In</HeadingText>
            );
        }

        return (
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                <View style={styles.container}>
                        {headingText}
                        <View style={styles.buttonContainer}>
                            <DefaultButton color="#0288D1">Switch to Login</DefaultButton>
                        </View>
                        <View style={styles.inputContainer} >
                            <DefaultInput placeholder="Your E-Mail Address" />
                        </View>
                        <View 
                            style={
                                this.state.viewMode === "portrait" 
                                ? styles.portraitPasswordsContainer 
                                : styles.landscapePasswordsContainer
                            } 
                        >
                            <View 
                                style={
                                    this.state.viewMode === "portrait" 
                                    ? styles.portraitPasswordWrapper 
                                    : styles.landscapePasswordWrapper
                                } 
                            >
                                <DefaultInput placeholder="Password" />
                            </View>
                            <View style={this.state.viewMode === "portrait" ? styles.portraitPasswordWrapper : styles.landscapePasswordWrapper} >
                                <DefaultInput placeholder="Confirm Password" />
                            </View>
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
    },
    landscapePasswordsContainer: {
        width: "80%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    portraitPasswordsContainer: {
        width: "80%",
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    landscapePasswordWrapper: {
        marginTop: 10,
        width: "48%"
    },
    portraitPasswordWrapper: {
        marginTop: 10,
        width: "100%"
    }
})

export default AuthScreen;