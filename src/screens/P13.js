import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, AppRegistry, TouchableOpacity } from 'react-native';
import CustomSlider from './CustomSlider';
import CustomSlider1 from './CustomSlider1';
import CustomSlider2 from './CustomSlider2';
import Textinput from './Textinput';
import { AntDesign } from "@expo/vector-icons";

class P13 extends Component {

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    return (
      <View style={styles.container} >

        <View style={styles.settingView}>
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('P12') }}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.introView}>
          <Text style={{ fontSize: 33, fontWeight: 'bold', marginLeft: '3%', }}>펀딩 만들기</Text>
        </View>

        <View style={styles.placeView}>

          <TextInput
            style={styles.input}
            placeholder="                           펀딩 장소를 입력해주세요!"
            onChangeText={(text) => this.setState({ text })}
          />
          <Text style={{ padding: 10, fontSize: 42 }}>
            {this.state.text.split(' ').map((word) => word && ' ').join(' ')}
          </Text>


        </View>

        <View style={styles.endtimeView}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }} > 펀딩 마감 시간</Text>
          <CustomSlider></CustomSlider>
        </View>

        <View style={styles.eattimeView}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>식사 시간</Text>
          <CustomSlider2></CustomSlider2>
        </View>

        <View style={styles.personView}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>인원 수</Text>
          <CustomSlider1></CustomSlider1>
        </View>

        <View style={styles.makeView}>
          <TouchableOpacity style={[styles2.button, { backgroundColor: 'yellow' }]}
            onPress={() => { this.props.navigation.navigate('My') }}>
            <Text style={[styles2.textTitle]}>펀딩 만들기</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

AppRegistry.registerComponent('Textinput', () => Textinput);
export default P13;

const styles2 = StyleSheet.create({
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
  },
  settingView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#eee',
    borderBottomWidth: 0.5,
    paddingTop: 5,
    flex: 0.5
  },

  input: {
    width: 340,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginLeft: 10
  },
  introView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#eee',
    borderBottomWidth: 0.5,
    flex: 0.8,
    borderColor: 'white',
  },

  placeView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: '#eee',
    borderBottomWidth: 0.5,
    paddingBottom: 20,
    flex: 0.7,
    borderColor: 'black',
  },
  endtimeView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderColor: '#eee',
    borderBottomWidth: 0.5,
    paddingTop: 5,
    flex: 1.5,
    borderColor: 'black',
  },
  eattimeView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderColor: '#eee',
    borderBottomWidth: 0.5,
    paddingTop: 5,
    flex: 1.5,
    borderColor: 'black',
  },
  personView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderColor: '#eee',
    borderBottomWidth: 0.5,
    paddingTop: 5,
    flex: 1,
    borderColor: 'black',
  },
  makeView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: '#eee',
    borderBottomWidth: 0.5,
    paddingTop: 5,
    flex: 1,
    borderColor: 'white',

  },


});