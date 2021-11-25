import React, { useContext, useState } from 'react';
import { UserContext } from '../contexts';
import styled from 'styled-components/native';
import { Button, Image, Input } from '../components';
import { getCurrentUser, updateUserInfo, signout } from '../firebase';
import { Alert } from 'react-native';
import { ProgressContext } from '../contexts';
import { ThemeContext } from 'styled-components/native';
import { NavigatorIOS } from 'react-native';

const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
    justify-content: center;
    align-items: center;
    padding: 0 20px;
`;

const Profile2 = ({ navigation, route }) => {
    const { spinner } = useContext(ProgressContext);
    const { setUser } = useContext(UserContext);
    const user = getCurrentUser();
    const theme = useContext(ThemeContext);

    const [photo, setPhoto] = useState(user.photo);

    const _handlePhotoChange = async url => {
        try {
            spinner.start();
            const photoURL = await updateUserInfo(url);
            setPhoto(photoURL);
        } catch (e) {
            Alert.alert('Photo Error', e.message);
        } finally {
            spinner.stop();
        }
    };

    return (
        <Container>
            <Image showButton url={photo} onChangePhoto={_handlePhotoChange} />
            <Input label="이름" value={user.name} disabled />
            <Input label="이메일" value={user.email} disabled />
            <Button title='로그아웃'
                onPress={async () => {
                    try {
                        spinner.start()
                        await signout();
                    } catch (e) {
                    } finally {
                        setUser({})
                        spinner.stop()
                        navigation.navigate("Signin");
                    }
                }
                }
                containerStyle={{
                    backgroundColor: theme.btnSignout
                }} />
        </Container>
    );
};

export default Profile2;