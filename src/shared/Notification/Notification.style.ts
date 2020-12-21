import styled from 'styled-components'
import { media } from '../../theme/helper'

export const NotificationWrapper = styled.div`
    cursor: pointer;
    width: 400px;
    display: flex;
    font-family: Rubik;
    font-style: normal;
    height: 100px;
    background: ${(props) => props.theme.notif};
    box-shadow: ${(props) => props.theme.boxShadow};
    border-radius: 10px;
    line-height: 17px;
    font-weight: 500;
    /* position: absolute;
    top: 3%;
    right: 50%; */
    transform: translateX(50%);
    z-index: 20;
    padding: 20px 50px ;

  ${media.rubber} {
    width: 16.66rem;
  }
`

export const ContentWrapper = styled.div`
    display:flex;

`

export const ImageStyled = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 20%;
`

export const TextStyled = styled.span`
    margin-left: 40px;
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: ${(props) => props.theme.titleText};

    ${media.rubber} {
      font-size: 0.777rem;
      line-height: 1.11rem;
      margin-left: 2.222.rem;
    }
  
    ${media.phone} {
      font-size: 14px;
      line-height: 1.11rem;
      margin-left: 2.222.rem;
    }
`


