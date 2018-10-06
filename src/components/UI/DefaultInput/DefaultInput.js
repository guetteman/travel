import React from 'react';

import { TextInput, StyleSheet } from 'react-native';

const defaultInput = props => (
    <TextInput 
        underlineColorAndroid="transparent"
        placeholderTextColor="#90A4AE"
        {...props}
        style={[styles.textInput, props.style, !props.valid && props.touched ? styles.invalid : null]}
    />
);

const styles = StyleSheet.create({
    textInput: { 
        width: "100%",
        borderColor: '#F5F5F5',
        backgroundColor: '#F5F5F5', 
        borderRadius:30,
        borderWidth: 1, 
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15
    },
    invalid: {
        borderWidth: 1,
        borderColor: '#EF5350',
        backgroundColor: '#FFCDD2'
    }
})

export default defaultInput;