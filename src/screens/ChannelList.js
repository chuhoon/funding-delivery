import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import CustomButton from './CustomButton.js';

const styles = StyleSheet.create({
  container: {
    flex: 1
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
  introView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#eee',
    borderBottomWidth: 0.5,
    paddingTop: 5,
    flex: 1
  },
  indexView: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  menuView: {
    flex: 7
  },
  elem1: {
    paddingLeft: 8,
    flex: 1,
    marginBottom: '-5%',
    marginLeft: '-1%'
  },
  elem2: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginBottom: '-3%',
    marginRight: '-3%'
  },
  elem3: {
    paddingLeft: 8,
    marginLeft: '-1%'
  },
  elem4: {
    flex: 2,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginLeft: '30%',
    marginRight: '3%',
    height: 50
  },
  textBox: {
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 80,
    height: 40,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1
  },
  root: {
    flex: 1,
    padding: 16
  },
  itemView: {
    width: '100%',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    marginBottom: 12
  },
  itemImg: {
    width: 120,
    height: 100,
    resizeMode: 'cover',
    marginRight: 8
  },
  itemName: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  itemMsg: {
    fontSize: 12,
    fontWeight: 'bold'
  }
});

class ChannelList extends Component {

  constructor() {
    super();

    this.state = {
      datas: [{ name: "공탄", message: "⭐4.71 리뷰:138", img: require('./공탄.jpg'), nav: "P12" },
      { name: "드래곤차이", message: "⭐4.55 리뷰:99", img: require('./드래곤차이.jpg'), nav: "" },
      { name: "마벨리에", message: "⭐4.5 리뷰:101", img: require('./마벨리에.jpg'), nav: "" },
      { name: "마초쉐프", message: "⭐4.49 리뷰:71", img: require('./마초쉐프.jpg'), nav: "" },
      { name: "사이숲", message: "⭐4.47 리뷰:86", img: require('./사이숲.jpg'), nav: "" },
      { name: "켄커피", message: "⭐4.45 리뷰:123", img: require('./켄커피.jpg'), nav: "" },
      { name: "팔덕식당", message: "⭐4.4 리뷰:230", img: require('./팔덕식당.jpg'), nav: "" },
      { name: "호랑이굴", message: "⭐4.38 리뷰:52", img: require('./호랑이굴.jpg'), nav: "" }
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.settingView}>

          <View style={styles.elem1}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Two") }}>
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <View style={styles.elem2}>
            <TouchableOpacity>
              <Entypo name="magnifying-glass" size={24} color="black" style={{ paddingRight: 7 }} />
            </TouchableOpacity>
            <View style={{ borderLeftWidth: 1 }}>
              <TouchableOpacity>
                <FontAwesome5 name="user" size={24} color="black" style={{ paddingRight: 20, paddingLeft: 9 }} />
              </TouchableOpacity>
            </View>
          </View>

        </View>
        <View style={styles.introView}>
          <View style={styles.elem3}>
            <Text style={{ fontSize: 33, fontWeight: 'bold', marginLeft: '3%', }}>
              먹어야산다
            </Text>
            <Text style={{ fontSize: 17, fontWeight: 'bold', marginLeft: '1%' }}>
              밥집,요리,레스토랑,도시락
            </Text>
          </View>
          <View style={styles.elem4}>
            <CustomButton></CustomButton>
          </View>

        </View>
        <View style={styles.indexView}>
          <View style={styles.textBox}>
            <Text style={{ textAlign: 'center', margin: 7, fontSize: 17 }}>총 8개가 검색되었습니다!</Text>
          </View>
        </View>
        <View style={styles.menuView}>
          <FlatList
            data={this.state.datas}
            renderItem={this.renderItem}
            keyExtractor={item => item.name}>
          </FlatList>
        </View>
      </View>
    );
  }

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.itemView} onPress={() => { this.props.navigation.navigate(item.nav) }}>
        <Image source={item.img} style={styles.itemImg}></Image>
        <View style={{ flexDirection: 'column' }}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemMsg}>{item.message}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default ChannelList;