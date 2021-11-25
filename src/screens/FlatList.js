import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

export default class List extends Component {
    constructor() {
        super();

        this.state = {
            datas: [{ name: "공탄sd", message: "⭐4.71 리뷰:138", img: require('./공탄.jpg'), nav: "P12" },
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
            <View style={style.root}>
                <FlatList
                    data={this.state.datas}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.name}>
                </FlatList>
            </View>
        );
    }

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
    root: {
        flex: 1,
        padding: 16
    },
    itemView: {
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
