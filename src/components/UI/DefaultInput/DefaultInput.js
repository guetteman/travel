import React from 'react';

import { TextInput, StyleSheet } from 'react-native';

const defaultInput = props => (
    <TextInput 
        style={styles.textInput}
        underlineColorAndroid="transparent"
        placeholderTextColor="#90A4AE"
        {...props}
    />
);

const styles = StyleSheet.create({
    textInput: { 
        width: "100%",
        backgroundColor: '#F5F5F5', 
        borderRadius:30, 
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15
    },
})

export default defaultInput;