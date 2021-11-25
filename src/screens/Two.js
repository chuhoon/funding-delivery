import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'


class OnePage extends Component {


    // RN에서 ListView 용도의 컴포넌트
    // 1. FlatList
    // 2. SectionList

    constructor() {
        super();

        this.state = {
            // 리스트에 보여줄 대량의 데이터
            datas: ["aaa", "bbb", "ccc", "ddd"],

            datas2: [
                { key: "0", data: "aaa" },
                { key: "1", data: "bbb" },
                { key: "2", data: "ccc" },
                { key: "3", data: "ddd" }

            ],

            datas3: [
                { name: "오늘의학식", message: "학생식당 식단정보", img: require('./rice.jpg'), nav: 'SchoolFood2', },
                { name: "먹어야산다", message: "밥집,요리,레스토랑,도시락", img: require('./치킨.jpg'), nav: "ChannelList" },
                { name: "부어라마셔", message: "술집,호프,주점,바", img: require('./맥주.jpg'), nav: "" },
                { name: "달콤쌉쌀해", message: "카페,디저트,제과점,음료", img: require('./케이크.jpg'), nav: "" },
                { name: "다같이놀자", message: "PC방,만화방,노래방,당구장,오락실,극장", img: require('./게임기.jpg'), nav: "" },
                { name: "다같이먹자", message: "혼합 배달, 메신저 기능, 펀딩 시스템", img: require('./모임.jpg'), nav: "P16" },
                { name: "추후메뉴추가1", message: "추가될 카테고리를 기대하세요!", img: require('./준비중.png'), nav: "" },
                { name: "추후메뉴추가2", message: "추가될 카테고리를 기대하세요!", img: require('./준비중.png'), nav: "" },
            ],


        };
    }

    render() {
        return (
            <View style={style.root}>
                <Icon.Button style={style.titleText3} name="close-outline" size={40} color="black" backgroundColor='##F6F6F6'
                    onPress={() => { this.props.navigation.navigate('Profile') }}
                />
                <Text style={style.titleText}>맛집아냥 </Text>
                <Text style={style.titleText2}>다양한 메뉴를 클릭해보세요.</Text>

                <FlatList
                    data={this.state.datas3}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.name}>
                </FlatList>
            </View>
        );
    }//render method ..

    renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={style.itemView} onPress={() => { this.props.navigation.navigate(item.nav) }}>
                <Image source={item.img} style={style.itemImg}></Image>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={style.itemName}>{item.name}</Text>
                    <Text style={style.itemMsg}>{item.message}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}



const style = StyleSheet.create({
    root: { flex: 1, padding: 16, backgroundColor: 'white' },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'left',
        backgroundColor: 'white'
    },

    titleText2: {
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'left',
        paddingBottom: 16,
        backgroundColor: 'white'
    },

    titleText3: {
        padding: 0,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: 'white',
    },
    itemView: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 4,
        padding: 8,
        marginBottom: 12,
        backgroundColor: 'white'
    },
    itemImg: {
        width: 120,
        height: 100,
        resizeMode: 'cover',
        marginRight: 8,
        backgroundColor: 'white'
    },
    itemName: {
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: 'white'
    },
    itemMsg: {
        fontSize: 16,
        fontWeight: 'bold',
        backgroundColor: 'white'
    },

});

export default OnePage;