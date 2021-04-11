import firebase from 'firebase'
import 'firebase/auth'

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

!firebase.apps.length ? firebase.initializeApp(config) : firebase.app()

const auth = firebase.auth()

export default {
  auth,
  login() {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result: any) => {
        return result
      })
      .catch((error) => {
        console.log(error)
      })
  },
  listenAuthState(dispatch: any) {
    return firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: 'login',
          payload: {
            user,
          }
        })
      } else {
        dispatch({
          type: 'logout'
        })
      }
    })
  },
  logout() {
    firebase.auth().signOut()
  }
}
