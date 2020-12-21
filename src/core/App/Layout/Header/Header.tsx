import React, { FC, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useStore } from 'effector-react'
import { CSSTransition } from 'react-transition-group'

import { profileStore } from '../../../../store/profile/model'

import { Burger } from '../Burger/Burger'

import { I18nSwitch } from '../../I18n/I18nSwitch/I18nSwitch'
import { I18nWrapper } from '../../I18n/I18nWrapper/I18nWrapper'
import { MobileNavMenu } from '../MobileNavMenu/MobileNavMenu'
import { ProfileMenu } from './ProfileMenu/ProfileMenu'
import { AVATARS } from '../../../../global/constant'

import {
  HeaderWrapper,
  TitleWrapper,
  LeftStyled,
  RightStyled,
  BurgerWrapper,
  ProfileWrapper,
  UsernameStyled,
  ImageWrapper,
  ImageStyled,
} from './Header.style'

const titles = [
  { title: 'header.courses', path: '/learn' },
  { title: 'header.news', path: '/news' },
  { title: 'header.profile', path: '/profile' },
  { title: 'header.achievements', path: '/achievements' },
  { title: 'header.arena', path: '/arena' },
  { title: 'header.arenaHistory', path: '/arena-history' },
]

const getTitle = (titles: { title: string; path: string }[], path: string): string => {
  const object = titles.find((el) => path.includes(el.path))
  return object ? object.title : ''
}

export const Header: FC = () => {
  const { isLangMenuOpen, info } = useStore(profileStore)
  const [isProfileMenuOpen, setProfileMenuOpen] = useState<boolean>(false)
  const [isBurgerMenuOpen, setOpenBurger] = useState<boolean>(false)

  const location = useLocation()
  const windowWidth = window.innerWidth
  const title = getTitle(titles, location.pathname)

  if(!title){
    return <></>
  }
  
  return (
    <HeaderWrapper>
      <LeftStyled>
        <TitleWrapper>
          <I18nWrapper pathString={title} />
        </TitleWrapper>
      </LeftStyled>
      <RightStyled>
        {windowWidth > 448 ? (
          <>
            <ProfileWrapper
              onMouseEnter={() => setProfileMenuOpen(true)}
              onMouseLeave={() => setProfileMenuOpen(false)}
            >
              <UsernameStyled>{info.username}</UsernameStyled>
              <ImageWrapper>
                <ImageStyled src={AVATARS[info.avatar].path} />
              </ImageWrapper>

              <CSSTransition
                in={isProfileMenuOpen}
                timeout={300}
                classNames="profile-menu"
                unmountOnExit
              >
                <ProfileMenu setProfileMenuOpen={setProfileMenuOpen} />
              </CSSTransition>
            </ProfileWrapper>
            {isLangMenuOpen && <I18nSwitch />}
          </>
        ) : (
          <BurgerWrapper>
            <Burger open={isBurgerMenuOpen} setOpen={setOpenBurger} />
            <MobileNavMenu
              open={isBurgerMenuOpen}
              setOpen={setOpenBurger}
            ></MobileNavMenu>
          </BurgerWrapper>
        )}
      </RightStyled>
    </HeaderWrapper>
  )
}
