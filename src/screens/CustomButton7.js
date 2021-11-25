import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class CustomButton6 extends Component {
    static defaultProps = {
        title: '펀딩 만들기',
        buttonColor: 'yellow',
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
        width: "80%",
        height: "60%",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',

    },
    textTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});