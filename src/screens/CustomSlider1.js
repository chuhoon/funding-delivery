import Slider from '@react-native-community/slider';
import React, { useState } from 'react';
import { Text, View } from 'react-native';

const CustomSlider1 = ({

}) => {
    const [myValue, setMyValue] = useState(0);

    return (
        <View>
            <Slider
                style={{ height: 40, width: 360 }}
                value={myValue}
                onValueChange={(value) => setMyValue(value)}
                minimumValue={0}
                maximumValue={24}
                thumbTintColor="gold"
                maximumTrackTintColor='black'
                minimumTrackTintColor='red'
                step={1}
            />
            <Text> {myValue}명</Text>
        </View>

    )
}

export default CustomSlider1;