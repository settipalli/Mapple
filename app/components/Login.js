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
    super(props)
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
          <Icon style={{ color: '#fff' }} name='ios-person-outline' />
          <Input
            style={{ color: '#fff' }}
            placeholderText='you@something.com'
            placeholderStyle={{ color: '#fff' }}
            onChangeText={(email) => { this.updateEmail(email) }}
          />
        </InputGroup>
        <InputGroup style={{ marginBottom: 10 }} borderType='round'>
          <Icon style={{ color: '#fff' }} name='ios-unlock' />
          <Input
            style={{ color: '#fff' }}
            placeholderText='password'
            placeholderStyle={{ color: '#fff' }}
            secureTextEntry={true}
            onChangeText={(password) => { this.updatePassword(password) }}
          />
        </InputGroup>
        <Button rounded block style={{ marginBottom: 10}}
          onPress={this.signIn.bind(this)} >
          {Login}
        </Button>
      </View >
    )
  }
}