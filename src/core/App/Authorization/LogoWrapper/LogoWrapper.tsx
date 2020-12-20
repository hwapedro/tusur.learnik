import React, { FC } from 'react'

import {
  LogoWrapperStyled,
  LogoStyled,
  TextWrapperStyled,
  SubtitleStyled,
  TitleStyled
} from './LogoWrapper.style'

export const LogoWrapper: FC = () => (
  <>
    <LogoWrapperStyled>
      <LogoStyled />
    </LogoWrapperStyled>
    <TextWrapperStyled>
      <TitleStyled>Let`s go code !</TitleStyled>
      <SubtitleStyled>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </SubtitleStyled>
    </TextWrapperStyled>
  </>
)
