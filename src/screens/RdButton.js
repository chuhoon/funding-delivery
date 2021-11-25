import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import RadioButton from "rn-radio-button";

const RdButton = () => {
    console.log(RdButton);
    const [val, setVal] = useState("-");

    function pressCircle(i) {
        setVal(i);
    }

    return (
        <>
            <SafeAreaView style={{ backgroundColor: "#085b7c", flex: 0 }} />
            <SafeAreaView style={{ flex: 1, marginHorizontal: 10 }}>
                <RadioButton
                    outerWidth={30}
                    innerWidth={20}
                    borderWidth={1}
                    data={listData}
                    color={"steelblue"}
                    onPress={pressCircle}
                    wrapperStyle={{ padding: 3 }}
                />
                <View
                    style={{
                        marginHorizontal: 10,
                        marginVertical: 10,
                        alignItems: "center"
                    }}
                >
                    <Text>{"clicked item value is: " + val}</Text>
                </View>
            </SafeAreaView>
        </>
    );
};

const listData = [
    { label: "First", value: 1 },
    { label: "Second", value: 2 },
    { label: "Fifth", value: 5 },
    { label: "Sixth", value: 6 }
];

export default RdButton;