import React, { useState } from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import FoodList from '../components/FoodList';
import Text from '../components/Text';

const FoodList2 = ({ item }) => {
  const [text, setText] = useState(item.text);

  return <Text value={text} onChangeText={(text) => setText(text)} />;
};

FoodList.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FoodList2;
