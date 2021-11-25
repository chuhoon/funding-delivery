import React, {Component} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, Alert} from 'react-native';

export default class Complete extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.textView}>
          <Text style={{fontSize: 38, fontWeight: 'bold', textAlign: 'center', marginBottom: '3%'}}>주문이 완료되었습니다!</Text>
          <Text style={{fontSize: 20, textAlign: 'center', marginBottom: '3%'}}>가게에서 주문을 접수 중입니다.</Text>
          <Text style={{fontSize: 15, textAlign: 'center', color: 'grey'}}>가게 사정에 따라 주문이 취소될 수 있습니다.</Text>
          <Text style={{fontSize: 15, textAlign: 'center', color: 'grey', marginBottom: '3%'}}>접수 완료 또는 취소 시 알람으로 알려드립니다.</Text>
          <Text style={{fontSize: 15, textAlign: 'center', color: 'grey'}}>주문 및 배달 상황은 주문내역에서</Text>
          <Text style={{fontSize: 15, textAlign: 'center', color: 'grey', marginBottom: '18%'}}>언제든지 확인하실 수 있습니다.</Text>
          <Image source={require('./배달.png')}></Image>
        </View>
          
        <View style={styles.buttonView1}>
          <TouchableOpacity style={[styles.button, {backgroundColor: '#46D2D2', marginBottom: '3%'}]}
            onPress={()=>{Alert.alert('주문내역페이지'); }}>
              <Text style={[styles.textTitle]}>주문내역 확인하기</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.buttonView2}>
          <TouchableOpacity style={[styles.button, {backgroundColor: '#46D2D2'}]}
            onPress={() => { this.props.navigation.navigate('Profile') }}>
              <Text style={[styles.textTitle]}>홈 화면으로 돌아가기</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textView: {
    flex:7,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonView1: {
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    marginBottom: '-7%'
  },
  buttonView2: {
    flex:1,
    justifyContent: 'center',
    alignItems:'center'
  },
  button: {
    width: "95%",
    height: "55%",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  textTitle: {
    fontSize: 18,
    color: 'white'
  }
});