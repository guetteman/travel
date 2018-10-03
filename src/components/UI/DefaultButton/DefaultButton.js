import React from 'react';
import { Text, TouchableOpacity, TouchableNativeFeedback, Platform, View, StyleSheet } from 'react-native';

const defaultButton = props => {
    const content = (
        <View style={[styles.button, {backgroundColor: props.color}]}>
            <Text style={styles.buttonText}>{props.children}</Text>
        </View>
    );

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
    }
});

export default defaultButton;