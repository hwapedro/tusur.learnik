import { createStore } from 'effector-logger'

import { signIn, signUp, logout } from './events'

import { AuthState } from './types'
import { ERROR_MESSAGE } from '../../constants'

const initialState: AuthState = {
  isLogin: localStorage.getItem('token'),
  error: { code: 0, message: '' }
}

export const authStore = createStore(initialState)
  .on(signIn.done, (state, { result }) => ({
    ...state,
    isLogin: 'true'
  }))
  .on(signUp.done, (state, { result }) => ({
    ...state
  }))
  .on(signUp.fail, (state, { error }) => ({
    ...state,
    error: { code: error.data.code, message: ERROR_MESSAGE[error.data.code] }
  }))
  .on(logout.done, (state, { result }) => {
    localStorage.removeItem('token')
    return {
      ...state,
      isLogin: null,
    }
  })


