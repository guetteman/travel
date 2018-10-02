import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import PlaceList from '../../components/List/List';

class FindPlaceScreen extends Component {
    render() {
        return (
            <View>
                <PlaceList items={this.props.places} />
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