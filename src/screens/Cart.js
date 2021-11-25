import React, { Component, useState } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome } from '@expo/vector-icons';

export default function Cart({ navigation }) {

    const [dataCart, setDataCart] = useState([]);
    const [deliv, setDeliv] = useState(0);

    componentDidMount = () => {
        AsyncStorage.getItem('cart').then((cart) => {
            if (cart !== null) {
                const cartfood = JSON.parse(cart)
                setDataCart({ dataCart: cartfood })
            }
        })
            .catch((err) => {
                alert(err)
            })
    }




    const onChangeQual = (i, type) => {
        const dataCar = dataCart;
        let cantd = dataCar[i].quantity;

        if (type) {
            cantd = cantd + 1;
            dataCar[i].quantity = cantd
            setDataCart({ dataCart: dataCar })
        }
        else if (type == false && cantd >= 2) {
            cantd = cantd - 1;
            dataCar[i].quantity = cantd
            setDataCart({ dataCart: dataCar })
        }
        else if (type == false && cantd == 1) {
            dataCar.splice(i, 1)
            setDataCart({ dataCart: dataCar })
        }
    }

    const onDelete = (i) => {
        const dataCar = dataCart
        dataCar.splice(i, 1)
        setDataCart({ dataCart: dataCar })
    }

    const sumTotal = () => {
        var total = 0;
        const cart = dataCart

        for (var i = 0; i < cart.length; i++) {
            total += (cart[i].price * cart[i].quantity)
        }
        return total;
    }
    return (

        <ScrollView style={styles.container}>
            <View style={styles.cartView}>
                <View style={{ borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.2)' }}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold' }}>공탄</Text>
                </View>
                {
                    dataCart.map((item, i) => {
                        return (
                            <View style={styles.card}>
                                <View style={{ flex: 6, flexDirection: 'row', marginBottom: '5%' }}>
                                    <View style={styles.image}>
                                        <Image source={item.food.img} style={{ width: '100%', height: '100%' }} />
                                    </View>
                                    <View style={styles.titleSec}>
                                        <View style={styles.info}>
                                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.food.name}</Text>
                                            <Text style={{ fontSize: 10, color: 'grey' }}>{item.food.msg}</Text>
                                        </View>
                                        <View style={styles.actions}>
                                            <TouchableOpacity onPress={() => onChangeQual(i, false)}>
                                                <Text style={{ fontSize: 24 }}>-</Text>
                                            </TouchableOpacity>
                                            <Text>{item.quantity}</Text>
                                            <TouchableOpacity onPress={() => onChangeQual(i, true)}>
                                                <Text style={{ fontSize: 20, marginBottom: '2%' }}>+</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flex: 4, alignItems: 'flex-end', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.price * item.quantity}원</Text>
                                    <View style={styles.delete}>
                                        <TouchableOpacity onPress={() => onDelete(i)}>
                                            <FontAwesome name="trash-o" size={28} color='#46D2D2' />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        )
                    })
                }
                <View style={{ marginTop: '3%' }}>
                    <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('P17') }}>
                        <Text style={styles.textTitle}>+ 더 담으러 가기</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.totalSec}>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>합계</Text>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '3%', marginBottom: '2%' }}>
                    <Text style={{ fontSize: 16 }}>주문금액</Text>
                    <View style={styles.divider} />
                    <Text style={{ fontSize: 16 }}>{sumTotal()}원</Text>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '1%', marginBottom: '3%' }}>
                    <Text style={{ fontSize: 16 }}>배달료</Text>
                    <View style={styles.divider} />
                    <Text style={{ fontSize: 16 }}>{deliv}원</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', borderTopWidth: 1, borderColor: 'rgba(0,0,0,0.2)' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: '1%' }}>{sumTotal() + deliv}원</Text>
                </View>
            </View>

            <View style={styles.couponSec}>
                <TextInput placeholder={'쿠폰 번호를 입력하세요.'} style={{ height: 50 }} />
                <TouchableOpacity>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#46D2D2' }}>적용하기</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.button2} onPress={() => { navigation.navigate('Payment', { deliv: deliv, total: sumTotal(), sumtotal: sumTotal() + deliv }) }}>
                    <Text style={styles.textTitle2}>배달 주문하기</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gainsboro'
    },
    cartView: {
        flex: 5,
        marginHorizontal: '1%',
        marginTop: '10%',
        paddingHorizontal: '2%',
        paddingVertical: '3%',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        backgroundColor: 'white'
    },
    totalSec: {
        flex: 2,
        marginHorizontal: '1%',
        marginTop: '3%',
        paddingHorizontal: '2%',
        paddingVertical: '3%',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        backgroundColor: 'white'
    },
    divider: {
        height: '1%',
        borderColor: '#dddddd',
        borderWidth: StyleSheet.hairlineWidth,
        flex: 1,
        marginHorizontal: '5%',
        marginTop: '1%'
    },
    couponSec: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 50,
        borderColor: 'rgba(0,0,0,0.15)',
        borderStyle: 'solid',
        borderWidth: 1,
        paddingHorizontal: '5%',
        marginTop: '5%',
        marginHorizontal: '1%',
        backgroundColor: 'white'
    },
    placeholder: {
        opacity: 0.6,
        color: '#707070',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 32,
        flex: 1
    },
    buttonView: {
        flex: 1,
        marginHorizontal: '1%',
        marginTop: '5%'
    },
    button: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#46D2D2'
    },
    button2: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#46D2D2',
        borderRadius: 10
    },
    textTitle2: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    card: {
        flex: 1,
        marginTop: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)'
    },
    image: {
        width: '60%',
        height: 120,
        backgroundColor: '#ffffff'
    },
    titleSec: {
        flex: 1,
        marginLeft: '5%',
        justifyContent: 'space-between'
    },
    info: {
        width: '125%'
    },
    actions: {
        width: '175%',
        height: '30%',
        borderRadius: 20,
        backgroundColor: 'rgba(0,0,0,0.06)',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    delete: {
        width: '40%',
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})