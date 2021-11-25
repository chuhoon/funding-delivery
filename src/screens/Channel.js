import React, {useState, useEffect, useLayoutEffect} from 'react';
import styled from 'styled-components/native';
import { createMessage, getCurrentUser, DB } from '../firebase';
import { GiftedChat, Send } from 'react-native-gifted-chat'
import { Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const Container = styled.View  `
    flex: 1;
    flex-direction: column;
    background-color: ${({theme}) => theme.background};
`;

const SendIcon = styled(Feather).attrs(({theme, text}) => ({
    name: 'send',
    size: 24,
    color: text ? theme.sendBtnActive : theme.sendBtnInactive,
}))``;

const SendButton = props => {
    return (
    <Send {...props}
    containerStyle={{
        width: 44,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 4,
        }}
        disabled = {!props.text}
    >
        <SendIcon text = {props.text} />
    </Send>
    );
};

const Channel = ({navigation, route}) => {
    const [messages, setMessages] = useState([]);
    const {uid, name, photo} = getCurrentUser();

    useLayoutEffect(() => {
        const chatScreenName = route.params.title || 'Channels';
        navigation.setOptions({
            headerTitle: chatScreenName,
            headerRight: () => chatScreenName === route.params.title && (
                <TouchableOpacity onPress = {() => {navigation.navigate('Cart')}}>
                    <Feather
                        name = "shopping-cart"
                        size = {26}
                        style = {{margin: 10}}
                    />
                </TouchableOpacity>
            )
        })
    }, [])

    useEffect(() => {
        const unsubscribe = DB.collection('channels').doc(route.params.id)
        .collection('messages').orderBy('createdAt', 'desc')
        .onSnapshot(snapshot => {
            const list = [];
            snapshot.forEach(doc => {
                list.push(doc.data())
            })
            setMessages(list);
        })
        return () => unsubscribe();
    }, [])

    const _handleMessageSend = async messageList => {
        const message = messageList[0];
        try{
            await createMessage({channelId: route.params.id, message})
        }catch(e){
            Alert.alert('Message Error', e.message);
        }
    }

    return(
        <Container>
            <GiftedChat
                placeholder = "Enter a message..."
                messages = {messages}
                user = {{_id: uid, name, avatar: photo}}
                onSend = {_handleMessageSend}
                renderSend = {props => <SendButton {...props} />}
                scrollToBottom={true}
                renderUsernameOnMessage={true}
                alwaysShowSend={true}
                multiline = {false}
            />
        </Container>
    );
};

export default Channel;