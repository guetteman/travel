import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

import DefaultInput from '../UI/DefaultInput/DefaultInput';

export default class AddPlace extends React.Component {
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

    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === "") {
            return;
        }

        this.props.onPlaceAdded(this.state.placeName);
    };

    render() {
        return (
            <View style={styles.inputContainer}>
                <DefaultInput  
                    value={this.state.placeName} 
                    onChangeText={this.placeNameChangedHandler}
                    placeholder="An Awesome Place"
                /> 
                <Button 
                    style={styles.button}
                    title="Add"
                    onPress={this.placeSubmitHandler}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputContainer: { 
    width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    textInput: { 
        width: "80%",
        backgroundColor: '#F5F5F5', 
        borderRadius:30, 
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15
    },
    button: {
        width: "20%",
    },
});