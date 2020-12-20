import React, { FC, useState } from 'react'

import { setLanguage, setOpenLangMenu} from '../../../../store/profile/events'

import {
  I18nSwitchWrapper,
  LanguageStyled,
  OptionWrapper,
  LanguageOptionStyled,
  CloseButtonStyled,
  DarkGround,
} from './i18nSwitch.style'

export const I18nSwitch: FC = () => {
  const languages: Array<{ name: string; code: string }> = [
    { name: 'Русский', code: 'ru' },
    { name: 'English', code: 'en' },
  ]

  const changeLanguage = (language: string) => {
    setLanguage({ lang: language })
  }

  return (
    <>
      <OptionWrapper>
        <CloseButtonStyled onClick={()=>setOpenLangMenu(false)}/>
        {languages.map((language, index) => (
          <LanguageOptionStyled
            code={language.code}
            onClick={() => {
              changeLanguage(language.code)
            }}
          >
            {language.name}
          </LanguageOptionStyled>
        ))}
      </OptionWrapper>
      <DarkGround onClick={()=>setOpenLangMenu(false)}/>
    </>
  )
}
