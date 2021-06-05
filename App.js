import React, { Component } from 'react'
import { Text, View,StatusBar } from 'react-native'
// import FlashMessage from 'react-native-flash-message'

import Header from './src/Component/Header'
import Routes from './src/Navigation/Routes'
import News from './src/Screen/News'

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
     
      <Routes/>
       {/* <FlashMessage position='top'/> */}
      </View>
    )
  }
}
