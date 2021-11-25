import React, { Component } from 'react';
import {Image, Text, StyleSheet} from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Button, Icon} from 'native-base';

export default class Review extends Component {
    render() {
        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={{uri: 'https://steemitimages.com/u/anpigon/avatar'}} />
                        <Body>
                            <Text>최성근</Text>
                            <Text note>June 09, 2021</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image
                        source={require('./리뷰2.jpg')}
                        style={{height:350, width:null, flex:1}} />
                </CardItem>
                <CardItem style={{height:"2%"}}>
                    <Left>
                        <Button transparent>
                            <Icon name='ios-heart' style={{color:'black'}}/>
                        </Button>
                    </Left>
                </CardItem>
                <CardItem style={{height:"3%"}}>
                    <Text>좋아요 89개</Text>
                </CardItem>
                <CardItem>
                    <Text>
                        <Text style={{fontWeight:'bold', marginLeft:5}}>최성근</Text>
                        맛있는 소갈비집! 바쁜 와중에도 친절하고 세심하게 서빙해주셔서 좋았어요!
                    </Text>
                </CardItem>
            </Card>
        )

    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})