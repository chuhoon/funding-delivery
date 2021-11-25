import React, { Component } from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default class CustomButton6 extends Component {
    static defaultProps = {
        title: '일반 결제',
        buttonColor: 'yellow',
        onPress: () => null
}

constructor(props) {
    super(props);
}

render() {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: this.props.buttonColor}]}
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
        borderColor: 'black',
        marginLeft: "2.5%"
    },
    textTitle: {
        fontSize: 12,
        fontWeight: 'bold'
    }
});