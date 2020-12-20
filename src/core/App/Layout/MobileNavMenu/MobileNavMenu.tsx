import React, { FC } from 'react'
import { useLocation } from 'react-router-dom'

import {
  COURSES_PAGE,
  ACHIEVEMENTS_PAGE,
  NEWS_PAGE,
  ARENA_HISTORY,
  PROFILE
} from '../../../../global/routes'

import { Burger } from '../Burger/Burger'
import {
  MenuWrapper,
  BurgerWrapper,
  CrossStyled,
  MenuContentWrapper,
  NavLinkWrappper,
  NavLinkStyled,
  TextStyled,
  ThemeToggleWrapper,
} from './MobileNavMenu.style'
import { SvgWrapper } from '../NavMenu/NavMenu.style'

import { MobileNavMenuProps } from './MobileNavMenu.interface'
import { ThemeToggle } from '../../ThemeToggle/ThemeToggle'

import { I18nWrapper } from '../../I18n/I18nWrapper/I18nWrapper'

export const MobileNavMenu: FC<MobileNavMenuProps> = ({ open, setOpen }) => {
  const isHidden = open ? true : false
  const location = useLocation()
  const tabIndex = isHidden ? 0 : -1

  return (
    <MenuWrapper open={open} aria-hidden={!isHidden}>
      <BurgerWrapper>
        <CrossStyled onClick={() => setOpen(!open)} />
      </BurgerWrapper>
      <MenuContentWrapper>
        <NavLinkStyled to={COURSES_PAGE}>
          <NavLinkWrappper isActive={location.pathname === COURSES_PAGE}>
            <SvgWrapper icon="courses" isActive={location.pathname === COURSES_PAGE} />
            <TextStyled isActive={location.pathname === COURSES_PAGE}>
              <I18nWrapper pathString="navMenu.courses" />
            </TextStyled>
          </NavLinkWrappper>
        </NavLinkStyled>

        <NavLinkStyled to={NEWS_PAGE}>
          <NavLinkWrappper isActive={location.pathname === NEWS_PAGE}>
            <SvgWrapper icon="news" isActive={location.pathname === NEWS_PAGE} />
            <TextStyled isActive={location.pathname === NEWS_PAGE}>
              <I18nWrapper pathString="navMenu.news" />
            </TextStyled>
          </NavLinkWrappper>
        </NavLinkStyled>

        <NavLinkStyled to={ACHIEVEMENTS_PAGE}>
          <NavLinkWrappper isActive={location.pathname === ACHIEVEMENTS_PAGE}>
            <SvgWrapper
              icon="achievements"
              isActive={location.pathname === ACHIEVEMENTS_PAGE}
            />
            <TextStyled isActive={location.pathname === ACHIEVEMENTS_PAGE}>
              <I18nWrapper pathString="navMenu.achievements" />
            </TextStyled>
          </NavLinkWrappper>
        </NavLinkStyled>

        <NavLinkStyled to={ARENA_HISTORY}>
          <NavLinkWrappper isActive={location.pathname === ARENA_HISTORY}>
            <SvgWrapper icon={'arena'} isActive={location.pathname === ARENA_HISTORY} />
            <TextStyled isActive={location.pathname === ARENA_HISTORY}>
              <I18nWrapper pathString="navMenu.arena" />
            </TextStyled>
          </NavLinkWrappper>
        </NavLinkStyled>

        <NavLinkStyled to={PROFILE}>
          <NavLinkWrappper isActive={location.pathname === PROFILE}>
            <TextStyled isActive={location.pathname === PROFILE}>
              <I18nWrapper pathString="profilePage.profile" />
            </TextStyled>
          </NavLinkWrappper>
        </NavLinkStyled>

        <ThemeToggleWrapper>
          <ThemeToggle />
        </ThemeToggleWrapper>
      </MenuContentWrapper>
    </MenuWrapper>
  )
}
