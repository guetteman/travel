import React, { Component } from 'react'; 
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { deletePlace } from '../../store/actions';

class PlaceDetail extends Component {
    
    placeDeletedHandler = () => {
        this.props.onDeletePlace(this.props.selectedPlace.key);
        this.props.navigator.pop();
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Image 
                        source={this.props.selectedPlace.image} 
                        style={styles.image}
                    />
                    <Text style={styles.name}>{this.props.selectedPlace.name}</Text>
                </View>
                <View>
                    <View style={styles.deleteButtonContainer}>
                        <TouchableOpacity onPress={this.placeDeletedHandler}>
                            <View style={styles.deleteButton}>
                                <Icon 
                                    size={20} 
                                    name="trash"
                                    color="white"
                                />
                                <Text style={styles.deleteButtonText} >Delete</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        margin: 22
    },
    image: {
        width: "100%",
        height: 200
    },
    name: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28,
        color: "#546E7A"
    },
    deleteButton: {
        padding: 15,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor:"#EF5350",
        borderRadius: 30
    },
    deleteButtonContainer: {
        width: "100%",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 10
    },
    deleteButtonText: {
        marginLeft: 10,
        color: "white",
        fontSize: 20
    }
});

const mapDispatchToProps = dispatch => {
    return {
        onDeletePlace: (key) => dispatch(deletePlace(key))
    }
};

export default connect(null, mapDispatchToProps)(PlaceDetail);