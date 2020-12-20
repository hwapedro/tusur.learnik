import { MouseEvent } from 'react'

export type ButtonType = 'button' | 'submit' | 'reset'

export interface ButtonProps {
  type?: ButtonType
  disabled?: boolean
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}
