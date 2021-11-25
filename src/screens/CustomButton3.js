import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class CustomButton3 extends Component {
    static defaultProps = {
        title: '리뷰 작성',
        buttonColor: 'rgba(0,0,0,0.2)',
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
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'yellow',
        borderStyle: 'solid',
        marginLeft: "2.5%"
    },
    textTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'yellow'
    }
});