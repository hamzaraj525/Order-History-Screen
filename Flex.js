import React, {Component} from 'react';
import {View, Text, ImageBackground, Button} from 'react-native';

export default class Flex extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: 'gold',
            width: 100,
            height: 100,
          }}></View>

        <View
          style={{
            backgroundColor: 'red',
            width: 100,
            height: 100,
          }}
        />
        <View
          style={{
            backgroundColor: 'blue',
            width: 100,
            height: 100,
          }}
        />
      </View>
    );
  }
}
