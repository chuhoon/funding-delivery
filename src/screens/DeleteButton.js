import React from 'react'
import {
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native'

const DeleteButton = ({onPress}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={styles.button}
        >
            <Text style={styles.text}>
                삭제
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: '1.7%',
        marginRight: '1%',
        width: 50,
        height: 50,
        backgroundColor: '#FE5746',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius : 10
    },
    text: {
        color: '#FFFFFF'
    }
})

export default DeleteButton