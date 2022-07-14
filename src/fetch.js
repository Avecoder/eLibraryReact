import axios from './axios'

export const addAuthor = async (eLibraryId, lastName) => {
  if(eLibraryId.trim() === '' && lastname.trim() === '') {
    alert('Заполните поля')
    return false
  }

  const { data } = await axios.post('/author', {lastName, eLibraryId})

  return data
}
