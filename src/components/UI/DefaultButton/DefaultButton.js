import React from 'react';
import { Text, TouchableOpacity, TouchableNativeFeedback, Platform, View, StyleSheet } from 'react-native';

const defaultButton = props => {
    const content = (
        <View style=
            {[
                styles.button, 
                {backgroundColor: props.color}, 
                props.disabled ? styles.disabled : null
            ]}
        >
            <Text style={props.disabled ? styles.disabledText : styles.buttonText}>{props.children}</Text>
        </View>
    );

    if (props.disabled) {
        return content;
    }

    if (Platform.OS === "android") {
        return (
            <TouchableNativeFeedback onPress={props.onPress}>
                {content}
            </TouchableNativeFeedback>
        );
    }

    return (
        <TouchableOpacity onPress={props.onPress}>
            {content}
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
        borderRadius: 10
    },
    buttonText: {
        color: "white",
        fontSize: 15
    },
    disabled: {
        backgroundColor: "#F5F5F5"
    },
    disabledText: {
        color: "#90A4AE"
    }
});

export default defaultButton;