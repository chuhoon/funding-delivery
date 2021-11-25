import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Animated, View, Image, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import Search from './Search.js';


const Progress = ({ step, steps, height }) => {
    const [width, setWidth] = React.useState(0);
    const animatedValue = React.useRef(new Animated.Value(-1000)).current;
    const reactive = React.useRef(new Animated.Value(-1000)).current;

    React.useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: reactive,
            duration: 300,
            useNativeDriver: true,
        }).start();
    });

    React.useEffect(() => {
        reactive.setValue(-width + (width * step) / steps);
    }, [step, width])

    return (
        <View
            onLayout={e => {
                const newWidth = e.nativeEvent.layout.width;
                setWidth(newWidth);
            }}
            style={{
                height,
                backgroundColor: 'rgba(0,0,0,0.5)',
                borderRadius: height,
                overflow: 'hidden',
            }}
        >
            <Animated.View
                style={{
                    height,
                    width: '100%',
                    borderRadius: height,
                    backgroundColor: 'skyblue',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    transform: [
                        {
                            translateX: animatedValue
                        },
                    ],
                }}
            />
        </View>
    )
}

export default class P16 extends Component {

    constructor() {
        super();

        this.state = {
            datas: [{ name: "공탄", Progress: <View><StatusBar hidden /><Progress step={3.2} steps={10} height={5} /></View>, msg: "32%", img: require('./공탄.jpg'), com: "2021/05/31 16:00 마감 1/3", nav: "P17" },
            { name: "드래곤차이", Progress: <View><StatusBar hidden /><Progress step={8.8} steps={10} height={5} /></View>, msg: "88%", img: require('./드래곤차이.jpg'), com: "2021/05/31 16:00 마감 1/3", nav: "" },
            { name: "마벨리에", Progress: <View><StatusBar hidden /><Progress step={6.7} steps={10} height={5} /></View>, msg: "67%", img: require('./마벨리에.jpg'), com: "2021/05/31 16:00 마감 1/3", nav: "" },
            { name: "마초쉐프", Progress: <View><StatusBar hidden /><Progress step={6.7} steps={10} height={5} /></View>, msg: "67%", img: require('./마초쉐프.jpg'), com: "2021/05/31 16:00 마감 1/3", nav: "" },
            { name: "사이숲", Progress: <View><StatusBar hidden /><Progress step={4.5} steps={10} height={5} /></View>, msg: "45%", img: require('./사이숲.jpg'), com: "2021/05/31 16:00 마감 1/3", nav: "" },
            { name: "켄커피", Progress: <View><StatusBar hidden /><Progress step={4.5} steps={10} height={5} /></View>, msg: "45%", img: require('./켄커피.jpg'), com: "2021/05/31 16:00 마감 1/3", nav: "" },
            { name: "팔덕식당", Progress: <View><StatusBar hidden /><Progress step={6.7} steps={10} height={5} /></View>, msg: "67%", img: require('./팔덕식당.jpg'), com: "2021/05/31 16:00 마감 1/3", nav: "" },
            { name: "호랑이굴", Progress: <View><StatusBar hidden /><Progress step={6.7} steps={10} height={5} /></View>, msg: "67%", img: require('./호랑이굴.jpg'), com: "2021/05/31 16:00 마감 1/3", nav: "" }
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
                        <View>
                            <TouchableOpacity>
                                <FontAwesome5 name="user" size={24} color="black" style={{ paddingRight: 20, paddingLeft: 9 }} />
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
                <View style={styles.introView}>
                    <View style={styles.elem3}>
                        <Text style={{ fontSize: 33, fontWeight: 'bold', marginLeft: '3%', }}>
                            다 같이 먹자!
                        </Text>
                    </View>
                </View>

                <SafeAreaView style={{ flex: 1 }}>
                    <View style={styles.indexView}>
                        <Search></Search>
                    </View>
                </SafeAreaView>

                <View style={styles.menuView}>
                    <View style={styles.root}>
                        <FlatList
                            data={this.state.datas}
                            renderItem={this.renderItem}
                            keyExtractor={item => item.name}>
                        </FlatList>
                    </View>
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
                    <SafeAreaView style={styles.itemProgress}>{item.Progress}</SafeAreaView>
                    <Text style={styles.itemMsg}>{item.msg}</Text>
                    <Text style={styles.itemCom}>{item.com}</Text>
                </View>
            </TouchableOpacity>
        );
    }
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
    }
});
