import styled, { css } from 'styled-components'
import { media } from '../../../../../theme/helper'

export const WrapperStyled = styled.div`
  width: 700px;
  margin: 100px auto 0;

  ${media.rubber} {
    width: 38.88rem;
    margin: 5.55rem auto 0;
  }

  ${media.phone} {
    width: 38.88rem;
    margin: 5.55rem auto 0;
  }
`

export const TitleStyled = styled.div`
  font-size: 30px;
  line-height: 28px;
  color: ${(props) => props.theme.titleText};
  font-family: Rubik;
  font-weight: 500;
  margin-bottom: 20px;

  ${media.rubber} {
    font-size: 1.66rem;
    line-height: 1.55rem;
    margin-bottom: 1.55rem;
  }

  ${media.phone} {
    font-size: 1.66rem;
    line-height: 1.55rem;
    margin-bottom: 1.55rem;
  }
`


export const AvatarsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  ${media.rubber} {
    grid-gap: 1.11rem;
  }

  ${media.phone} {
    grid-gap: 1.11rem;
  }
`

export const AvatarWrapper = styled.div`
  cursor: pointer;
  width: 160px;
  height: 160px;
  box-shadow: 1.35484px 1.35484px 7.4194px rgba(0, 0, 0, 0.04);
  border-radius: 30%;
  margin-bottom: 50px;

  ${media.rubber} {
    width: 8.88rem;
    height: 8.88rem;
    box-shadow: 0.0752rem 0.0752rem 0.412rem rgba(0, 0, 0, 0.04);
  }

  ${media.phone} {
    width: 8.88rem;
    height: 8.88rem;
    box-shadow: 0.0752rem 0.0752rem 0.412rem rgba(0, 0, 0, 0.04);
  }
`

export const AvatarStyled = styled.img<{ isSelectedPicture: boolean }>`
  border-radius: 30%;
  width: 160px;
  height: 160px;

  ${media.rubber} {
    width: 8.88rem;
    height: 8.88rem;
  }

  ${media.phone} {
    width: 8.88rem;
    height: 8.88rem;
  }
  ${({ isSelectedPicture }: { isSelectedPicture: boolean }) => {
    if (isSelectedPicture) {
      return css`
        box-shadow: 0 0 0 3px #00a7e1;

        ${media.rubber} {
          box-shadow: 0 0 0 0.166rem #00a7e1;
        }

        ${media.phone} {
          box-shadow: 0 0 0 0.166rem #00a7e1;
        }
      `
    }
  }}
`
