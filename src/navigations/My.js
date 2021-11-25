import React, { useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ChatList, Profile, Profile2 } from '../screens';
import { MaterialIcons } from '@expo/vector-icons';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Orderlist from '../screens/Orderlist';

const TabIcon = ({ name, focused }) => {
    const theme = useContext(ThemeContext);
    return <MaterialIcons name={name} size={26}
        color={focused ? theme.tabBtnActive : theme.tabBtnInactive}
    />
}

const Tab = createBottomTabNavigator();

const My = ({ navigation, route }) => {
    useEffect(() => {
        const screenName = getFocusedRouteNameFromRoute(route) || '주문 내역';
        navigation.setOptions({
            headerTitle: screenName,

        })
    });
    return (
        <Tab.Navigator>

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
            <Tab.Screen name="주문 내역"
                component={Orderlist}
                options={{
                    tabBarIcon: ({ focused }) =>
                        TabIcon({
                            name: focused ? 'reorder' : 'reorder',
                            focused,
                        }),
                }}
            />

            <Tab.Screen name="펀딩 채팅방"
                component={ChatList}
                options={{
                    tabBarIcon: ({ focused }) =>
                        TabIcon({
                            name: focused ? 'reorder' : 'reorder',
                            focused,
                        }),
                }}
            />

        </Tab.Navigator>
    );
};

export default My;