import React from 'react';
import { StyleSheet, View} from 'react-native';
import AddPlace from './src/components/AddPlace/AddPlace';
import List from './src/components/List/List';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail'; 
export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            places: [],
            selectedPlace: null
        };

    }

    addPlace = (newPlace) => {
        this.setState(prevState => {
            return {
                places: prevState.places.concat({
                    key: Math.random().toString(), 
                    name: newPlace,
                    image: {
                        uri: "https://cloud.lovin.ie/images/uploads/2017/07/_relatedEntryImage2x/shutterstock_431693263.jpg?mtime=20170717124617"
                    }
                })
            };
        });
    }

    placeSelectedHandler = (key) => {
        this.setState(prevState => {
            return {
                selectedPlace: prevState.places.find(place => {
                    return place.key === key;
                })
            };
        });
    }

    placeDeletedHandler = () => {
        this.setState(prevState => {
            return {
                places: prevState.places.filter((place) => {
                    return place.key !== prevState.selectedPlace.key;
                }),
                selectedPlace: null
            };
        });
    }

    modalClosedHandler = () => {
        this.setState({
            selectedPlace: null
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <PlaceDetail 
                    selectedPlace={this.state.selectedPlace}
                    onItemDeleted={this.placeDeletedHandler}
                    onModalClosed={this.modalClosedHandler}
                />
                <AddPlace places={this.state.places} add={this.addPlace}/>
                <List 
                    items={this.state.places} 
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