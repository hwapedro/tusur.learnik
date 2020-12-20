//events
export interface reqDone<T> {
  succses: string
  data: T
}

export interface singInParams {
  login: string
  password: string
}

export interface singInDone {
  token: string
}

export interface singInError {
  data: object
}


export interface signUpParams {
  username: string
  email: string
  password: string
}

export interface signUpDone {
  success: boolean
  registered: boolean
}

export interface signUpError {
  data: Error
}

export interface recoverPasswordParams {
  email: string
}

export interface recoverPasswordDone {
  success: boolean
}

export interface recoverPasswordError {
  data: Error
}

export interface sendPasswordParams {
  password: string,
  passwordRepeat: string
}

export interface sendPasswordDone {
  success: boolean
}

export interface sendPasswordError {
  data: Error
}


//model
export interface AuthState {
  isLogin: string | null
  error: Error
}

export interface Error {
  code: number
  message: string
}
