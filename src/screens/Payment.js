import React, { Component, useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, AppRegistry, TouchableOpacity, CheckBox } from 'react-native';
import Textinput from './Textinput';
import { AntDesign } from "@expo/vector-icons";
import CustomButtonchange from './CustomButtonchange';
import CustomButtonchange2 from './CustomButtonchange2';
import CustomButtonfull from './CustomButtonfull';
import Card from './Card';
import Cardflat from './Cardflat';

export default function Payment({ navigation, route }) {


  const [text, setText] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [trueCheckBoxIsOn, setTrueCheckBoxIsOn] = useState(true);
  const [falseCheckBoxIsOn1, setFasleCheckBoxIsOn1] = useState(true);
  const [falseCheckBoxIsOn2, setFasleCheckBoxIsOn2] = useState(false);
  const [falseCheckBoxIsOn3, setFasleCheckBoxIsOn3] = useState(false);
  const [eventCheckBoxIsOn, setEventCheckBoxIsOn] = useState(false);
  const [eventCheckBoxRegressionIsOn, setEeventCheckBoxRegressionIsOn] = useState(true);
  const [isModal, setModal] = useState(false);


  return (

    <ScrollView style={styles.container} >

      <View style={styles.i1}>
        <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: '3%', marginBottom: '3%' }}>배달정보</Text>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: '3%', }}>강릉시 병산동 342-1</Text>
        <Text style={{ fontSize: 13, marginLeft: '3.4%', }}>[도로명] 공항길30번길 4-6</Text>
      </View>

      <View style={styles.placeView}>
        <TextInput
          style={styles.i2}
          placeholder="                  상세주소를 입력해주세요 (건물명, 동/호수 등)"
          onChangeText={(text) => setText({ text })}
        />
        <Text style={{ padding: 10, fontSize: 42 }}>
          {text.split(' ').map((word) => word && ' ').join(' ')}
        </Text>
      </View>

      <View style={styles.i3}>
        <Text style={{ fontSize: 19 }}>010-5663-5644</Text>
        <CustomButtonchange></CustomButtonchange>
        <CheckBox
          onValueChange={value => setFasleCheckBoxIsOn1({ falseCheckBoxIsOn1: value })}
          style={{ marginBottm: 10 }}
          value={falseCheckBoxIsOn1}
        />
        <Text style={{ fontSize: 12, marginLeft: '3%', }}>안심번호 사용하기</Text>

      </View>

      <View style={styles.i4}>
        <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: '3%', marginBottom: '3%' }}>요청사항</Text>
        <Text style={{ fontSize: 13, marginLeft: '3%', }}>가게 사장님께</Text>
        <TextInput
          style={styles.i2}
          placeholder="                   예) 맵게 해주세요!, 서비스 부탁드립니다! 등 "
          onChangeText={(text) => setText({ text })}
        />
        <View style={styles.checkBox}>
          <CheckBox
            onValueChange={value => setFasleCheckBoxIsOn2({ falseCheckBoxIsOn2: value })}
            style={{ marginBottm: 10 }}
            value={falseCheckBoxIsOn2}
          />
          <Text style={{ fontSize: 12 }}>다음에도 사용하기</Text>
        </View>


        <Text style={{ fontSize: 13, marginLeft: '3%', }}></Text>
        <Text style={{ fontSize: 13, marginLeft: '3%', }}>배달 기사님께</Text>

        <TextInput
          style={styles.i2}
          placeholder="                   예) 천천히 오셔도 됩니다!, 항상 감사합니다! 등 "
          onChangeText={(text) => setText({ text })}
        />
        <View style={styles.checkBox}>
          <CheckBox
            onValueChange={value => setFasleCheckBoxIsOn3({ falseCheckBoxIsOn3: value })}
            style={{ marginBottm: 10 }}
            value={falseCheckBoxIsOn3}
          />
          <Text style={{ fontSize: 12 }}>다음에도 사용하기</Text>
        </View>
      </View>


      <View style={styles.i5}>
        <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: '3%', marginBottom: '3%' }}>결제 수단</Text>
        <Cardflat></Cardflat>

      </View>

      <View style={styles.i6}>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>     현금영수증</Text>


      </View>

      <View style={styles.i7}>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>      122-36-406577 (사업자증빙용)</Text>
        <CustomButtonchange2></CustomButtonchange2>
      </View>

      <View style={styles.i8}>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>결제금액</Text>
      </View>

      <View style={styles.i9}>
        <View style={styles.text1}>
          <View style={styles.text2}>
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>     주문금액</Text>
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>                                                                             {route.params.total}원</Text>
          </View>
          <Text style={{ fontSize: 14, fontWeight: 'bold' }}></Text>
          <View style={styles.text2}>
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>     배달료</Text>
            <CustomButtonfull></CustomButtonfull>
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>                                                           {route.params.deliv}원</Text>
          </View>
        </View>
      </View>

      <View style={styles.i10}>
        <View style={styles.text1}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>총 결제금액</Text>
        </View>
        <View style={styles.text3}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{route.params.sumtotal}원</Text>
        </View>
      </View>

      <View style={styles.i11}>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#A5FFE4' }]} onPress={() => { navigation.navigate('Complete') }}>
          <Text style={[styles.textTitle]}>{route.params.sumtotal}원 결제하기</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );

}
AppRegistry.registerComponent('Textinput', () => Textinput);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderColor: 'white',
  },

  text3: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    borderColor: 'white',
    flex: 1,
  },
  text2: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: 'white',
    flex: 1,
  },

  tex1: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    borderColor: 'white',
    borderBottomWidth: 8,
    paddingTop: 10,
    flex: 1,
  },


  ButtonStyle1: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: 30,
    paddingBottom: 40,
    flex: 1,


  },

  checkBox: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flex: 1,
    marginLeft: '1%',
  },
  i1: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flex: 1,
    marginTop: '2%',
  },
  i2: {
    width: '95%',
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1.5,
    flex: 1,
    borderColor: 'white',
    borderRadius: 7,
    borderWidth: 1,
    backgroundColor: 'lightgray',
    marginLeft: '2.6%',
    marginTop: '2%',
    borderColor: 'lightgray',
    borderBottomWidth: 8,
  },

  i3: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#eee',
    marginTop: '-17%',
    marginLeft: '3.5%',
    flex: 1,
    borderColor: 'black',

  },
  i4: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    borderBottomWidth: 0.5,
    paddingTop: 10,
    flex: 1,
    borderColor: 'lightgray',
    borderTopWidth: 8,
    borderBottomWidth: 8,
    paddingBottom: 15,
  },
  i5: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    borderColor: '#eee',
    borderBottomWidth: 0.5,
    paddingTop: 10,
    flex: 1,
    paddingBottom: 20,
    borderColor: 'lightgray',
    borderBottomWidth: 8,
  },
  i6: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingTop: 15,
    paddingBottom: 15,
    flex: 1,
    borderColor: 'lightgray',
    borderBottomWidth: 1,
  },
  i7: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: '#eee',
    borderBottomWidth: 0.5,
    paddingTop: 15,
    paddingBottom: 15,
    flex: 1,
    borderColor: 'lightgray',
    borderBottomWidth: 8,

  },
  i8: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#eee',
    borderBottomWidth: 0.5,
    paddingTop: 15,
    paddingBottom: 15,
    flex: 1,
    borderColor: 'white',
    marginLeft: '3.5%',

  },
  i9: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#eee',
    borderBottomWidth: 0.5,
    paddingTop: 15,
    paddingBottom: 15,
    flex: 1,

  },
  i10: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: '#eee',
    paddingTop: 5,
    flex: 1,
    paddingTop: 25,
    paddingBottom: 25,
    borderColor: 'lightgray',
    borderTopWidth: 1,
    marginLeft: '5%',
    marginRight: '5%',

  },
  i11: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: '#eee',
    borderBottomWidth: 0.5,
    paddingTop: 5,
    flex: 1,
    paddingTop: 25,
    paddingBottom: 25,
    borderColor: 'lightgray',
    borderTopWidth: 8,

  },
  button: {
    width: "90%",
    height: "170%",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'white',
    backgroundColor: '#A5FFE4',
  },
  textTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },


});