import React, { Component } from 'react'

export default class AppContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      store: {},    // will hold all of our data stores
      theme: null   // over-arching theme file for native-base
    }
  }

  render() {
    return null
  }
}