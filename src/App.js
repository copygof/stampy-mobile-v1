import React, { Component } from 'react'
import {
  // Text,
  View
} from 'react-native'
import {
  Container,
  Content,
  StyleProvider
} from 'native-base'
import getTheme from '../native-base-theme/components'
import { Provider } from 'react-redux'
import store from './store'
import BasicApp from './Router'

export default class App extends Component {                                                                
  render() {                                                                                                           
    return (                                                                                                           
      <StyleProvider style={getTheme()}>
        <Provider store={store}>
          <BasicApp />                                                                               
        </Provider>                                                                   
      </StyleProvider>                                                                                                 
    )                                                                                             
  }
}
// color schema
// https://coolors.co/015f9c-119da4-f05d5e-102542-f87060
// https://coolors.co/0263a8-fdd91b-c9cbcd-f58321-fba91e