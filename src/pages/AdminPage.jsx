import { useState } from 'react'
import Form from '../components/Form'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { addAuthor } from '../fetch'


const AdminPage = () => {
  const [lastname, setLastname] = useState('')
  const [eLibraryId, setELibraryId] = useState('')

  const { data } = useSelector(state => state.user)


  const firstInput = {
    title: 'Имя пользователя',
    value: lastname,
    setValue: setLastname,
    type: 'text',
    placeholder: 'Введите фамилию'
  }

  const secondInput = {
    title: 'ELibararyId',
    value: eLibraryId,
    setValue: setELibraryId,
    type: 'text',
    placeholder: 'Введите eLibraryId'
  }

  const fetchDB = async () => {
    try {
      const res = await addAuthor(eLibraryId, lastname)
    } catch(err) {
      err.response.status === 400 ? alert(err.response.data.message) : alert('Произошла ошибка с сервером')
    }
  }

  if(!data) {
    return <Navigate to="login"/>
  }


  return (
    <div className="wrap">
      <Form
        firstInput={firstInput}
        secondInput={secondInput}
        submitForm={fetchDB}
        title={'Добавить пользователей в БД'}
        buttonText={'Добавить пользователя'}
      />
    </div>
  )
}

export default AdminPage
