import React, { Component } from 'react'
import { Platform, StatusBar, View } from 'react-native'
import { TabNavigator } from 'react-navigation'
// import Icon from 'react-native-vector-icons/Ionicons'
import { Container, Header, Title, Button, Left, Right, Body, Icon } from 'native-base';

import moduleRegistor from '../module'
const { Settings } = moduleRegistor.settings.module.component
const { Follow } = moduleRegistor.follow.module.component
const { Stamp } = moduleRegistor.stamp.module.component
const { Home } = moduleRegistor.home.module.component


const Tabbar = TabNavigator({
  Home: {
    screen: Home
  },
  Stamp: { 
    screen: Stamp
  },
  Follow: {
    screen: Follow
  },
  Settings: {
    screen: Settings
  }
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  lazy: true,
  tabBarOptions: {
    activeTintColor: '#FBA91E',
    inactiveTintColor: '#ffffff',
    labelStyle: {
      fontSize: Platform.select({ android: 10, ios: 12 }),
    },
    style: {
      backgroundColor: '#015F9C',
      // ...Platform.select({ android: { height: 65 } })
    },
    // android
    indicatorStyle: {
      // color: 'red',
      height: 0,
      backgroundColor: 'red'
    },
    ...Platform.select({
      android: {
        tabStyle: {
          height: 50
        },
        iconStyle: {
          marginTop: 5
        },
        labelStyle: {
          marginTop: 0
        },
        showIcon: true,
        upperCaseLabel: false
      }
    }),
  },
})

class WithStatusBar extends Component {
  render() {
    const { props } = this
    
    console.log('props', props)
    return <Tabbar />
    return (
      <View>
        <StatusBar
        // 102542, F87060, 119DA4, F05D5E
        />
        <Tabbar
          // tabBarOnPress={(...args) => {
          //   console.log('dsds', args)
          // }}
          navigation={props.navigation}
          {...props} />
      </View>
    )
  }
}

export default Tabbar