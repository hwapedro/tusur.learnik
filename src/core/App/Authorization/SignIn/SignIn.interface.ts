import { MouseEvent } from 'react'

export interface SingInProps {
  onSignUp: (event: MouseEvent<HTMLButtonElement>) => void
}

export interface SingInFormValues {
  username: string
  password: string
}
