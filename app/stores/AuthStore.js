import { observable, action } from 'mobx'
import firebase from 'firebase'

export default class AuthStore {
  @observable authUser = null // observale tells mobx that we should re-render the views when the authUser changes

  constructor() {
    firebase.auth().onAuthStateChanged(
      (user) => {
        this.authUser = user  
      }
    )
  }

  @action signIn({email, password}) { // action tells mobx that this method will have impact on the observables
    if (this.authUser) {
      // user is already signed in, return a Promise
      return Promise.resolve(this.authUser)
    }

    return firebase.auth().signInWithEmailAndPassword(email, password)  // returns a Promise - handle the promise in the caller where signin is called
  }
}