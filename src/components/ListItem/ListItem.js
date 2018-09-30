import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const ListItem = (props) => (
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.listItem}>
            <Image 
                resizeMode="cover"
                source={props.image} 
                style={styles.listItemImage } 
            />
            <Text style={styles.listItemText} >{props.name}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        padding: 10,
        backgroundColor: "#ECEFF1",
        marginBottom: 2,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center"
    },
    listItemText: {
        color: "#546E7A"
    },
    listItemImage: {
        marginRight: 8,
        height: 30,
        width: 30
    }
});

export default ListItem;