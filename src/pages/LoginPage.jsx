import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Form from '../components/Form'


import { fetchAuthLogin } from '../store/slices/userSlice'
import { useDispatch, useSelector } from 'react-redux'


const LoginPage = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { data } = useSelector(state => state.user)


  const firstInput = {
    title: 'Email',
    value: email,
    setValue: setEmail,
    type: 'text',
    placeholder: 'Введите email'
  }

  const secondInput = {
    title: 'Пароль',
    value: password,
    setValue: setPassword,
    type: 'password',
    placeholder: 'Введите пароль'
  }

  const fetchDB = async () => {
    const user = await dispatch(fetchAuthLogin({email, password}))

    if(!user.payload) alert('Ошибка авторизации')

    navigate('/')
  }

  if(data) {
    return <Navigate to="/"/>
  }

  return (
    <div className="wrap">
      <Form
        firstInput={firstInput}
        secondInput={secondInput}
        submitForm={fetchDB}
        title={'Вход в панель администратора'}
        buttonText={'Вход'}
      />
    </div>
  )
}

export default LoginPage
