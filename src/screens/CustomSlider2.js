import Slider from '@react-native-community/slider';
import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const CustomSlider2 = ({

}) => {
    const [myValue, setMyValue] = useState(0);
    const [myValue2, setMyValue2] = useState(0);
    var time1;
    return (

        <View>
            <Slider
                style={{ height: 20, width: 360 }}
                value={myValue}
                onValueChange={(value) => setMyValue(value)}
                minimumValue={0}
                maximumValue={24}
                thumbTintColor="gold"
                maximumTrackTintColor='black'
                minimumTrackTintColor='red'
                step={1}
            />
            <Slider
                style={{
                    height: 20, width: 360,
                    paddingBottom: 35,
                }}
                value2={myValue2}
                onValueChange={(value2) => setMyValue2(value2)}
                minimumValue={0}
                maximumValue={50}
                thumbTintColor="gold"
                maximumTrackTintColor='black'
                minimumTrackTintColor='red'
                step={10}
            />
            <View style={styles.slid}>
                <Text>{myValue >= 13 ? time1 = '오후' : time1 = '오전'}</Text>
                <Text>  {myValue >= 13 ? myValue - 12 : myValue}시 {myValue2}분</Text>
            </View>
        </View>

    )


}
export default CustomSlider2;


const styles = StyleSheet.create({
    slid: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        width: 350,
        height: 40,
        backgroundColor: 'ivory'
    }

});
