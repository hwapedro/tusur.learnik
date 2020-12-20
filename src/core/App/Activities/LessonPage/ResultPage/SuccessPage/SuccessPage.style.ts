import styled, { css } from 'styled-components'
import { media } from '../../../../../../theme/helper'

export const SuccessWrapper = styled.div`
  margin: auto;
  max-height: 450px;
  min-width: 700px;
  max-width: 800px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 10px;

  ${media.rubber} {
    max-height: 25rem;
    min-width: 38.88rem;
    max-width: 44.44rem;
    border-radius: 0.55rem;
  }

  ${media.phone} {
    min-width: 0;
    width: 100%;
    padding: 0 7% 15px;
    border-radius: 0.55rem;
  }
`

export const TitlePageWrapper = styled.div`
  margin-bottom: 20px;
  text-align: center;
  ${media.rubber} {
    margin-bottom: 1.11rem;
  }
  ${media.phone} {
    margin-bottom: 1.11rem;
  }
`

export const TitlePage = styled.h2`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 30px;
  color: ${(props) => props.theme.titleText};

  ${media.rubber} {
    font-size: 1.55rem;
    line-height: 1.66rem;
  }
  ${media.phone} {
    font-size: 1.55rem;
    line-height: 1.66rem;
  }
`

export const ButtonWrapper = styled.div`
  height: 100%;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 2% auto;
  z-index: 110;
  display: flex;
  flex-direction: row;

  ${media.phone} {
    width: 100%;
  }
`

const ButtonStyled = styled.button`
width: 180px;
height: auto;
font-size: 20px;
border-radius: 4px;
font-family: Rubik;
font-style: normal;
font-weight: 500;
cursor: pointer;

${media.rubber} {
  width: 10rem;
  font-size: 1.11rem;
  margin-right: 0.55rem;
  border-radius: 0.22rem;
}

${media.phone} {
  width: 12.44rem;
  font-size: 1.11rem;
  margin-right: 0.55rem;
  border-radius: 0.22rem;
}
`

export const ContinueButtonStyled = styled(ButtonStyled)`
  color: #ffffff;
  background: ${(props) => props.theme.checkButton};
  border: 1px solid #00a7e1;

  ${media.rubber} {
    border: 0.055rem solid #00a7e1;
  }
`
