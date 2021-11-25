import React, { Component } from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default class CustomButton extends Component {
    static defaultProps = {
        title: '펀딩 업체',
        buttonColor: 'skyblue',
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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    textTitle: {
        fontSize: 15
    }
});
