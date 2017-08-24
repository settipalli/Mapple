import React, { Component } from 'react'
import {
  Button,
  InputGroup,
  Input,
  Icon,
  View,
  Spinner
} from 'native-base'
import { observer } from 'mobx-react/native'

// @observer tells the Login class to be aware of changing data and re-render
// when the data changes.
@observer export default class Login extends Component {
  constructor(props) {
    this.state = {
      email: '',
      password: '',
      loading: null   // boolean
    }
  }

  updateEmail(email) { this.setState({ email }) }
  updatePassword(password) { this.setState({ password }) }

  signIn() {
    const { auth } = this.props.stores
    const { email, password } = this.state

    // crux of the sign-in method
    this.setState({ loading: true }, () => {
      auth.signIn({ email, password })
        .then(() => {
          this.props.navigator.replace({
            title: 'Match',
            passProps: this.props
          })
        })
    })
  }

  render() {
    const { loading } = this.state
    const { auth } = this.props.stores

    return (
      // build the Login View
      <View theme={this.props.theme} >
        <InputGroup style={{ marginBottom: 10 }} borderType='round'>
          <Icon style={{ color: '#fff' }} name='person-outline' />
          <Input
            style={{ color: '#fff' }}
            placeholder='you@something.com'
            placeholderTextColor={{ color: '#fff' }}
            onChangeText={(email) => { this.updateEmail(email) }}
          />
        </InputGroup>
        <InputGroup style={{ marginBottom: 10 }} borderType='round'>
          <Icon style={{ color: '#fff' }} name='lock-open ' />
          <Input
            style={{ color: '#fff' }}
            placeholder='password'
            placeholderTextColor={{ color: '#fff' }}
            secureTextEntry={true}
            onChangeText={(password) => { this.updatePassword(password) }}
          />
        </InputGroup>
        <Button rounded block style={{ marginBottom: 10px}}
          onPress={this.signIn.bind(this)} >
          {Login}
        </Button>
      </View >
    )
  }
}