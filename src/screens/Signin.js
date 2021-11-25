import React, {useContext, useState, useRef, useEffect} from 'react';
import {ThemeContext} from 'styled-components/native';
import styled from 'styled-components/native';
import {Button, Image, Input, ErrorMessage} from '../components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { signin } from '../firebase';
import { Alert } from 'react-native';
import {validateEmail, removeWhitespace} from '../utils';
import {UserContext, ProgressContext} from '../contexts';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.background};
    padding: 0 20px;
    padding-top: ${({insets: {top}}) => top}px;
    padding-bottom: ${({insets: {bottom}}) => bottom}px;
`;

const LOGO = 'https://firebasestorage.googleapis.com/v0/b/fund-project-1c2e3.appspot.com/o/logo.png?alt=media';

const Signin = ({navigation}) => {
    const insets = useSafeAreaInsets();
    const theme = useContext(ThemeContext);
    const {setUser} = useContext(UserContext);
    const {spinner} = useContext(ProgressContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [disabled, setDisabled] = useState(true);
    const refPassword = useRef(null);

    useEffect(() => {
        setDisabled(!(email && password && !errorMessage));
      }, [email, password, errorMessage]);

const _handleEmailChange = email => {
    const changedEmail = removeWhitespace(email);
    setEmail(changedEmail);
    setErrorMessage(
        validateEmail(changedEmail) ? '' : '이메일을 확인하세요.'
    );
};
const _handlePasswordChange = password => {
    setPassword(removeWhitespace(password));
};

const _handleSigninBtnPress = async () => {
    try {
        spinner.start();
        const user = await signin({email, password});
        setUser(user);
    } catch (e) {
        Alert.alert('로그인 오류', e.message);
    } finally{
        spinner.stop();
    }
};

return(
    <KeyboardAwareScrollView
        extraScrollHeight={20}
        contentContainerStyle={{ flex: 1}}
    >
    <Container insets = {insets}>
        <Image url={LOGO} />
        <Input
            label = "Email"
            placeholder = "Email"
            returnKeyType = "next"
            value = {email}
            onChangeText = {_handleEmailChange}
            onSubmitEditing = {() => refPassword.current.focus()}
        />
        <Input
            ref = {refPassword}
            label = "Password"
            placeholder = "Password"
            returnKeyType = "done"
            value = {password}
            onChangeText = {_handlePasswordChange}
            isPassword = {true}
            onSubmitEditing = {_handleSigninBtnPress}
        />
        <ErrorMessage message={errorMessage} />
        <Button title="로그인" onPress={_handleSigninBtnPress} disabled = {disabled}/>
        <Button
            title="회원가입"
            onPress={() => navigation.navigate('Signup')}
            containerStyle = {{marginTop: 0, backgroundColor: 'transparent'}}
            textStyle={{color: theme.btnTextLink, fontSize: 18}}
        />
        <Button
            title="아이디/비밀번호를 모르겠어요!"
            onPress={() => navigation.navigate('IdPw')}
            containerStyle = {{marginTop: 0, backgroundColor: 'transparent'}}
            textStyle={{color: theme.btnTextLink, fontSize: 12}}
        />
        </Container>
        </KeyboardAwareScrollView>
    );
};

export default Signin;