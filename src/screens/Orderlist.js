import React, { useState, useEffect } from 'react';
import { SafeAreaView, Animated, View, Image, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import ReviewWrite from './ReviewWrite.js';

export default function Orderlist({ navigation }) {

    const item = [
        {
            name: "공탄",
            com: "2021/10/11 16:00 주문",
            img: 'https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210303_153%2F1614719061485JMdFY_JPEG%2FP20210106_185108308_5949A7D4-B2DE-49F9-A3E3-A0EB710D8C9B.'
        },
        {
            name: "롯데리아",
            com: "2021/09/11 15:20 주문",
            img: 'https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDAzMjVfNDgg%2FMDAxNTg1MTM0OTE1ODE0.IRrAXDc3BvrzF52W0VvLlwzsgW73EXv0jyUjPApG8o0g.ps0RWyFbs69SLtUJavPcEsVqL1daqMplISw4oVYAEVIg.JPEG.nanalm%2FIMG_7041'
        },
        {
            name: "서서갈비",
            com: "2021/08/11 12:10 주문",
            nav: '프롤레타리아',
            img: 'https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190105_223%2F1546679247485i0GIa_JPEG%2FSoBCkwlla4_bN2m_lcEdP0wG.jpg'
        },
        {
            name: "팔덕식당",
            com: "2021/07/13 15:23 주문",
            img: 'https://search.pstatic.net/common/?autoRotate=true&type=w278_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210809_260%2F1628472978690bKqWG_JPEG%2FNQbiyWsK6zX6_7A12QryStmg.jpg'
        },
        {
            name: "호랑이굴",
            com: "2021/06/11 09:20 주문",
            img: 'https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20201127_168%2F1606405834651DecLm_JPEG%2FflD8-bEcHzaq_9t6yZ_SIZAB.jpg'
        },
        {
            name: "차이차이",
            com: "2021/03/31 15:20 주문",
            img: 'https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20160930_80%2F1475221740847tv5cR_JPEG%2F176880567920103_0.jpeg'
        },
    ];

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.itemView} onPress={() => navigation.navigate('ReviewWrite', { name: item.name, img: item.img })}>
                <Image source={{ uri: item.img }} style={styles.itemImg}></Image>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <SafeAreaView style={styles.itemProgress}>{item.Progress}</SafeAreaView>
                    <Text style={styles.itemCom}>{item.com}</Text>
                </View>
            </TouchableOpacity >
        );
    }

    return (
        <View style={styles.container}>

            <View style={styles.menuView}>
                <View style={styles.root}>
                    <FlatList
                        data={item}
                        renderItem={renderItem}
                        keyExtractor={item => item.name}>
                    </FlatList>
                </View>
            </View>
        </View>

    );


}

const styles = StyleSheet.create({
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
    itemProgress: {
        width: '130%'
    },
    itemMsg: {
        fontSize: 12,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: 'skyblue'
    },
    itemCom: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    container: {
        flex: 1
    },

    introView: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#eee',
        borderBottomWidth: 0.5,
        paddingTop: 5,
        flex: 0.75
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
    elem3: {
        paddingLeft: 8,
        marginLeft: '-1%'
    }
});
