import React, { useReducer, useEffect } from 'react'
import { AppProps } from 'next/app'
import authReducer from '../lib/authReducer'
import firebase from '../lib/firebase'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const [state, dispatch] = useReducer(
    authReducer.reducer,
    authReducer.initialState
  )

  const AuthContext = React.createContext({})

  useEffect(() => {
    return firebase.listenAuthState(dispatch)
  }, [])

  return (
    <AuthContext.Provider value={state}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  )
}
