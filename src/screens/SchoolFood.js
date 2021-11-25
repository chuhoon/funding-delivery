import React, { useState, Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styled, { ThemeProvider } from 'styled-components/native';
import { StatusBar, Dimensions } from 'react-native';
import { theme } from '../components/theme';
import Input2 from '../components/Input2';
import FoodList from '../components/FoodList';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';
import { Agenda } from 'react-native-calendars';
import { Card } from 'react-native-elements/dist/card/Card';

const Container = styled.View`
  flex: 1;
  background-color: #8aeccd;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 10px;
`;

const Container2 = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`;

const SchoolFood = ({ navigation }) => {
  Date.prototype.format = function (f) {
    if (!this.valueOf()) return ' ';

    var weekName = [
      '일요일',
      '월요일',
      '화요일',
      '수요일',
      '목요일',
      '금요일',
      '토요일',
    ];
    var d = this;

    return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function ($1) {
      switch ($1) {
        case 'yyyy':
          return d.getFullYear();
        case 'yy':
          return (d.getFullYear() % 1000).zf(2);
        case 'MM':
          return (d.getMonth() + 1).zf(2);
        case 'dd':
          return d.getDate().zf(2);
        case 'E':
          return weekName[d.getDay()];
        case 'HH':
          return d.getHours().zf(2);
        case 'hh':
          return ((h = d.getHours() % 12) ? h : 12).zf(2);
        case 'mm':
          return d.getMinutes().zf(2);
        case 'ss':
          return d.getSeconds().zf(2);
        case 'a/p':
          return d.getHours() < 12 ? '오전' : '오후';
        default:
          return $1;
      }
    });
  };

  String.prototype.string = function (len) {
    var s = '',
      i = 0;
    while (i++ < len) {
      s += this;
    }
    return s;
  };
  String.prototype.zf = function (len) {
    return '0'.string(len - this.length) + this;
  };
  Number.prototype.zf = function (len) {
    return this.toString().zf(len);
  };

  const placeholder = '날짜를 입력해주세요';

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [text, onChangeText] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn('dateFormat: ', date.format('yyyy/MM/dd'));
    hideDatePicker();
    onChangeText(date.format('yyyy/MM/dd'));
  };

  const Title = styled.Text`
    font-size: 40px;
    font-weight: 600;
    color: ${({ theme }) => theme.main};
    width: 100%;
    align-items: flex-end;
    padding: 0 20px;
  `;

  const width = Dimensions.get('window').width;

  const List = styled.ScrollView`
    flex: 1;
    width: ${({ width }) => width - 40}px;
  `;

  const [tasks, setTasks] = useState({});

  const storeData = async (tasks) => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
      setTasks(tasks);
    } catch (e) {
      //
    }
  };

  const getData = async () => {
    const loadedData = await AsyncStorage.getItem('tasks');
    setTasks(JSON.parse(loadedData || '{}'));
  };

  const [newTask, setNewTask] = useState('');
  const addTask = () => {
    if (newTask.length < 1) {
      return;
    }
    const ID = Date.now().toString();
    const newTaskObject = {
      [ID]: { id: ID, text: newTask, completed: false },
    };
    setNewTask('');
    storeData({ ...tasks, ...newTaskObject });
  };

  const deleteTask = (id) => {
    const currentTasks = Object.assign({}, tasks);
    delete currentTasks[id];
    storeData(currentTasks);
  };

  const toggleTask = (id) => {
    const currentTasks = Object.assign({}, tasks);
    currentTasks[id]['completed'] = !currentTasks[id]['completed'];
    storeData(currentTasks);
  };

  const updateTask = (item) => {
    const currentTasks = Object.assign({}, tasks);
    currentTasks[item.id] = item;
    storeData(currentTasks);
  };

  const [isReady, setIsReady] = useState(false);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      marginBottom: 10,
    },
    textInput: {
      fontSize: 16,
      color: '#000000',
      height: 50,
      width: 300,
      borderColor: '#000000',
      borderWidth: 1,
      borderRadius: 12,
      padding: 10,
    },
  });

  const [items, setItems] = useState([]);

  const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  };

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = 0; i < 5; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 1; j < 6; j++) {
            items[strTime].push({
              name: ' #' + j,
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };

  const renderItem = (item) => {
    return (
      <TextInput
        style={[styles2.item, { height: item.height }]}
        onPress={() => Alert.alert(item.name)}
      >
        <Text>{item.name}</Text>
      </TextInput>
    );
  };

  const styles2 = StyleSheet.create({
    item: {
      backgroundColor: 'white',
      flex: 1,
      borderRadius: 5,
      padding: 10,
      marginRight: 10,
      marginTop: 17,
    },
  });

  return isReady ? (
    <KeyboardAwareScrollView extraScrollHeight={20}>
      <Container>
        <Text style={{ fontSize: 18, fontWeight: 'bold', margin: 4 }}>
          안양대학교 학생식당 메뉴
        </Text>
      </Container>
      {/* <View style={{ flex: 1 }}>
        <Agenda
          items={items}
          loadItemsForMonth={loadItems}
          selected={Date.now}
          renderItem={renderItem}
        />
      </View> */}
      <ThemeProvider theme={theme}>
        <Container2>
          <StatusBar
            barStyle="light-content"
            backgroundColor={theme.background}
          />
          <Input2
            placeholder="+ 식단을 추가하세요"
            value={newTask}
            onChangeText={(text) => setNewTask(text)}
            onSubmitEditing={addTask}
            onBlur={() => setNewTask('')}
          />
          <List width={width}>
            {Object.values(tasks)
              .reverse()
              .map((item) => (
                <FoodList
                  key={item.id}
                  item={item}
                  deleteTask={deleteTask}
                  toggleTask={toggleTask}
                  updateTask={updateTask}
                />
              ))}
          </List>
        </Container2>
      </ThemeProvider>
    </KeyboardAwareScrollView>
  ) : (
    <AppLoading
      startAsync={getData}
      onFinish={() => setIsReady(true)}
      onError={() => {}}
    />
  );
};

export default SchoolFood;
