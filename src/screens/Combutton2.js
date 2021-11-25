import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class Combutton2 extends Component {
    static defaultProps = {
        title: '주문하기',
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
        width: "90%",
        height: "170%",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 3,
        borderColor: 'white',
        backgroundColor: '#A5FFE4',
    },
    textTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});
