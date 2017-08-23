import firebase from 'firebase'
import MobxFirebaseStore from 'mobx-firebase-store'

import { FirebaseConfig } from '../configs/firebase.config'

// let us create our first mobx-firebase store
export default class SettingsStore extends MobxFirebaseStore {
  // one of the foremost responsibilities of this store is to initialize our firebase-sdk
  constructor() {
    firebase.initializeApp(FirebaseConfig)

    // initialize the mobx-firebase store that we inherited from, pass in the reference to our firebase
    super(firebase.database().ref())

    // now let us create our SettingsStore data that we would like to pass around to other parts of our application
    this.splashTime = 3000  // 5000 milliseconds = 5 seconds
    this.splashImg = require('../../images/Splash.jpg')
  }

  // accessors
  get SplashTime() {
    return this.splashTime
  }

  get SplashImg() {
    return this.splashImg
  }
}