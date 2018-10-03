import React, { Component } from 'react';
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { addPlace } from '../../store/actions';

import DefaultButton from '../../components/UI/DefaultButton/DefaultButton';
import MainText from '../../components/UI/MainText/MainText';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import PickImage from '../../components/PickImage/PickImage';
import PickLocation from '../../components/PickLocation/PickLocation';

class SharePlaceScreen extends Component {

    static navigatorStyle = {
        NavBarButtonColor: "#0288D1"
    }

    state = {
        placeName: ""
    }

    constructor(props) {
        super(props);

        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = event => {
        if (event.type === "NavBarButtonPress") {
            if (event.id === "SideDrawerToggle") {
                this.props.navigator.toggleDrawer({
                    side: "left"
                });
            }
        }
    }

    placeChangeHandler = val => {
        this.setState({
            placeName: val
        });
    }

    placeAddedHandler = () => {
        if (this.state.placeName.trim() !== "") {
            this.props.onAddPlace(this.state.placeName);
        }
    }
    
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <MainText>
                        <HeadingText>Share a Place with us!</HeadingText>
                    </MainText>

                    <PickImage />
                    <PickLocation />
                    <View style={styles.inputContainer}>
                        <PlaceInput placeName={this.state.placeName} onChangeText={this.placeChangeHandler} />
                    </View>
                    <View style={styles.buttonContainer}>
                        <DefaultButton color="#0288D1" onPress={this.placeAddedHandler}>Share the Place</DefaultButton>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    inputContainer: {
        width: "80%"
    },
    buttonContainer: {
        margin: 10
    }
});

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    }
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);