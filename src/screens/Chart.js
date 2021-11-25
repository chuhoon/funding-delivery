import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import {LineChart} from "react-native-chart-kit";


export default class Chart extends Component {
    render() {
    return (
      <View>
        <Text style={{marginLeft: "3%"}}>기간별 별점 변화</Text>
        <LineChart
          data={{
            labels: ["2020-03", "2020-06", "2020-09", "2020-12", "2021-03", "2021-06"],
            datasets: [
              {
                data: [4.43, 4.51, 4.51, 4.53, 4.52, 4.5]
              }
            ]
          }}
          width={Dimensions.get("window").width} // from react-native
          height={220}
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "white",
            backgroundGradientFrom: 'skyblue',
            backgroundGradientTo: 'skyblue',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "green"
            }
          }}
          bezier
          style={{
            marginVertical: "2%",
            borderRadius: 16
          }}
        />
      </View>
    );
  }
}

  