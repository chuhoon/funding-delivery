import React, { Component } from 'react';
import { ScrollView, View, Text, ImageBackground, TouchableOpacity, Button, Image, StyleSheet } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import CustomButton2 from './CustomButton2';
import CustomButton3 from './CustomButton3';
import CustomButton4 from './CustomButton4';
import CustomButton6 from './CustomButton6';
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import Chart from './Chart';
import Review from './Review';

class P12 extends Component {
  static defaultProps = {
    title: '펀딩 만들기',
    buttonColor: 'yellow',
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.settingView}>
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('ChannelList') }}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Entypo name="home" size={24} color="black" style={{ paddingLeft: '88%' }} />
          </TouchableOpacity>
        </View>

        <View style={styles.contentView}>
          <ImageBackground source={require('./공탄.jpg')} style={{ width: '100%', height: '100%', flex: 1, resizeMode: 'cover', justifyContent: "center" }}>
            <Text style={{ textAlign: 'center', fontSize: 40, fontWeight: 'bold', color: 'white', marginBottom: "5%" }}>공 탄</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: "3%" }}>
              <FontAwesome name="star" size={24} color="yellow" style={{ paddingLeft: 5 }} />
              <FontAwesome name="star" size={24} color="yellow" style={{ paddingLeft: 5 }} />
              <FontAwesome name="star" size={24} color="yellow" style={{ paddingLeft: 5 }} />
              <FontAwesome name="star" size={24} color="yellow" style={{ paddingLeft: 5 }} />
              <FontAwesome name="star-half-empty" size={24} color="yellow" style={{ paddingLeft: 5 }} />
            </View>
            <Text style={{ textAlign: 'center', fontSize: 15, color: 'white', marginBottom: "5%" }}>평가 145건 (4.71) | 방문자 47330명</Text>
            <View style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'flex-end', marginBottom: "5%", height: "8%" }}>
              <CustomButton2></CustomButton2>
              <CustomButton3
                onPress={() => { this.props.navigation.navigate('My') }}
              ></CustomButton3>
              <CustomButton4></CustomButton4>
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'flex-end', height: "8%", marginBottom: "5%" }}>

              <TouchableOpacity style={[styles.fundButton, { backgroundColor: this.props.buttonColor }]}
                onPress={() => { this.props.navigation.navigate('ChannelCreation') }}>
                <Text style={[styles.textTitle]}>{this.props.title}</Text>
              </TouchableOpacity>
              <CustomButton6></CustomButton6>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.threeView}>
          <Text style={{ textAlign: 'center', fontSize: 15, color: 'skyblue', fontWeight: 'bold', marginBottom: "5%" }}>#안양맛집 #인덕원맛집 #평촌맛집 #가성비 #양념갈비 #안창살 #된장찌개</Text>
          <View style={{ flexDirection: 'row', height: 40, width: 300 }}>
            <Entypo name="location-pin" size={24} color="grey" />
            <Text style={{ textAlign: 'center', fontSize: 14, color: 'black', fontWeight: 'bold', marginBottom: "5%" }}>경기 안양시 동안구 인덕원로 30</Text>
          </View>
          <MapView
            style={{ flex: 1, width: "100%", height: 200, marginBottom: "5%" }}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
              latitude: 37.4020397,
              longitude: 126.9044065,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }} >
            <Marker coordinate={{ latitude: 37.4020397, longitude: 126.9044065 }} />
          </MapView>
          <View style={{ flexDirection: 'row', height: "3%", width: "75%" }}>
            <AntDesign name="clockcircle" size={17} color="grey" style={{ marginLeft: "1%" }} />
            <Text style={{ textAlign: 'center', fontSize: 14, color: 'black', fontWeight: 'bold', marginBottom: "5%", marginLeft: "2%" }}>평일(월요일 제외) 17:00 ~ 00:00 (마지막 주문 23:00)</Text>
          </View>
          <View style={{ flexDirection: 'row', height: "3%", width: "75%" }}>
            <FontAwesome name="phone" size={20} color="grey" style={{ marginLeft: "1%" }} />
            <Text style={{ textAlign: 'center', fontSize: 14, color: 'black', fontWeight: 'bold', marginBottom: "5%", marginLeft: "2%" }}>0507-1387-3880</Text>
          </View>
          <TouchableOpacity style={{ flexDirection: 'row', height: 40, width: 300 }}>
            <MaterialCommunityIcons name="wrench" size={20} color="grey" style={{ marginLeft: "1%" }} />
            <Text style={{ textAlign: 'center', fontSize: 14, color: 'black', fontWeight: 'bold', marginBottom: "5%", marginLeft: "2%" }}>오류 제보하기</Text>
          </TouchableOpacity>
          <Chart></Chart>

          <View style={styles.root}>
            <View style={{ flexDirection: 'row', height: "6%", width: "75%" }}>
              <MaterialIcons name="restaurant-menu" size={20} color="grey" />
              <Text style={{ textAlign: 'center', fontSize: 14, color: 'black', fontWeight: 'bold', marginBottom: "2.5%", marginLeft: "1%" }}>메뉴</Text>
            </View>

            <TouchableOpacity style={styles.itemView} onPress={() => { alert("양념 소갈빗살"); }}>
              <Image source={require('./양념소갈빗살.jpg')} style={styles.itemImg}></Image>
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.itemName}>양념 소갈빗살</Text>
                <Text style={styles.itemMsg}>최고급 소갈빗살을 주문과 동시에 양념해서 나가는 즉석요리</Text>
                <Text style={styles.itemPrice}>14,000원</Text>
              </View>

            </TouchableOpacity>

            <TouchableOpacity style={styles.itemView} onPress={() => { alert("양념 안창살"); }}>
              <Image source={require('./양념안창살.jpg')} style={styles.itemImg}></Image>
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.itemName}>양념 안창살</Text>
                <Text style={styles.itemMsg}>최고급 안창살을 주문과 동시에 양념해서 나가는 즉석요리</Text>
                <Text style={styles.itemPrice}>16,000원</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.itemView} onPress={() => { alert("양념 우대갈비"); }}>
              <Image source={require('./양념우대갈비.jpg')} style={styles.itemImg}></Image>
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.itemName}>양념 우대갈비</Text>
                <Text style={styles.itemMsg}>소갈비를 12~15cm 정형하여 500g 단위로 나가는 최고급 갈비</Text>
                <Text style={styles.itemPrice}>19,000원</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.itemView} onPress={() => { alert("된장찌개"); }}>
              <Image source={require('./된장찌개.jpg')} style={styles.itemImg}></Image>
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.itemName}>된장찌개</Text>
                <Text style={styles.itemPrice}>6,000원</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ height: "6%" }}>
            <Text style={{ textAlign: 'center', fontSize: 22, color: 'black', fontWeight: 'bold' }}>최신리뷰</Text>
          </View>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: 5 }}>
          <View style={{ height: "6%" }}>
            <Text style={{ textAlign: 'center', fontSize: 18, color: 'black', fontWeight: 'bold' }}>공감가는 리뷰는 하트를 눌러주세요!</Text>
          </View>
          <Review></Review>
        </View>
      </ScrollView>
    )
  }
}

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
    borderBottomWidth: 5,
    paddingTop: "1.5%",
    flex: 1
  },
  contentView: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "column",
    height: 435
  },
  threeView: {
    flex: 1
  },
  fundButton: {
    width: "20%",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginLeft: "2.5%"
  },
  textTitle: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  root: {
    flex: 1,
    padding: "4%"
  },
  itemView: {
    width: '100%',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 4,
    padding: "2%",
    marginBottom: "4%"
  },
  itemImg: {
    width: "35%",
    height: 100,
    resizeMode: 'cover',
    marginRight: "2%"
  },
  itemName: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  itemMsg: {
    fontSize: 9,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red'
  }
})

export default P12;