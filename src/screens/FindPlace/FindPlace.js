import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import PlaceList from '../../components/List/List';

class FindPlaceScreen extends Component {

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
        return (
            <View>
                <PlaceList 
                    items={this.props.places} 
                    onItemSelected={this.onItemSelectedHandle}
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        places: state.places.places
    };
}

export default connect(mapStateToProps)(FindPlaceScreen);