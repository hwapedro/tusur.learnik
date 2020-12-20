import React, { FC } from 'react'

import { BurgerProps } from './Burger.interface'
import { BurgerStyled } from './Burger.styled'

export const Burger: FC<BurgerProps> = ({ open, setOpen }) => {
  const isExpanded = open ? true : false

  return (
    <BurgerStyled
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      open={open}
      onClick={() => setOpen(!open)}
    >
      <span />
      <span />
      <span />
    </BurgerStyled>
  )
}
