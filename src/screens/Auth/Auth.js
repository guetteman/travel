import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, Dimensions } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import HeadingText from '../../components/UI/HeadingText/HeadingText'
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import DefaultButton from '../../components/UI/DefaultButton/DefaultButton';

import backgroundImage from '../../assets/background.jpg';

class AuthScreen extends Component {
    
    state = {
        viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape",
        controls: {
            email: {
                value: "",
                valid: false,
                validationRules: {
                    isEmail: true
                }
            },
            password: {
                value: "",
                valid: false,
                validationRules: {
                    minLength: 6
                }
            },
            confirmPassword: {
                value: "",
                valid: false,
                validationRules: {
                    equalTo: "password"
                }
            }
        }
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

    updateInputState = (key, value) => {
        this.setState(prevState => {
            return {
                controls: {
                    ...prevState.controls,
                    [key]:{
                        ...prevState.controls[key],
                        value: value
                    }
                }
            }
        })
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
                            <DefaultInput 
                                placeholder="Your E-Mail Address" 
                                value={this.state.controls.email.value}
                                onChangeText={(value) => {this.updateInputState('email', value)}}
                            />
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
                                <DefaultInput 
                                    placeholder="Password" 
                                    value={this.state.controls.password.value}
                                    onChangeText={(value) => {this.updateInputState('password', value)}}
                                />
                            </View>
                            <View style={this.state.viewMode === "portrait" ? styles.portraitPasswordWrapper : styles.landscapePasswordWrapper} >
                                <DefaultInput 
                                    placeholder="Confirm Password" 
                                    value={this.state.controls.confirmPassword.value}
                                    onChangeText={(value) => {this.updateInputState('confirmPassword', value)}}
                                />
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