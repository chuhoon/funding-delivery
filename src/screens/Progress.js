import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import {Animated, View, StyleSheet } from 'react-native';

const Progress = ({step, steps, height}) => {
    const[width, setWidth] = React.useState(0);
    const animatedValue = React.useRef(new Animated.Value(-1000)).current;
    const reactive = React.useRef(new Animated.Value(-1000)).current;

    React.useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: reactive,
            duration: 300,
            useNativeDriver: true,
        }).start();
    },);

    React.useEffect(() => {
        reactive.setValue(-width + (width * step) / steps);
    }, [step, width])

    return (
        <View 
            onLayout={e => {
                const newWidth = e.nativeEvent.layout.width;
                setWidth(newWidth);
            }}
            style={{
            height,
            backgroundColor: 'rgba(0,0,0,0.5)',
            borderRadius: height,
            overflow: 'hidden',
        }}
    >
             <Animated.View
                style={{
                height,
                width: '100%',
                borderRadius: height,
                backgroundColor: 'yellow',
                position: 'absolute',
                left: 0,
                top: 0,
                transform: [
                    {
                        translateX: animatedValue
                    },
                ],
             }}
            />
        </View>
    )
};

export default class Pro extends Component {
    render() { 
        return(
            <View style={Styles.container}>
                <StatusBar hidden />
                <Progress step={3.2} steps={10} height= {15} />
            </View>
        
        )
     }
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: "4%",
        width: '50%'
    }
})