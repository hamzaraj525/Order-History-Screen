import React, {Component} from 'react';
import {Text, View} from 'react-native';

import {createAppContainer, createBottomNavigator} from 'react-navigation';
import {createMaterialBottomNavigator} from 'react-native-material-bottom-navigation';
import {Icon} from 'react-native-elements';

import Profile from './Profile';
import About from './About';

class Home extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 40}}> Home Screen</Text>
      </View>
    );
  }
}

const TabNavigator = createMaterialBottomNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLable: 'Home',
      activeColor: '#f0000',
      inactiveColor: '#000000',
      barStyle: {backgroundColor: '#67baf6'},
      tabBarIcon: () => (
        <View>
          <Icon name={'home'} size={25} style={{color: '#ff000'}} />
        </View>
      ),
    },
  },

  About: {
    screen: About,
    navigationOptions: {
      tabBarLable: 'About',
      activeColor: '#f0000',
      inactiveColor: '#000000',
      barStyle: {backgroundColor: '#67baf6'},
      tabBarIcon: () => (
        <View>
          <Icon name={'about'} size={25} style={{color: '#ff000'}} />
        </View>
      ),
    },
  },

  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLable: 'Profile',
      activeColor: '#f0000',
      inactiveColor: '#000000',
      barStyle: {backgroundColor: '#67baf6'},
      tabBarIcon: () => (
        <View>
          <Icon name={'person'} size={25} style={{color: '#ff000'}} />
        </View>
      ),
    },
  },
});

export default createAppContainer(TabNavigator);
