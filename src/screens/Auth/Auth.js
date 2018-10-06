import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, Dimensions } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import HeadingText from '../../components/UI/HeadingText/HeadingText'
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import DefaultButton from '../../components/UI/DefaultButton/DefaultButton';

import backgroundImage from '../../assets/background.jpg';

import validate from '../../utilties/validation';

class AuthScreen extends Component {
    
    state = {
        viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape",
        controls: {
            email: {
                value: "",
                valid: false,
                validationRules: {
                    isEmail: true
                },
                touched: false
            },
            password: {
                value: "",
                valid: false,
                validationRules: {
                    minLength: 6
                },
                touched: false
            },
            confirmPassword: {
                value: "",
                valid: false,
                validationRules: {
                    equalTo: "password"
                },
                touched: false
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
        let connectedValue = {};
        if (this.state.controls[key].validationRules.equalTo) {
            const equalToControl = this.state.controls[key].validationRules.equalTo;
            const equalValue = this.state.controls[equalToControl].value;
            connectedValue = {
                ...connectedValue,
                equalTo: equalValue
            }
        }

        if (key === 'password') {
            connectedValue = {
                ...connectedValue,
                equalTo: value
            }
        }

        this.setState(prevState => {
            return {
                controls: {
                    ...prevState.controls,
                    confirmPassword: {
                        ...prevState.controls.confirmPassword,
                        valid: key === 'password' 
                        ? validate
                            (
                                prevState.controls.confirmPassword.value, 
                                prevState.controls.confirmPassword.validationRules, 
                                connectedValue
                            )
                        : prevState.controls.confirmPassword.valid
                    },
                    [key]:{
                        ...prevState.controls[key],
                        value: value,
                        valid: validate(value, prevState.controls[key].validationRules, connectedValue),
                        touched: true
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
                                valid={this.state.controls.email.valid}
                                touched={this.state.controls.email.touched}
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
                                    valid={this.state.controls.password.valid}
                                    touched={this.state.controls.password.touched}
                                />
                            </View>
                            <View style={this.state.viewMode === "portrait" ? styles.portraitPasswordWrapper : styles.landscapePasswordWrapper} >
                                <DefaultInput 
                                    placeholder="Confirm Password" 
                                    value={this.state.controls.confirmPassword.value}
                                    onChangeText={(value) => {this.updateInputState('confirmPassword', value)}}
                                    valid={this.state.controls.confirmPassword.valid}
                                    touched={this.state.controls.confirmPassword.touched}
                                />
                            </View>
                        </View>
                        <View style={styles.buttonContainer}>
                            <DefaultButton 
                                color="#0288D1" 
                                onPress={this.loginHandler}
                                disabled={
                                    !this.state.controls.email.valid ||
                                    !this.state.controls.password.valid ||
                                    !this.state.controls.confirmPassword.valid
                                }
                            >
                                Login
                            </DefaultButton>
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