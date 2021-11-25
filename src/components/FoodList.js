import React, { useState } from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import IconButton from './IconButton';
import { icons } from './icons';
import Input2 from '../components/Input2';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #8aeccd;
  border-radius: 10px;
  padding: 5px;
  margin: 3px 0;
`;

const Contents = styled.Text`
  flex: 1;
  font-size: 24px;
  color: ${({ theme, completed }) => (completed ? theme.done : theme.text)};
  margin-left: 10px;
`;

const FoodList = ({ item, deleteTask, toggleTask, updateTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(item.text);

  const _onSubmit = () => {
    if (isEditing) {
      const updatedItem = Object.assign({}, item);
      updatedItem['text'] = text;
      setIsEditing(false);
      updateTask(updatedItem);
    }
  };

  return isEditing ? (
    <Input2
      value={text}
      onChangeText={(text) => setText(text)}
      onSubmitEditing={_onSubmit}
      onBlur={() => {
        setText(item.text);
        setIsEditing(false);
      }}
    />
  ) : (
    <Container>
      <Contents completed={item.completed}>{item.text}</Contents>
      {item.completed || (
        <IconButton icon={icons.edit} onPress={() => setIsEditing(true)} />
      )}
      <IconButton icon={icons.delete} item={item} onPress={deleteTask} />
    </Container>
  );
};

FoodList.propTypes = {
  item: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired,
  toggleTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
};

export default FoodList;
