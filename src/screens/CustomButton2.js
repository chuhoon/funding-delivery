import React, { Component } from 'react';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default class CustomButton2 extends Component {
    state= {
        count:100
    }

    incrementCount() {
        this.setState((state) => {
            return {count: state.count + 1}
        });    
    }
    
    static defaultProps = {
        buttonColor: 'rgba(0,0,0,0.2)'
}

constructor(props) {
    super(props);
}

render() {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: this.props.buttonColor}]}
        onPress={() => {this.incrementCount()}}>
            <View style={{flexDirection: 'row', alignSelf:'center', justifyContent: 'flex-end'}}>
                <FontAwesome5 name="thumbs-up" size={15} color="blue" />
                <Text style={[styles.textTitle]}>{this.state.count}</Text>
            </View>
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
        borderColor: 'blue',
        borderStyle: 'solid'
    },
    textTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 10
    }
});