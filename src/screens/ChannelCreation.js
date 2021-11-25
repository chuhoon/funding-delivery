import React, {useState, useRef, useEffect, useContext, Component} from 'react';
import styled from 'styled-components/native';
import {Button, Input, ErrorMessage} from '../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ProgressContext, UserContext} from '../contexts';
import {createChannel, createPeople} from '../firebase';
import { Alert, StyleSheet, Text, View, TextInput, AppRegistry, TouchableOpacity  } from 'react-native';
import CustomSlider from './CustomSlider';
import CustomSlider2 from './CustomSlider2';
import Slider from '@react-native-community/slider';
import Textinput from './Textinput';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Left } from 'native-base';

const Container = styled.View  `
    flex: 1;
    background-color: ${({theme}) => theme.background};
    justify-content: center;
    align-items: center;
    padding: 0 20px;
`;

const ChannelCreation = ({navigation}) => {
    const {spinner} = useContext(ProgressContext);

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [myValue, setMyValue] = useState(0);
    const [paidperson2] = useState(0);
    const [finishtime1, setfinishTime1] = useState(0);
    const [finishtime2, setfinishTime2] = useState(0);

    var time1;

    const refDesc = useRef(null);

    useEffect(() => {
        setDisabled(!(title && !errorMessage));
    }, [title, errorMessage]);

    const _handelTitleChange = title => {
        setTitle(title);
        setErrorMessage(title.trim() ? '' : '채팅방 이름을 입력해주세요')
    };

    const _handleDescChange = desc => {
        setDesc(desc);
        setErrorMessage(title.trim() ? '' : '채팅방 이름을 입력해주세요')
    };

    const _handleCreateBtnPress = async () => {
        try{
            spinner.start();
            var id = await createChannel({
                title: title.trim(),
                desc: desc.trim(),
                myValue: myValue,
                paidperson2: paidperson2,
                finishtime1: finishtime1,
                finishtime2: finishtime2,
            });
            navigation.replace('Channel', {id, title, myValue, paidperson2, finishtime1, finishtime2});
        }catch(e){
            Alert.alert('Creation Error', e.message);
        }finally{
            spinner.stop();
        }
    };

    return(
        <KeyboardAwareScrollView
            extraScrollHeight = {20}
        >
            <Container>
                <Input
                    label = "채팅방 이름"
                    value = {title}
                    onChangeText = {_handelTitleChange}
                    onSubmitEditing = {() => refDesc.current.focus()}
                    onBlur = {() => setTitle(title.trim())}
                    placeholder = "채팅방 이름"
                    returnKeyType = "next"
                    maxLength = {20}    
                />
                <Input ref = {refDesc}
                    label = "펀딩 장소 입력"
                    value = {desc}
                    onChangeText = {_handleDescChange}
                    onSubmitEditing = {_handleCreateBtnPress}
                    onBlur = {() => setDesc(desc.trim())}
                    placeholder = "펀딩 장소 입력"
                    returnKeyType = "done"
                    maxLength = {40}   
                />
                <Text style={{ 
                    fontSize: 14,
                    fontWeight: '600',
                    color: '#a6a6a6',
                    marginBottom: 6,
                    marginTop: 10,
                    marginRight: '75%',
                    }} >
                        펀딩 마감 시간
                </Text>
                <View>
                    <Slider
                    style={{ height: 20, width: 360 }}
                    value={finishtime1}
                    onValueChange={(value) => setfinishTime1(value)}
                    minimumValue={0}
                    maximumValue={24}
                    thumbTintColor="gold"
                    maximumTrackTintColor='black'
                    minimumTrackTintColor='red'
                    step={1}
                    onSubmitEditing = {_handleCreateBtnPress}
                    />
                    <Slider
                        style={{
                            height: 20, width: 360,
                            paddingBottom: 35,
                        }}
                        value2={finishtime2}
                        onValueChange={(value2) => setfinishTime2(value2)}
                        minimumValue={0}
                        maximumValue={50}
                        thumbTintColor="gold"
                        maximumTrackTintColor='black'
                        minimumTrackTintColor='red'
                        step={10}
                        onSubmitEditing = {_handleCreateBtnPress}
                    />
                    <View style={styles.slid}>
                        <Text>{finishtime1 >= 13 ? time1 = '오후' : time1 = '오전'}</Text>
                        <Text>  {finishtime1 >= 13 ? finishtime1 - 12 : finishtime1}시 {finishtime2}분</Text>
                    </View>
                </View>
                <Text style={{ 
                    fontSize: 14,
                    fontWeight: '600',
                    color: '#a6a6a6',
                    marginBottom: 6,
                    marginTop: 10,
                    marginRight: '83%',
                    }} >
                        식사 시간
                </Text>
                <CustomSlider2></CustomSlider2>
                <Text style={{ 
                    fontSize: 14,
                    fontWeight: '600',
                    color: '#a6a6a6',
                    marginBottom: 6,
                    marginTop: 10,
                    marginRight: '82%',
                    }} >
                        결제인원 수
                </Text>
                
                <View>
                    <Slider
                        style={{ height: 40, width: 360 }}
                        value={myValue}
                        onValueChange={(value) => setMyValue(value)}
                        minimumValue={0}
                        maximumValue={24}
                        thumbTintColor="gold"
                        maximumTrackTintColor='black'
                        minimumTrackTintColor='red'
                        step={1}
                        onSubmitEditing = {_handleCreateBtnPress}
                    />
                    <Text> {myValue}명</Text>
                </View>

                <ErrorMessage message = {errorMessage} />
                <Button
                    title = "채팅방 만들기"
                    disabled = {disabled}
                    onPress = {_handleCreateBtnPress}
                    containerStyle = {{backgroundColor: 'yellow'}}
                    textStyle= {{color: 'black'}}
                />
            </Container>
        </KeyboardAwareScrollView>
    );
};

export default ChannelCreation;

const styles = StyleSheet.create({
    slid: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        width: 350,
        height: 40,
        backgroundColor: 'ivory',
    }

});