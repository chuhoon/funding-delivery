import React, { Component } from 'react';
import { SearchBar } from 'react-native-elements';
import { StyleSheet } from 'react-native';

export default class Search extends Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar style={style.searchBox}
        placeholder="Type Here..."
        lightTheme
        round
        onChangeText={this.updateSearch}
        value={search}
        autoCorrect={false}
      />
    );
  }
}

const style = StyleSheet.create ({
    searchBox: {
        marginTop: 0,
        marginBottom: 0,
        paddingHorizontal: 150,
        height: 20
      }
})