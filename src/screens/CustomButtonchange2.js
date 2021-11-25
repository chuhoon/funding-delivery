import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class CustomButtonchange2 extends Component {
    static defaultProps = {
        title: '변경',
        buttonColor: '#A5FFE4',
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
        marginLeft: "25%",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 35,
        borderWidth: 10,
        borderColor: 'white'
    },
    textTitle: {
        fontSize: 14,
        fontWeight: 'bold'
    }
});
