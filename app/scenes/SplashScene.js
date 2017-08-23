import React, { Component } from 'react'
import { Image } from 'react-native'
import { View } from 'native-base'

export default class SplashScene extends Component {
  constructor(props) {
    super(props)
  }

  // over-ride react lifecycle code
  componentDidMount() {
    const { store } = this.props   // we used ES6 syntax to pull it out of our properties
    // take in an anonymous function and within it, we will use our navigator to navigate
    // away from the splash screen when the time is up
    setTimeout(() => {
      this.props.navigator.replace({ title: "Login", passProps: this.props })
    }, store.settings.SplashTime)
  }

  render() {
    const { settings } = this.props.store
    const { theme } = this.props
    return (
        <View style={{ flex: 1 }}>
          <Image style={{ flex: 1, width: null, height: null }}
            source={settings.SplashImg} />
        </View>
    )
  }
}