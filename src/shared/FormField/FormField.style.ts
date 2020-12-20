import styled, { css } from 'styled-components'
import MaskInput from 'react-input-mask'
import { media } from '../../theme/helper'

export const FieldStyled = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  position: relative;
  font-family: Rubik;
  ${media.rubber} {
    height: 4.44rem;
  }
`

export const LabelStyled = styled.label`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: ${(props) => props.theme.titleText};
  margin-bottom: 3px;

  ${media.rubber} {
    font-size: 0.66rem;
    margin-bottom: 0.16rem;
  }
`

export const InputStyled = styled(MaskInput)`
  width: 100%;
  height: 35px;
  border: none;
  font-size: 15px;
  padding: 2px 10px;
  color: ${(props) => props.theme.commonText};
  box-sizing: border-box;
  border-radius: 5px;

  font-weight: 200;
  background: ${(props) => props.theme.elevation3};

  ${({ isValid }: { isValid: boolean }) =>
    !isValid &&
    css`
      transition: border 0.2s;
      border: 1px solid #ff6673;
    `}
  &::placeholder {
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    color: #B4BBC0;
  }
  &:focus {
    outline-color: #3f75ff;
    outline-width: 4px;
  }
  ${media.rubber} {
    width: 100%;
    height: 1.94rem;
    font-size: 0.83rem;
    border-radius: 0.27rem;
    padding: 0.11rem 0.55rem;
    ${({ isValid }: { isValid: boolean }) =>
      !isValid &&
      css`
        border: 0.08rem solid #eb5757;
      `}
    &::placeholder {
      font-size: 0.83rem;
    }
  }
`

export const WarningMessageStyled = styled.span`
  margin-top: 3px;
  font-size: 13px;
  font-weight: 500;
  text-align: left;
  color: #eb5757;
  ${media.rubber} {
    margin-top: 0.27rem;
    font-size: 0.77rem;
  }
`

export const ShowPassStyled = styled.div`
  position: absolute;
  top: 25px;
  cursor: pointer;
  right: 15px;

  ${media.rubber} {
    top: 1.38rem;
    right: 0.83rem;
  }
`

export const SvgWrapperStyled = styled.div`
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-size: 20px 20px;
  background-image: url("data:image/svg+xml,%3Csvg width='14' height='13' viewBox='0 0 14 13' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.99999 10.2917C7.55182 10.2917 8.05582 10.2359 8.51549 10.1395L7.49057 9.18775C7.33132 9.19913 7.16974 9.20833 6.99999 9.20833C3.87857 9.20833 2.66932 7.12508 2.37649 6.5C2.59637 6.04436 2.89335 5.62431 3.25615 5.25579L2.44065 4.49854C1.54349 5.4015 1.2034 6.31096 1.19699 6.32883C1.15675 6.44007 1.15675 6.56047 1.19699 6.67171C1.20924 6.70746 2.5474 10.2917 6.99999 10.2917ZM6.99999 2.70833C5.9284 2.70833 5.04815 2.92283 4.31432 3.23971L2.1624 1.24204L1.33757 2.00796L11.8376 11.758L12.6624 10.992L10.7263 9.19425C12.2512 8.13746 12.7954 6.69446 12.8036 6.67171C12.8438 6.56047 12.8438 6.44007 12.8036 6.32883C12.7907 6.29254 11.4526 2.70833 6.99999 2.70833ZM9.90032 8.42725L8.57032 7.19225C8.68115 6.981 8.74999 6.74863 8.74999 6.5C8.74999 5.61113 7.95724 4.875 6.99999 4.875C6.73224 4.875 6.48199 4.93892 6.25507 5.04238L5.2004 4.06304C5.77937 3.87856 6.3879 3.78679 6.99999 3.79167C10.1214 3.79167 11.3307 5.87492 11.6235 6.5C11.4473 6.87483 10.9433 7.76858 9.90032 8.42725Z' fill='%23DDE4E9'/%3E%3C/svg%3E%0A");

  ${media.rubber} {
    width: 1.66rem;
    height: 1.05rem;
    background-size: 1.05rem 1.05rem;
  }
`
