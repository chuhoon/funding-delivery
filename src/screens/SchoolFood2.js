import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styled, { ThemeProvider } from 'styled-components/native';
import { Dimensions } from 'react-native';
import { theme } from '../components/theme';
import FoodList2 from '../components/FoodList2';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';
import { MaterialIcons } from '@expo/vector-icons';

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

const SchoolFood2 = ({ navigation }) => {
  const Container = styled.View`
    flex: 1;
    background-color: #8aeccd;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    margin-bottom: 10px;
  `;

  const Container2 = styled.View`
    flex: 1;
    align-items: center;
    justify-content: flex-start;
  `;

  const Container3 = styled.View`
    justify-content: flex-start;
    padding-left: 40px;
    margin-bottom: 10px;
  `;

  const Container4 = styled.View`
    margin-top: 10px;
    margin-bottom: 20px;
    width: 100%;
    height: 1;
    background-color: black;
  `;

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

  const placeholder = '날짜를 선택하세요';

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

  navigation.setOptions({
    headerRight: () => (
      <MaterialIcons
        name="add"
        size={26}
        style={{ margin: 10 }}
        onPress={() => navigation.navigate('SchoolFood')}
      />
    ),
  });

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

  const [isReady, setIsReady] = useState(false);

  return isReady ? (
    <KeyboardAwareScrollView extraScrollHeight={20}>
      <Container>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            margin: 4,
          }}
        >
          안양대학교 학생식당 메뉴
        </Text>
      </Container>
      {/* <View style={styles.container}>
        <TouchableOpacity onPress={showDatePicker}>
          <TextInput
            pointerEvents="none"
            style={styles.textInput}
            placeholder={placeholder}
            placeholderTextColor="#000000"
            underlineColorAndroid="transparent"
            editable={false}
            value={text}
          />
          <DateTimePickerModal
            headerTextIOS={placeholder}
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </TouchableOpacity>
      </View> */}
      <ThemeProvider theme={theme}>
        <Container2>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              margin: 3,
              marginBottom: 5,
            }}
          >
            학생식당
          </Text>
        </Container2>
        <Container3>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
            }}
          >
            위치) 수리관 6층
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
            }}
          >
            이용시간) 점심 11:00~14:00 저녁 17:30~19:00
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
            }}
          >
            연락처) 010-1234-5678
          </Text>
        </Container3>
        <Container4 />
        <Container2>
          <List width={width}>
            {Object.values(tasks)
              .reverse()
              .map((item) => (
                <FoodList2 key={item.id} item={item} />
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

export default SchoolFood2;
