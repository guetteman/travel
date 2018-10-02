import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const defaultButton = props => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={[styles.button, {backgroundColor: props.color}]}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor:"#EF5350",
        borderRadius: 25
    },
    buttonText: {
        color: "white",
        fontSize: 15
    }
});

export default defaultButton;