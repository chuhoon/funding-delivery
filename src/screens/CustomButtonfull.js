import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class CustomButtonfull extends Component {
    static defaultProps = {
        title: '자세히',
        buttonColor: 'lightgray',
        onPress: () => null
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity style={[styles.button, { backgroundColor: this.props.buttonColor }]}
                onPress={this.props.onPress}>
                <Text style={[styles.textTitle]}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        width: "20%",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 35,
        borderWidth: 10,
        borderColor: 'white'
    },
    textTitle: {
        fontSize: 12,
        fontWeight: 'bold'
    }
});
