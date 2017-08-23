import React, { Component } from 'react'
import { Drawer, View } from 'native-base'
import { Navigator } from 'react-native-deprecated-custom-components'

import SideMenu from './components/SideMenu'
import theme from './themes/theme'
import SettingsStore from './stores/SettingsStore'
import AuthStore from './stores/AuthStore'
import SplashScene from './scenes/SplashScene'

// instance of our settings store that would be passed around throught the app
const settings = new SettingsStore()
const authStore = new AuthStore()

export default class AppContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggled: false,
      // will hold all of our data stores
      store: {
        settings: settings,
        auth: authStore
      },
      theme: theme   // over-arching theme file for native-base
    }
  }

  // Drawer

  toggleDrawer() {
    this.state.toggled ? this._drawer.close() : this._drawer.open()
  }

  openDrawer() {
    this.setState({ toggled: true })
  }

  closeDrawer() {
    this.setState({ toggled: false })
  }


  // Navigator

  renderScene(route, navigator) {
    switch (route.title) {
      case 'Splash': {
        return <SplashScene {...route.passProps} navigator={navigator} />
      }
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
        type='displace'
        content={<SideMenu navigator={this._navigator} theme={this.state.theme} />}
        onClose={this.closeDrawer.bind(this)}
        onOpen={this.openDrawer.bind(this)}
        openDrawerOffset={0.2}
        panOpenMask={0.80}
        captureGestures='open'
      >
        <Navigator
          ref={(ref) => this._navigator = ref}
          configureScene={this.configureScene.bind(this)}
          renderScene={this.renderScene.bind(this)}
          initialRoute={{
            title: 'Splash',
            passProps: {
              store: this.state.store,
              toggleDrawer: this.toggleDrawer.bind(this),
              theme: this.state.theme
            }
          }}
        ></Navigator>
      </Drawer>
    )
  }
}