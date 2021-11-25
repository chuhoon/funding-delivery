import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

export default class MainMenuCard extends React.Component {
    render() {
        const { selected, onPress } = this.props
        return (
            <TouchableOpacity onPress={onPress} style={[cardStyles.cardContainer, selected && { backgroundColor: '#1AAA8E' }]}>
                {this.props.children}
            </TouchableOpacity>

        );
    }
}

const cardStyles = StyleSheet.create({
    cardContainer: {
        height: 100,
        width: 100,
        backgroundColor: "#FFFFF1",
        borderRadius: 8,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 5,
        shadowColor: "rgba(0,0,0, .4)",
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 8
    }
});