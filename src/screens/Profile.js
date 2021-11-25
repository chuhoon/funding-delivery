import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, ScrollView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import MainMenuFlat from './MainMenuFlat';
class Button extends Component {
    render() {
        return (
            <View style={{ flex: 1, height: 100, borderWidth: 0.3, justifyContent: 'center', alignItems: 'center' }}>
                <Icon size={35} name={this.props.iconName} color="#000000" />
                <Text style={{ marginTop: 5 }}>{this.props.name}</Text>
            </View>
        )
    }
}


class TwoPage extends Component {
    constructor() {
        super();

        this.state = {
            datas: [{ name: "공탄", message: "⭐4.71 리뷰:138", img: require('./공탄.jpg') },
            { name: "드래곤차이", message: "⭐4.55 리뷰:99", img: require('./드래곤차이.jpg') },
            { name: "마벨리에", message: "⭐4.5 리뷰:101", img: require('./마벨리에.jpg') },
            { name: "마초쉐프", message: "⭐4.49 리뷰:71", img: require('./마초쉐프.jpg') },
            { name: "사이숲", message: "⭐4.47 리뷰:86", img: require('./사이숲.jpg') },
            { name: "켄커피", message: "⭐4.45 리뷰:123", img: require('./켄커피.jpg') },
            { name: "팔덕식당", message: "⭐4.4 리뷰:230", img: require('./팔덕식당.jpg') },
            { name: "호랑이굴", message: "⭐4.38 리뷰:52", img: require('./호랑이굴.jpg') }
            ]
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.settingView}>
                    <View style={styles.elem1}>
                        <TouchableOpacity style={{ marginBottom: '25%' }}>
                            <Entypo name="menu" size={35} color="black" onPress={() => { this.props.navigation.navigate('Two') }} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.elem2}>
                        <TouchableOpacity style={{ marginBottom: '25%' }}>
                            <Entypo name="magnifying-glass" size={24} color="black" style={{ paddingRight: 7 }}
                                onPress={() => { this.props.navigation.navigate('') }} />
                        </TouchableOpacity >
                        <View style={{ borderLeftWidth: 1 }}>
                            <TouchableOpacity style={{ marginBottom: '25%' }}>
                                <FontAwesome5 name="user" size={24} color="black" style={{ paddingRight: 20, paddingLeft: 9 }}
                                    onPress={() => { this.props.navigation.navigate('My') }} />
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>

                <View style={styles.title}>
                    <Image
                        resizeMode='contain'
                        style={{ width: '160%', height: '180%', marginBottom: '24%', marginLeft: '5%' }}
                        source={require('./logo.png')}
                    />
                </View>

                <View style={styles.buttonGroup}>
                    <MainMenuFlat
                        onPress={() => { this.props.navigation.navigate('Profile') }}
                    ></MainMenuFlat>
                </View>

                <View style={styles.footer2}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#F4FFFF' }}>맛집아냥 제휴업체</Text>
                </View>

                <View style={styles.footer}>
                    <FlatList
                        data={this.state.datas}
                        horizontal={true}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.name}>
                    </FlatList>
                </View>

            </View>

        )
    }
    renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.itemView} onPress={() => { this.props.navigation.navigate(item.nav) }}>
                <Image source={item.img} style={styles.itemImg}></Image>
                <Text></Text>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text></Text>
                <Text style={styles.itemMsg}>{item.message}</Text>
            </TouchableOpacity>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderColor: 'white',
    },

    header: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'gray',
        flexDirection: 'row',

    },
    title: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    buttonGroup: {
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'column',
        borderColor: '#eee',
        borderBottomWidth: 0.5,
        paddingTop: 5,
        flex: 0.8,
        paddingBottom: 5,
        borderColor: 'lightgray',
        borderBottomWidth: 4,
        borderTopWidth: 4,
    },
    footer2: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1478FF',
    },

    footer: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFa',
    },

    settingView: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#eee',
        borderBottomWidth: 0.1,
        paddingTop: 5,
        flex: 1
    },
    elem1: {
        paddingLeft: 8,
        flex: 1,
        marginBottom: '10%',
        marginLeft: '-1%'
    },
    elem2: {
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        marginBottom: '10%',
        marginRight: '-3%'
    },
    itemView: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 4,
        padding: 8,
        marginBottom: 12
    },
    itemImg: {
        width: 150,
        height: '55%',
        resizeMode: 'cover',
        marginRight: 8
    },
    itemName: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    itemMsg: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 12,
        fontWeight: 'bold'
    }

});

export default TwoPage;