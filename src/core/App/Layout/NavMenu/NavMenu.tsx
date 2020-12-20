import React, { FC, useState, useCallback } from 'react'
import { useLocation } from 'react-router-dom'

import { COURSES_PAGE, ACHIEVEMENTS_PAGE, NEWS_PAGE, ARENA_HISTORY} from '../../../../global/routes'

import { I18nWrapper } from '../../I18n/I18nWrapper/I18nWrapper'
import { ThemeToggle } from '../../ThemeToggle/ThemeToggle'

import {
  NavMenuWrapper,
  TextStyled,
  NavLinkWrappper,
  SvgWrapper,
  NavLinkStyled,
  ThemeToggleWrapper
} from './NavMenu.style'

export const NavMenu: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const showMenu = useCallback(() => {
    setIsOpen((isOpen) => !isOpen)
  }, [])

  return (
    <NavMenuWrapper isOpen={isOpen} onMouseEnter={showMenu} onMouseLeave={showMenu}>
      <NavLinkStyled to={COURSES_PAGE}>
        <NavLinkWrappper isActive={location.pathname === COURSES_PAGE}>
          <SvgWrapper icon='courses' isActive={location.pathname === COURSES_PAGE} />
          <TextStyled isActive={location.pathname === COURSES_PAGE}>
            <I18nWrapper pathString="navMenu.courses" />
          </TextStyled>
        </NavLinkWrappper>
      </NavLinkStyled>

      <NavLinkStyled to={NEWS_PAGE}>
        <NavLinkWrappper isActive={location.pathname === NEWS_PAGE}>
          <SvgWrapper icon='news' isActive={location.pathname === NEWS_PAGE} />
          <TextStyled isActive={location.pathname === NEWS_PAGE}>
            <I18nWrapper pathString="navMenu.news" />
          </TextStyled>
        </NavLinkWrappper>
      </NavLinkStyled>

      <NavLinkStyled to={ACHIEVEMENTS_PAGE}>
        <NavLinkWrappper isActive={location.pathname === ACHIEVEMENTS_PAGE}>
          <SvgWrapper icon='achievements' isActive={location.pathname === ACHIEVEMENTS_PAGE} />
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

      <ThemeToggleWrapper>
        <ThemeToggle />
      </ThemeToggleWrapper>
    </NavMenuWrapper>
  )
}
