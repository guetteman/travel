import React from 'react';
import { StyleSheet, View} from 'react-native';
import { connect } from 'react-redux';

import AddPlace from './src/components/AddPlace/AddPlace';
import List from './src/components/List/List';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions/index'; 
class App extends React.Component {
    addPlace = (newPlace) => {
        this.props.onAddPlace(newPlace);
    }

    placeSelectedHandler = (key) => {
        this.props.onSelectPlace(key);
    }

    placeDeletedHandler = () => {
        this.props.onDeletePlace();
    }

    modalClosedHandler = () => {
        this.props.onDeselectPlace();
    }

    render() {
        return (
            <View style={styles.container}>
                <PlaceDetail 
                    selectedPlace={this.props.selectedPlace}
                    onItemDeleted={this.placeDeletedHandler}
                    onModalClosed={this.modalClosedHandler}
                />
                <AddPlace places={this.props.places} add={this.addPlace}/>
                <List 
                    items={this.props.places} 
                    onItemSelected={this.placeSelectedHandler}
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
});

const mapStateToProps = state => {
    return {
        places: state.places.places,
        selectedPlace: state.places.selectedPlace
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (name) => dispatch(addPlace(name)),
        onDeletePlace: () => dispatch(deletePlace()),
        onSelectPlace: (key) => dispatch(selectPlace(key)),
        onDeselectPlace: () => dispatch(deselectPlace())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);