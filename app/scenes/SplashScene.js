import React, { Component } from 'react'
import { Image } from 'react-native'
import { View } from 'native-base'

export default class SplashScene extends Component {
  constructor(props) {
    super(props)
  }

  // over-ride react lifecycle code
  componentDidMount() {
    const { stores } = this.props   // we used ES6 syntax to pull it out of our properties
    // take in an anonymous function and within it, we will use our navigator to navigate
    // away from the splash screen when the time is up
    setTimeout(() => {
      this.props.navigator.replace({ title: "Login", passProps:this.props})
    }, stores.settings.SplashTime)
  }

  render() {
    const { settings } = this.props.stores  // we used ES6 syntax to pull out 'settings' object from within 'this.props.store'
    <View style={{flex:1}}>
      <Image style={{flex:1, width:null, height:null}} source={settings.SplashImg} />
    </View>
  }
}