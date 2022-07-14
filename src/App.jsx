import logo from './logo.svg'
import './App.css'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from './store/slices/userSlice'


import {Routes, Route, Navigate} from 'react-router-dom'

import AdminPage from './pages/AdminPage'
import LoginPage from './pages/LoginPage'

import Header from './components/Header'

import { auth } from './firebase'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe  = onAuthStateChanged(auth, (currentUser) => {
      if(currentUser) {
        const {uid, email, accessToken} = currentUser
        dispatch(setUser({
          uid,
          email,
          token: accessToken
        }))
      }

    })

    return () => {
      unsubscribe()
    }
  }, [])


  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path="/" element={<AdminPage/>} />
        <Route exact path="/login" element={<LoginPage/>} />
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </div>
  )
}

export default App
