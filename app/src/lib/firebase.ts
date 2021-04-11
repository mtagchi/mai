import firebase from 'firebase'
import 'firebase/auth'
import { User } from '../../interfaces'

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
      .then(async (result) => {
        if (result.user) {
          const time = new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })
          const currentUser: User = {
            uid: result.user.uid,
            displayName: result.user.displayName,
            email: result.user.email,
            photoURL: result.user.photoURL,
            updateAt: time
          }
          const db = firebase.firestore()
          const userRef = db.collection('users').doc(currentUser.uid)
          const userDoc = await userRef.get()
          if (userDoc.exists) {
            userRef.update(currentUser)
          } else {
            currentUser.createdAt = time
            userRef.set(currentUser)
          }
        }
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
