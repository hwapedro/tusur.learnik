import React, { FC } from 'react'

import { ButtonProps } from './Button.interface'

export const Button: FC<ButtonProps> = props => {
  const { type = 'button', disabled = false, onClick, children } = props

  return (
    <button type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
