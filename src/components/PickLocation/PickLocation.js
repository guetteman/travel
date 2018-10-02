import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DefaultButton from '../UI/DefaultButton/DefaultButton';

class PickLocation extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        placeName: '',
    };

    placeNameChangedHandler = (value) => {
        this.setState({
            placeName: value
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.placeHolder}>
                    <Text>Map</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <DefaultButton color="#0288D1">Locate Me</DefaultButton>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center"
    },
    placeHolder: {
        width: "80%",
        backgroundColor: "#eee",
        height: 150
    },
    buttonContainer: {
        margin: 10
    }
});

export default PickLocation;