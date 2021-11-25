import React from 'react'
import { View, Text, StyleSheet,} from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import DeleteButton from './DeleteButton'

const MenuItem = ({
    title,
    remove
}) => {
    return (
        <Swipeable
                renderRightActions={() => <DeleteButton onPress={remove} />}>
            <View style={styles.container}>
                <View style={styles.menu}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </View>
        </Swipeable>
        
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: '#FFFFFF',
    },
    menu: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#30e3c2',
    },
    title: {
        fontSize: 16,
        color: '#424242'
    },
})

export default MenuItem