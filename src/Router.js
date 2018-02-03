import { StackNavigator } from 'react-navigation'
import React from 'react'
import { Button } from 'react-native'
import _ from 'lodash'

import moduleRegistor from './module'
import Home from './page/Home'

const combindRoute = {}
// combind route with page from module
Object.keys(moduleRegistor)
.map(key => moduleRegistor[key].module)
.map(({ page }) => {
  if (!_.isEmpty(page)) {
    Object.keys(page)
    .map(pageName => {
      combindRoute[pageName] = {
        screen: page[pageName].page,
        ...page[pageName].options
      }
    })
  }
})


const BasicApp = StackNavigator({
  // ...combindRoute,
  Home: {
    screen: Home
  }
})

export default BasicApp
