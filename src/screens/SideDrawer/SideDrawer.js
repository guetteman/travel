import React, { Component } from 'react';
import {View, Text, Dimensions, TouchableOpacity, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import MainText from '../../components/UI/MainText/MainText';

class SideDrawer extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity>
                    <View style={styles.drawerItem}>
                        <Icon 
                            name="sign-out" 
                            size={30} 
                            color="#455A64"
                            style={styles.drawerItemIcon}
                        />
                        <MainText>
                            <Text>Sign Out</Text>
                        </MainText>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 22,
        backgroundColor: "white",
        width: Dimensions.get("window").width * 0.8,
        flex:1
    },
    drawerItem: {
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#F5F5F5",
        marginBottom: 5
    },
    drawerItemIcon: {
        marginRight: 10
    }
});

export default SideDrawer;