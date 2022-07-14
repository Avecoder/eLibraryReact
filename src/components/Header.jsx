import { useLocation, useNavigate } from 'react-router-dom'

import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

import { useDispatch } from 'react-redux'

import { removeUser } from '../store/slices/userSlice'

const Header = (props) => {
  const { pathname } = useLocation()
  const dispatch = useDispatch()

  const navigate = useNavigate()


  const logout = () => {
    if(window.confirm('Ты действительно хочешь выйти?')) {
      signOut(auth)
      dispatch(removeUser())
      navigate('/login')
    }
  }

  return (
    <div className="header">
      <div className="logo">ELibrary admin</div>
      {
        pathname !== '/login' &&
        <button onClick={logout}>Выйти</button>
      }
    </div>
  )
}

export default Header
