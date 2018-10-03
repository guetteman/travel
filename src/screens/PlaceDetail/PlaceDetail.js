import React, { Component } from 'react'; 
import { View, ScrollView, Image, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { deletePlace } from '../../store/actions';

class PlaceDetail extends Component {
    
    state = {
        viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape"
    }

    constructor(props) {
        super(props);

        Dimensions.addEventListener("change", this.updateStyles);
    }

    componentWillUnmount = () => {
        Dimensions.removeEventListener("change", this.updateStyles);
    }

    updateStyles = (dimensions) => {
        this.setState({
            viewMode: dimensions.window.height > 500 ? "portrait" : "landscape"
        });
    }

    placeDeletedHandler = () => {
        this.props.onDeletePlace(this.props.selectedPlace.key);
        this.props.navigator.pop();
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View 
                        style={
                            this.state.viewMode === "portrait" 
                            ? styles.portraitInfoContainer 
                            : styles.landscapeInfoContainer
                        }
                    >
                        <Image 
                            source={this.props.selectedPlace.image} 
                            style={
                                this.state.viewMode === "portrait" 
                                ? styles.portraitImage 
                                : styles.landscapeImage
                            }
                        />
                        <Text style={styles.name}>
                            {this.props.selectedPlace.name}
                        </Text>
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
                                    <Text style={styles.deleteButtonText}>Delete</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>   
            </ScrollView>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        margin: 22
    },
    portraitInfoContainer: {
        flexDirection: "column"
    },
    landscapeInfoContainer: {
        flexDirection: "row"
    },
    portraitImage: {
        width: "100%",
        height: 200
    },
    landscapeImage: {
        width: "50%",
        height: 150,
        marginRight: 10
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