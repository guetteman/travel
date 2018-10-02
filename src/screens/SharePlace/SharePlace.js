import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import AddPlace from '../../components/AddPlace/AddPlace';
import { addPlace } from '../../store/actions';

class SharePlaceScreen extends Component {
    placeAddedHandler = placeName => {
        this.props.onAddPlace(placeName);
    }
    
    render() {
        return (
            <View>
                <AddPlace onPlaceAdded={this.placeAddedHandler} />
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    }
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);