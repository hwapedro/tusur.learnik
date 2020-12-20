import styled, { css } from 'styled-components'
import { media } from '../../../../../theme/helper'

export const WrapperNavigation = styled.div`
  float: right;
  height: auto !important;
  margin-left: 30px;
  width: 200px;
  padding: 30px 35px;
  background: ${(props) => props.theme.elevation2};
  border-radius: 10px;

  ${media.rubber} {
    margin-left: 1.66rem;
    width: 11.11rem;
    padding: 1.66rem 1.94rem;
    border-radius: 0.55rem2;
  }
`

export const NavigationTitleWrapper = styled.div`
  margin-bottom: 30px;

  ${media.rubber} {
    margin-bottom: 1.66rem;
  }
`

export const NavigationTitleStyled = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #b4bbc0;
  opacity: 0.75;

  ${media.rubber} {
    font-size: 0.77rem;
    line-height: 0.94rem;
  }
`

export const TaskLinkStyled = styled.div<{ isDone: boolean }>`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 15px;
  font-size: 12px;
  line-height: 14px;
  color: #b4bbc0;
  opacity: 0.75;

  &:before {
    content: '';
    height: 15px;
    margin: -3px 5px 0 0;
    display: inline-block;
    vertical-align: middle;
    width: 15px;
    background-size: 15px 15px;
  }

  ${media.rubber} {
    margin-bottom: 0.83rem;
    font-size: 0.66rem;
    line-height: 0.77rem;

    &:before {
      height: 0.83rem;
      margin: -0.16rem 0.277rem 0 0;
      width: 0.83rem;
      background-size: 0.83rem 0.83rem;
    }
  }

  ${({ isDone }: { isDone: boolean }) =>
    isDone
      ? css`
          cursor: pointer;
          color: #5ecba1;
          &:before {
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.24998 9.74124L4.19186 7.68312L3.30811 8.56687L6.24998 11.5087L12.3169 5.44187L11.4331 4.55812L6.24998 9.74124Z' fill='%235ECBA1'/%3E%3C/svg%3E%0A");
          }
        `
      : css`
          color: #b4bbc0;
          &:before {
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.5 1.25C5.77688 1.25 4.375 2.65188 4.375 4.375V6.25H3.75C3.06062 6.25 2.5 6.81063 2.5 7.5V12.5C2.5 13.1894 3.06062 13.75 3.75 13.75H11.25C11.9394 13.75 12.5 13.1894 12.5 12.5V7.5C12.5 6.81063 11.9394 6.25 11.25 6.25H10.625V4.375C10.625 2.65188 9.22312 1.25 7.5 1.25ZM11.25 7.5L11.2513 12.5H3.75V7.5H11.25ZM5.625 6.25V4.375C5.625 3.34125 6.46625 2.5 7.5 2.5C8.53375 2.5 9.375 3.34125 9.375 4.375V6.25H5.625Z' fill='%23C7CCD0'/%3E%3C/svg%3E%0A");
          }
        `}
`
