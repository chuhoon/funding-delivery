import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Card from './Card';

export default class Cardflat extends React.Component {
    state = {
        selected: null,
        data: ['신용카드', '가상계좌', '계좌이체', '휴대폰결제', '토스', '카카오페이', '네이버페이', '기타결제수단', '안양페이']
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
                        renderItem={({ item }) => {
                            return (
                                <Card
                                    onPress={() => this.setState({ selected: item })}
                                    selected={this.state.selected === item}
                                >
                                    <Text style={{ color: this.state.selected === item ? "#fff" : "#000", fontSize: 15, fontWeight: "bold" }}>
                                        {item}
                                    </Text>

                                </Card>
                            )
                        }
                        }
                    />

                </View>

                <View style={styles.output}>
                    <Text style={{ color: this.state.selected === this.state.item ? "#fff" : "#46BD7B", fontSize: 20, fontWeight: "bold" }}>{this.state.selected}</Text>
                    <Text style={{ color: this.state.selected === this.state.item ? "#fff" : "black", fontSize: 20 }}>를 선택하셨습니다.</Text>
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
