import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import axios from '../../axios'

export const fetchAuthLogin = createAsyncThunk('user/fetchAuthLogin', async ({email, password}) => {
  const auth = getAuth()

  const data = await signInWithEmailAndPassword(auth, email, password)

  const { uid, accessToken } = data.user

  return { uid, email, accessToken }

})


const initialState = {
  data: null,
  status: 'loading'
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.data = action.payload
    },
    removeUser(state) {
      state.data = null
    }
  },
  extraReducers: {
    [fetchAuthLogin.pending]: (state) => {
      state.status = 'loaded'
    },
    [fetchAuthLogin.fulfilled]: (state, action) => {
      state.status = 'loading'
      state.data = action.payload
    },
    [fetchAuthLogin.rejected]: (state) => {
      state.status = 'loading'
      state.data = null
    },
  }
})

export default userSlice.reducer

export const { setUser, removeUser } = userSlice.actions
