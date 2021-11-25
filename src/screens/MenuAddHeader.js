import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const Header = ({show}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>공탄의 메뉴</Text>
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.button}
                onPress={show}>
                <Ionicons name='ios-add' color='#FFFFFF' size={24} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom : 10,
        marginHorizontal : 16,
        flexDirection: 'row',
        borderBottomWidth:1,
        borderBottomColor:'#d2d6d5'
    },
    title: {
        color: '#212121',
        fontSize: 32,
        fontWeight: '600',
        marginBottom: 5,
    },
    button: {
        marginLeft: '55%',
        marginTop: '2%',
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: '#30e3c2',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Header 