import React from 'react'; 
import { Modal, View, Image, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

const placeDetail = props => {
    let modalContent = null;

    if (props.selectedPlace) {
        modalContent = (
            <View>
                <Image 
                    source={props.selectedPlace.image} 
                    style={styles.image}
                />
                <Text style={styles.name}>{props.selectedPlace.name}</Text>
            </View>
        );
    }

    return (
        <Modal 
            onRequestClose={props.onModalClosed }
            visible={props.selectedPlace !== null} 
            animationType="slide"
        >
            <View style={styles.modalContainer}>
                {modalContent}
                <View>
                    <View style={styles.deleteButtonContainer}>
                        <TouchableOpacity onPress={props.onItemDeleted}>
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
                    <Button 
                        title="Close" 
                        onPress={props.onModalClosed} 
                    />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
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

export default placeDetail;