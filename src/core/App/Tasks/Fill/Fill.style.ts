import styled, { css } from 'styled-components'
import { media } from '../../../../theme/helper'

export const FillTitleWrapper = styled.div`
  margin-bottom: 60px;

  ${media.rubber} {
    margin-bottom: 3.33rem;
  }

  ${media.phone} {
    margin-bottom: 0;
  }
`

export const FillTitleStyled = styled.span`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 21px;
  color: ${(props) => props.theme.commonText};

  ${media.rubber} {
    font-size: 1.77rem;
    line-height: 1.166rem;
  }

  ${media.phone} {
    font-size: 1.77rem;
    line-height: 1.166rem;
  }
`

export const TextWrapper = styled.div`
  margin-bottom: 60px;
  line-height: 35px;

  ${media.rubber} {
    margin-bottom: 3.33rem;
    line-height: 1.94rem;
  }

  ${media.phone} {
    margin-bottom: 3.33rem;
    line-height: 1.94rem;
  }
`

export const TextStyled = styled.span`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 12px;
  color: ${(props) => props.theme.commonText};
  margin-bottom: 10px;

  ${media.rubber} {
    font-size: 1.111rem;
    line-height: 0.66rem;
    margin-bottom: 0.55rem;
  }

  ${media.phone} {
    font-size: 1.22rem;
    line-height: 1.5rem;
    margin-bottom: 0.55rem;
  }
`

export const InputStyled = styled.input`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 12px;
  margin: 0 5px;
  border-radius: 5px;
  background: ${(props) => props.theme.elevation2};
  border: 1px solid #758d9d;
  padding: 2px 5px;
  color: ${(props) => props.theme.commonText};
  width: 255px;

  ${media.rubber} {
    font-size: 1.11rem;
    line-height: 0.66rem;
    margin: 0 0.277rem;
    border-radius: 0.277rem;
    border: 0.055px solid #758d9d;
    padding: 0.11px 0.277rem;
    width: 14.16rem;
  }

  ${media.phone} {
    font-size: 1.22rem;
    line-height: 1.5rem;
    margin: 0 0.277rem;
    border-radius: 0.277rem;
    border: 0.055px solid #758d9d;
    padding: 0.11px 0.277rem;
    width: 14.16rem;
  }
`
