import React from 'react'; 
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

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
                    <Button 
                        title="Delete" 
                        onPress={props.onItemDeleted} 
                        color="red"
                    />
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
    }
}); 

export default placeDetail;