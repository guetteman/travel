import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import PlaceList from '../../components/List/List';

class FindPlaceScreen extends Component {

    state = {
        placesLoaded: false
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

    placesSearchHandler = () => {
        this.setState({
            placesLoaded: true
        });
    }

    onItemSelectedHandle = key => {
        const selectedPlace = this.props.places.find(place => place.key === key);

        this.props.navigator.push({
            screen: "travel.PlaceDetailScreen",
            title: selectedPlace.name,
            passProps: {
                selectedPlace: selectedPlace
            }
        });
    }

    render() {
        let content = (
            <TouchableOpacity onPress={this.placesSearchHandler}>
                <View style={styles.searchButton}>
                    <Text style={styles.searchButtonText}>Find Places</Text>
                </View>
            </TouchableOpacity>
        );

        if (this.state.placesLoaded) {
            content = (
                <PlaceList 
                    items={this.props.places} 
                    onItemSelected={this.onItemSelectedHandle}
                />
            );
        }

        return (
            <View style={this.state.placesLoaded ? null : styles.buttonContainer}>
                {content}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    listContainer: {

    },
    searchButton: {
        borderColor: "#0288D1",
        borderWidth: 3,
        borderRadius: 50,
        padding: 20
    },
    searchButtonText: {
        color: "#0288D1",
        fontWeight: "bold",
        fontSize: 26
    }
});

const mapStateToProps = state => {
    return {
        places: state.places.places
    };
}

export default connect(mapStateToProps)(FindPlaceScreen);