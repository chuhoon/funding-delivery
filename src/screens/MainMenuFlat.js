import React from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import MainMenuCard from './MainMenuCard';
import Profile from './Profile';
import Icon from 'react-native-vector-icons/Ionicons'
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default class MainMenuFlat extends React.Component {
    state = {
        selected: null,
        data: [{ name: '맛집', logo: <Ionicons name="restaurant-outline" size={70} onPress={() => { }} /> },
        { name: '일반 배달', nav: "ChannelList", logo: <Ionicons name="rocket-outline" size={70} onPress={() => { }} /> },
        { name: '펀딩 배달', nav: "P16", logo: <Ionicons name="people-outline" size={70} onPress={() => { }} /> },
        { name: '카페/디저트', logo: <Ionicons name="cafe-outline" size={70} onPress={() => { }} /> },
        { name: '술집', logo: <Ionicons name="beer-outline" size={70} onPress={() => { }} /> },
        { name: '놀이/여가', logo: <Ionicons name="game-controller-outline" size={70} onPress={() => { }} /> }]

    }


    render() {


        return (
            <View style={styles.container}>

                <View style={styles.spaceAroundCenter}>
                    <FlatList
                        data={this.state.data}
                        keyExtractor={item => item}
                        extraData={this.state.selected}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => {
                            return (
                                <MainMenuCard
                                    onPress={() => this.setState({ selected: item })}
                                    selected={this.state.selected === item}
                                >
                                    <View style={{

                                        flex: 1,
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Text style={{
                                            color: this.state.selected === item ? "#fff" : "#000"
                                        }}>
                                            {item.logo}
                                        </Text>

                                        <Text style={{
                                            color: this.state.selected === item ? "#fff" : "#000",
                                            fontSize: 15,
                                            fontWeight: "bold",
                                        }}>{item.name}
                                        </Text>
                                    </View>

                                </MainMenuCard>
                            )
                        }
                        }
                    />

                </View>



            </View >


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    output: {
        flex: 1,
        marginTop: '7%',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    spaceAroundCenter: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
