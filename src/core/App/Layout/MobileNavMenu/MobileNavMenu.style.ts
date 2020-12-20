import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'
import { media } from '../../../../theme/helper'

export const MenuWrapper = styled.nav<{ open: boolean }>`
  background: ${({ theme }) => (theme.elevation2 ? '#303234' : '#fdfdfd')};
  transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
  height: auto;
  text-align: left;
  padding: 1.5rem;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 5;
  transition: transform 0.3s ease-in-out;
`
export const MenuContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const BurgerWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  text-align: right;
  margin-bottom: 10px;
`

export const CrossStyled = styled.div`
  height: 25px;
  background-color: ${({ theme }) => (theme.elevation2 ? '#303234' : '#fdfdfd')};
  border-radius: 5px;

  &:after {
    content: 'X';
    font-size: 22px;
    color: ${({ theme }) => theme.burger};
  }
`

export const NavLinkWrappper = styled.div<{ isActive: boolean }>`
  padding: 7px 0;
  width: 120px;
  cursor: pointer;

  ${media.rubber} {
    height: 5rem;
    margin-bottom: 2.611rem;
  }

  ${({ isActive }: { isActive: boolean }) =>
    isActive &&
    css`
      background-color: ${(props) => props.theme.navActive};
    `}
`

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #b4bbc0;
`

export const TextStyled = styled.div<{ isActive: boolean }>`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  text-align: center;
  font-size: 13px;
  color: #b4bbc0;

  ${media.rubber} {
    font-size: 0.66rem;
    line-height: 0.77rem;
  }

  ${({ isActive }: { isActive: boolean }) =>
    isActive &&
    css`
      font-weight: 500;
      color: #788086;
    `}
`
export const ThemeToggleWrapper = styled.div`
  margin: 0 auto 15px;
  margin-bottom: 15px;
  width: 120px;
  ${media.rubber} {
    margin-bottom:0.8333rem;
    width: 6.66rem;
  }
`
