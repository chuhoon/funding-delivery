import React from 'react';
import styled from 'styled-components/native';
import { Dimensions, useWindowDimensions } from 'react-native';
import PropTypes from 'prop-types';
import Input2 from './Input2';

const StyledText = styled.TextInput.attrs(({}) => ({}))`
  width: ${({ width }) => width - 40}px;
  height: 60px;
  margin: -10px 0;
  padding: 15px 20px;
  border-radius: 10px;
  font-size: 18px;
  background-color: white;
  color: black;
  font-weight: bold;
`;

const Text = ({ value }) => {
  // const width = Dimensions.get('window').width;
  const width = useWindowDimensions().width;
  return (
    <StyledText
      width={width}
      maxLength={50}
      autoCapitalize="none"
      autoCorrect={false}
      returnKeyType="done"
      keyboardAppearance="dark"
      value={value}
    />
  );
};

Input2.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
};

export default Text;
