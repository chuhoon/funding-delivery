import React, { useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ChatList, Profile2 } from '../screens';
import { MaterialIcons } from '@expo/vector-icons';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const TabIcon = ({ name, focused }) => {
    const theme = useContext(ThemeContext);
    return <MaterialIcons name={name} size={26}
        color={focused ? theme.tabBtnActive : theme.tabBtnInactive}
    />
}

const Tab = createBottomTabNavigator();

const Home = ({ navigation, route }) => {
    useEffect(() => {
        const screenName = getFocusedRouteNameFromRoute(route) || '펀딩 채팅방';
        navigation.setOptions({
            headerTitle: screenName,
            headerRight: () => screenName === '펀딩 채팅방' && (
                <MaterialIcons
                    name="add"
                    size={26}
                    style={{ margin: 10 }}
                    onPress={() => navigation.navigate('ChannelCreation')}
                />
            )
        })
    });
    return (
        <Tab.Navigator>
            <Tab.Screen name="펀딩 채팅방"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) =>
                        TabIcon({
                            name: focused ? 'reorder' : 'reorder',
                            focused,
                        }),
                }}
            />
            <Tab.Screen name="프로필"
                component={Profile2}
                options={{
                    tabBarIcon: ({ focused }) =>
                        TabIcon({
                            name: focused ? 'person' : 'person-outline',
                            focused,
                        }),
                }}
            />
        </Tab.Navigator>
    );
};

export default Home;