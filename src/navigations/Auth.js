import React, {useContext} from 'react';
import {ThemeConsumer, ThemeContext} from 'styled-components/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Signin, Signup, Profile} from '../screens';
import {MaterialIcons} from '@expo/vector-icons';

const Stack = createStackNavigator();

const Auth = () => {
    const theme = useContext(ThemeContext);
    return (
        <Stack.Navigator
            screenOptions = {{
                cardStyle: { backgroundColor: theme.background },
            }}>
            <Stack.Screen name = "Signin"
            component = {Signin}
            options = {{ headerShown: false}}
            />
            <Stack.Screen name = "Signup" component = {Signup}
            options ={{
                headerTitle: '회원가입',
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerTintColor: theme.text,
                headerLeft: ({onPress, tintColor}) => (
                <MaterialIcons
                    name = "keyboard-arrow-left"
                    size = {38}
                    color = {tintColor}
                    onPress = {onPress}
                />)
            }}
            />
            <Stack.Screen name = "Profile" component = {Profile}/>
        </Stack.Navigator>
    );
};

export default Auth;