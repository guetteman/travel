import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import DefaultButton from '../UI/DefaultButton/DefaultButton';

import imagePlaceholder from '../../assets/beautiful-place.jpg';

class PickImage extends React.Component {
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
                    <Image source={imagePlaceholder} style={styles.previewImage} />
                </View>
                <View style={styles.buttonContainer}>
                    <DefaultButton color="#0288D1">Pick Image</DefaultButton>
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
    previewImage: {
        height: "100%",
        width: "100%"
    },
    buttonContainer: {
        margin: 10
    }
});

export default PickImage;