import { createEffect } from 'effector-logger'

import {
  singInParams,
  singInError,
  singInDone,
  signUpParams,
  signUpDone,
  signUpError,
  recoverPasswordParams,
  recoverPasswordDone,
  recoverPasswordError,
  sendPasswordParams,
  sendPasswordDone,
  sendPasswordError
} from './types'
import api, { reqDone } from '../../global/api'
/*
eslint-disable
*/
export const signIn = createEffect<singInParams, reqDone<singInDone>, singInError>(
  'sign in'
).use(data => api.request.post('/auth/login', data))

signIn.done.watch(({ params, result }) => {
  localStorage.setItem('token', result.data.token)
})

export const signUp = createEffect<signUpParams, reqDone<signUpDone>, signUpError>(
  'sign in'
).use(data => api.request.post('/auth/register', data))

signUp.done.watch(({ params, result }) => {

})

signUp.fail.watch(({ params, error }) => {
  
})

export const recoverPassword = createEffect<
  recoverPasswordParams,
  reqDone<recoverPasswordDone>,
  recoverPasswordError
>('recover password').use(data => api.request.post('/password/recover', data))

recoverPassword.done.watch(({ params, result }) => {
 
})

recoverPassword.fail.watch(({ params, error }) => {
 
})

export const sendPassword = createEffect<
  sendPasswordParams,
  reqDone<sendPasswordDone>,
  sendPasswordError
>('send password').use(data => api.request.put('/auth/password/reset', data))

sendPassword.done.watch(({ params, result }) => {
  console.log(params, result)
})

sendPassword.fail.watch(({ params, error }) => {
  console.log(error, 'unable to set new password')
})

export const logout = createEffect<$TSFixMe, $TSFixMe, $TSFixMe>(
  'logout'
)

