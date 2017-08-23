import React, { Component } from 'react'
import { Drawer, View } from 'native-base'
import { Navigator } from 'react-native-deprecated-custom-components'

export default class AppContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggled: false,
      store: {},    // will hold all of our data stores
      theme: null   // over-arching theme file for native-base
    }
  }

  // Drawer

  toggleDrawer() {
    this.state.toggled ? this._drawer.close() : this._drawer.open()
  }

  openDrawer() {
    this.setState({toggled: true})
  }

  closeDrawer() {
    this.setState({toggled: false})
  }


  // Navigator

  renderScene(route, navigator) {
    switch(route) {
      default: {
        return null
      }
    }
  }

  configureScene(route, routeStack) {
    // handles how are scenes bought into the view
    return Navigator.SceneConfigs.PushFromRight   // bring in the scene from right
  }

  render() {
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        type="displace"
        content={<View style={{backgroundColor: "#000", height: 1000}} />}
        onClose={this.closeDrawer.bind(this)}
        onOpen={this.openDrawer.bind(this)}
        openDrawerOffset={0.2}
        panOpenMask={0.80}
        captureGestures="open"
      >
        <Navigator
          ref={(ref) => this._navigator = ref}
          configureScene = {this.configureScene.bind(this)}
          renderScene = {this.renderScene.bind(this )}
        ></Navigator>
      </Drawer>
    )
  }
}