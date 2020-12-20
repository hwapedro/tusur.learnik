import React, { FC, Dispatch, SetStateAction } from 'react'
import { useHistory } from 'react-router'
import { useStore } from 'effector-react'

import { profileStore } from '../../../../../store/profile/model'
import { logout } from '../../../../../store/auth/events'
import { setOpenLangMenu } from '../../../../../store/profile/events'
import {
  MenuWrapper,
  MenuOptionStyled,
  LogoutOptionStyled,
  I18nOptionStyled,
} from './ProfileMenu.style'
import { I18nWrapper } from '../../../I18n/I18nWrapper/I18nWrapper'
import { PROFILE } from '../../../../../global/routes'

interface ToggleProps {
  setProfileMenuOpen: Dispatch<SetStateAction<boolean>>
}

export const ProfileMenu: FC<ToggleProps> = ({ setProfileMenuOpen }) => {
  const history = useHistory()
  const { info } = useStore(profileStore)
  const { language } = info

  return (
    <MenuWrapper>
      <I18nOptionStyled
        onClick={() => {
          setProfileMenuOpen(false)
          setOpenLangMenu(true)
        }}
        code={language}
      >
        {language.toUpperCase()}
      </I18nOptionStyled>
      <MenuOptionStyled
        onClick={() => {
          setProfileMenuOpen(false)
          history.push(PROFILE)
        }}
      >
        <I18nWrapper pathString="profilePage.profile" />
      </MenuOptionStyled>
      <LogoutOptionStyled
        onClick={async () => {
          logout(null)
          history.push('/')
        }}
      >
        <I18nWrapper pathString="profilePage.logout" />
      </LogoutOptionStyled>
    </MenuWrapper>
  )
}
