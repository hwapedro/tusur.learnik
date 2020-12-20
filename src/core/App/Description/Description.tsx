import React, { FC } from 'react'

import {
  DescriptionWrapper,
  TextWrapper,
  TextStyled,
} from './Description.style'

export const Description: FC<{
  isOpen: boolean
  setIsOpen: any
  description: string
}> = ({ isOpen, setIsOpen, description }) => {
  return (
    <DescriptionWrapper
      isOpen={isOpen}
      onClick={() => setIsOpen((isOpen: boolean) => !isOpen)}
    >
      <TextWrapper>
        <TextStyled dangerouslySetInnerHTML={{ __html: description }} />
      </TextWrapper>
    </DescriptionWrapper>
  )
}
