import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Profile, Two, ChannelList, P16, P17, P13, P12,
  ChannelCreation, Channel, ChatList, Payment, Complete, Cart, Profile2, ReviewWrite, MenuAdd, SchoolFood, SchoolFood2
} from '../screens';
import Home from './Home';
import My from './My';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Main = () => {
  const theme = useContext(ThemeContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: theme.text,
        headerBackTitleVisible: false,
        cardStyle: { backgroundColor: theme.background },
      }}
    >
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      <Stack.Screen name="Two" component={Two} options={{ headerShown: false }} />
      <Stack.Screen name="ChannelList" component={ChannelList} options={{ headerShown: false }} />
      <Stack.Screen name="P16" component={P16} options={{ headerShown: false }} />
      <Stack.Screen name="P17" component={P17} options={{ headerShown: false }} />
      <Stack.Screen name="P13" component={P13} options={{ headerShown: false }} />
      <Stack.Screen name="P12" component={P12} options={{ headerShown: false }} />
      <Stack.Screen name="ChannelCreation" component={ChannelCreation} options={{ headerTitle: '펀딩 만들기' }} />
      <Stack.Screen name="Channel" component={Channel} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Payment" component={Payment} options={{ headerTitle: '주문하기' }} />
      <Stack.Screen name="Complete" component={Complete} options={{ headerTitle: '주문 완료' }} />
      <Stack.Screen name="Cart" component={Cart} options={{ headerTitle: '장바구니' }} />
      <Stack.Screen name="Profile2" component={Profile2} options={{ headerTitle: '프로필' }} />
      <Stack.Screen name="ReviewWrite" component={ReviewWrite} options={{ headerTitle: '리뷰 작성' }} />
      <Stack.Screen name="SchoolFood" component={SchoolFood} options={{ headerTitle: '학식 추가하기' }} />
      <Stack.Screen name="SchoolFood2" component={SchoolFood2} options={{ headerTitle: '학식' }} />
      <Stack.Screen name="MenuAdd" component={MenuAdd} options={{ headerTitle: '메뉴 추가' }} />
      <Stack.Screen name="My" component={My} />
    </Stack.Navigator>
  );
};

export default Main;