import styled, { css } from 'styled-components'
import { media } from '../../../theme/helper'

export const DescriptionWrapper = styled.div<{ isOpen: boolean }>`
  cursor: pointer;
  overflow: auto;
  height: 100%; /* 100% Full-height */
  width: 800px; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 200; /* Stay on top */
  top: 0;
  right: 0;
  background-color: ${(props) => props.theme.elevation1};
  padding: 55px 0; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidebar */
  border-left: 0.055rem solid ${(props) => props.theme.navLine};
  border-bottom: 0.055rem solid ${(props) => props.theme.navLine};
  transform: translateX(+95%);
  ${media.rubber} {
    width: 44.444rem; 
    padding: 3.0554rem 0; 
  }
  ${media.phone} {
    width: 100%; 
    padding: 3.0554rem 0; 
    transform: translateX(+100%);
    ${({ isOpen }: { isOpen: boolean }) =>
    isOpen &&
    css`
       transform: translateX(0%);
      background-color: ${(props) => props.theme.container};
    `}
  }

  ${({ isOpen }: { isOpen: boolean }) =>
    isOpen &&
    css`
       transform: translateX(0%);
      background-color: ${(props) => props.theme.container};
    `}
`

export const TextWrapper = styled.div`
  text-align: justify;
  margin: 10px 60px;
  line-height: 20px;

  h1{
    font-size: 31px;
    margin-bottom: 55px;
  }

  p{
    margin-top: 15px;
    font-size: 16px;
  }

  ${media.rubber} {
    margin: 0.555rem 3.333rem;
    line-height: 1.1111rem;
  
    h1{
      font-size: 1.722rem;
      line-height: 1.8111rem;
      margin-bottom: 3.055rem;
    }
  
    p{
      margin-top: 0.8333rem;
      font-size: 0.888rem;
    }
  }

  ${media.phone} {
    margin: 0.555rem 3.333rem;
    line-height: 1.1111rem;
  
    h1{
      font-size: 1.722rem;
      line-height: 1.8111rem;
      margin-bottom: 3.055rem;
    }
  
  }

`

export const TextStyled = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #b4bbc0;

  ${media.rubber} {
    font-size: 0.66rem;
    line-height: 0.77rem;
  }

  ${media.phone} {
    font-size: 0.9rem;
    line-height: 1.1rem;
  }
`

export const ImageStyled = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 10px;
  color: ${(props) => props.theme.checkButton};

  ${media.rubber} {
    height: 1.11rem;
    width: 1.11rem;
    margin-right: 0.55rem;
  }

  ${media.phone} {
    height: 1.11rem;
    width: 1.11rem;
    margin-right: 0.55rem;
  }
`
