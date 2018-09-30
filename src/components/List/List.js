import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ListItem from '../ListItem/ListItem';

export default class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FlatList 
                style={styles.container}
                data={this.props.items}
                renderItem={(info) => (
                    <ListItem 
                        name={info.item.name} 
                        image={info.item.image}
                        onItemPressed={() => {this.props.onItemSelected(info.item.key)}} 
                    />
                )}
            />
        );
    }
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginTop: 10
    }
});