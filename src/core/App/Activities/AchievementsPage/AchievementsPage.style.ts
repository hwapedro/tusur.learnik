import styled from 'styled-components'
import { media } from '../../../../theme/helper'

export const Info = styled.div`
  width: 300px;
  ${media.rubber} {
    width: 16.66rem;
  }
`

export const WrapperStyled = styled.div`
  width: 1117px;
  margin: 61px auto;

  ${media.rubber} {
    padding-top: 2.77rem;
    width: 62.055rem;
  }

  ${media.phone} {
    display: block;
    width: 100vw;
    padding: 0 7% 15px;
  }
`

export const AchievementsWrapper = styled.div`
  width: 1114px;
  margin: 0 auto;
  display: grid;
  grid-column-gap: 26px;
  grid-row-gap: 26px;
  grid-template-columns: repeat(3, 1fr);

  ${media.rubber} {
    width: 61.88rem;
    grid-column-gap: 1.44rem;
    grid-row-gap: 1.44rem;
  }

  ${media.phone} {
    display: block;
    width: 100%;
  }
`

export const AchievementsCardStyled = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  padding: 35px 30px 0;
  background: ${(props) => props.theme.elevation2};
  box-shadow: ${(props) => props.theme.boxShadow};
  font-style: normal;
  font-weight: normal;
  font-weight: 500;
  ${media.rubber} {
    width: 100%;
    height: 15.55rem;
    padding: 1.944rem 1.66rem 0;
    box-shadow: 0.519713rem 0.519713rem 2.07885rem rgba(0, 0, 0, 0.05);
  }
  ${media.phone} {
    width: 100%;
    height: 300px;
    margin: 0 auto 1rem;
  }
`

export const AchievementContentWrapper = styled.div`
  padding: 10px;
  display: flex;
  color: ${(props) => props.theme.titleText};
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  text-align: center;

  ${media.rubber} {
    padding: 0.55rem;
    border-radius: 0.277rem;
  }

  ${media.phone} {
    padding: 0.55rem;
    border-radius: 0.277rem;
  }
`

export const AchievementTitleStyled = styled.div`
  font-size: 18px;
  margin: 15px 0;
  font-weight: 500;
  font-family: Rubik;
  font-style: normal;
  color: ${(props) => props.theme.titleText};
  ${media.rubber} {
    font-size: 1rem;
    margin-bottom: 0.83rem;
  }

  ${media.phone} {
    font-size: 20px;
    margin-bottom: 0.83rem;
  }
`
export const ImageStyled = styled.img`
  border-radius: inherit;
  height: 90px;
  width: 90px;
  margin: 5px auto;

  ${media.rubber} {
    height: 5rem;
    width: 5rem;
    margin: 0.277rem auto;
  }
`

export const ImageLock = styled.div`
  border-radius: inherit;
  height: 76px;
  width: 60px;
  margin: 5px auto;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='76' viewBox='0 0 60 76' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0.5C19.6613 0.5 11.25 8.91125 11.25 19.25V30.5H7.5C3.36375 30.5 0 33.8638 0 38V68C0 72.1363 3.36375 75.5 7.5 75.5H52.5C56.6362 75.5 60 72.1363 60 68V38C60 33.8638 56.6362 30.5 52.5 30.5H48.75V19.25C48.75 8.91125 40.3387 0.5 30 0.5ZM52.5 38L52.5075 68H7.5V38H52.5ZM18.75 30.5V19.25C18.75 13.0475 23.7975 8 30 8C36.2025 8 41.25 13.0475 41.25 19.25V30.5H18.75Z' fill='%23F45B69'/%3E%3C/svg%3E%0A");

  ${media.rubber} {
    height: 4.222rem;
    width: 3.333rem;
    margin: 0.277rem auto;
  }
`

export const AchievementDescriptionStyled = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 13.0968px;
  line-height: 16px;
  color: #b4bbc0;
  margin-bottom: 10px;

  ${media.rubber} {
    font-size: 0.7276rem;
    line-height: 0.88rem;
    margin-bottom: 0.55rem;
  }

  ${media.phone} {
    font-size: 14px;
    margin-bottom: 10px;
  }
`

export const AchievementNotUnlockedStyled = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 13px;
  color: #b4bbc0;
  margin-bottom: 10px;

  ${media.rubber} {
    font-size: 0.7276rem;
    line-height: 0.88rem;
    margin-bottom: 0.55rem;
  }

  ${media.phone} {
    font-size: 14px;
    margin-bottom: 10px;
  }
`
