import styled, { css } from 'styled-components'
import { media } from '../../../../theme/helper'

export const WrapperStyled = styled.div`
  width: 1100px;
  margin: 50px auto;
  position: relative;
  ${media.rubber} {
    width: 62.055rem;
  }
  ${media.phone} {
    width: 100vw;
    padding: 0 7% 15px;
  }
`

export const GridWrapperStyled = styled.div`
  display: flex;

  ${media.phone} {
    flex-direction: column-reverse;
  }
`

export const HistoryList = styled.div`
  width: 75%;
  display: grid;
  height: 100%;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  grid-template-columns: 30% 30% 30%;

  
  ${media.phone} {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`

export const HistoryItem = styled.div`
  height: 100px;
  width: 100%;
  margin-bottom: 10px;
  box-shadow: ${(props) => props.theme.boxShadow};

  ${media.rubber} {
    height: 5.55rem;
    margin-bottom: 0.55rem;
  }
`

export const HistoryContentWrapper = styled.div<{
  won: boolean
}>`
  display: flex;
  flex-direction: column;
  padding: 30px 30px;
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  transition: all .2s ease-in-out; 
  border: 1px solid
    ${(props) => (props.won ? 'rgba(0, 167, 225, 0.5)' : 'rgb(208, 83, 96)')};
  background: ${(props) => props.theme.elevation2};

  &:hover{
    transform: scale(1.01); 
  }

  ${media.rubber} {
    height: 5.55rem;
    padding: 1.66rem 1.66rem;
    border-radius: 0 0 0.27rem 0.27rem;
  }

  ${media.phone} {
    padding: 1.66rem 2.5rem 0;
    border-radius: 0 0 0.27rem 0.27rem;
  }
`

export const Text = styled.span`
  font-family: Rubik;
  font-style: normal;
  font-size: 18px;
  line-height: 14px;
  text-align: left;
  color: ${(props) => props.theme.titleText};
  ${media.rubber} {
    font-size: 0.88rem;
    line-height: 0.77rem;
  }
  ${media.phone} {
    font-size: 18px;
    line-height: 0.77rem;
  }
`

export const GameResultWrapper = styled.div`
  height: 100%;
  vertical-align: middle;
  text-align: left;
`

export const VictoryText = styled(Text)`
  font-size: 21px;
  line-height: 23px;
  color: rgba(0, 167, 225);
`

export const DefeatText = styled(Text)`
  font-size: 21px;
  line-height: 23px;
  color: rgb(208, 83, 96);
`

export const GameOpponentWrapper = styled.div`
  display: table-cell;
  height: 100%;
  vertical-align: middle;
  width: 400px;
  text-align: center;
`

export const GamePointsWrapper = styled.div`
  height: 100%;
  vertical-align: middle;
  text-align: left;
`

export const HeaderPageWrapper = styled.div`
  margin: 0 auto 50px;
  ${media.rubber} {
    margin: 0 auto 2.77rem;
  }
  ${media.phone} {
    padding: 0 6%;
    margin: 0 auto 1.55rem;
  }
`

export const TitleWrapper = styled.div`
  font-family: Rubik;
  font-style: normal;
  margin-bottom: 20px;
  ${media.rubber} {
    margin-bottom: 1.11rem;
  }
`

export const TitleStyled = styled.h1`
  color: ${(props) => props.theme.titleText};
  font-weight: 500;
  font-size: 36px;
  line-height: 43px;

  ${media.rubber} {
    font-size: 2rem;
    line-height: 2.388rem;
  }
`

export const TitlePageWrapper = styled.div`
  margin-bottom: 20px;
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
  font-size: 16px;
  line-height: 14px;
  color: ${(props) => props.theme.titleText};

  ${media.rubber} {
    font-size: 0.88rem;
    line-height: 0.77rem;
  }
  ${media.phone} {
    font-size: 0.88rem;
    line-height: 0.77rem;
  }
`

export const Wrapper = styled.div`
  display: flex;
  font-family: Rubik;
  font-style: normal;
  justify-content: space-between;
`

export const UserBoardWrapper = styled.div`
  display: flex;
  color: ${(props) => props.theme.commonText};
  font-family: Rubik;
  font-style: normal;
  height: 80px;
  background: ${(props) => props.theme.elevation2};
  box-shadow: ${(props) => props.theme.boxShadow};
  border-radius: 10px;
  padding: 20px 30px;
  font-weight: 500;
  margin-bottom: 50px;
  font-size: 20px;

  ${media.rubber} {
    font-size: 1.11rem;
    height: 4.44rem;
    padding: 1.11rem 1.66rem;
    border-radius: 0.55rem;
    margin-bottom: 2.77rem;
  }

  ${media.phone} {
    flex-direction: column;
    width: 100%;
    height: 130px;
  }
`


export const LeaderBoardWrapper = styled.div`
  font-family: Rubik;
  font-style: normal;
  display: flex;
  flex-direction: column;
  width: 25%;
  background: ${(props) => props.theme.elevation2};
  box-shadow: ${(props) => props.theme.boxShadow};
  border-radius: 10px;
  padding: 10px 30px 33px 30px;
  font-weight: 500;
  margin-bottom: 50px;
  color: ${(props) => props.theme.commonText};

  ${media.rubber} {
    padding: 0.55rem 1.11rem 1.83rem 1.66rem;
    margin-bottom: 2.77rem;
  }

  ${media.phone} {
    width: 100%;
  }
`

export const PlaceStyled = styled.div`
  margin-top: 15px;
  color: ${(props) => props.theme.commonText};

  ${media.rubber} {
    margin-top: 0.83rem;
  }
`


export const ScoreWrapper = styled.div`
  font-size: 13px;
  text-align: left;

  ${media.rubber} {
    font-size: 0.72rem;
  }
`

export const LeaderBoardTitleStyled = styled.div`
  text-align: center;
  font-size: 25px;
  margin-bottom: 35px;

  ${media.rubber} {
    font-size: 1.38rem;
    margin-bottom: 1.94rem;
  }
`

export const LeaderBoardItemWrapper = styled.div<{ position: number }>`
  height: 60px;
  width: 100%;
  display: flex;
  opacity: {position};
  ${({ position }: { position: number }) => {
    return css`
     opacity: ${1.0 - position / 20};
   `
  }}

  ${media.rubber} {
    height: 3.33rem;
  }
`

export const NumberStyled = styled.div<{ position: number }>`
  height: 100%;
  width: 20px;
  margin: 0 15px 0 0px;
  font-size: 38px;

  ${({ position }: { position: number }) => {
    switch (position) {
      case 1:
        return css`
          border-bottom: 3px solid #f99213;
        `
      case 2:
        return css`
          border-bottom: 3px solid #fcbd70;
        `
      case 3:
        return css`
          border-bottom: 3px solid #FCCB90;
        `
    }
  }}

  ${media.rubber} {
    font-size: 2.11rem;
    margin: 0 0.83rem 0 0px;
    width: 1.11rem;
  }
`

export const NameStyled = styled.span`
  font-size: 20px;

  ${media.rubber} {
    font-size: 1.11rem;
  }
`

export const LeaderBoardItemContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`

export const StatisticTitle = styled.div`
  margin-left: 20px;

  ${media.rubber} {
    margin-left: 1.11rem;
    font-size: 1.11rem;
  }

  ${media.phone} {
    margin-top: 5px;
    margin-left: 0;
  }
`

export const UsernameStyled = styled.span`
  font-size: 20px;
  
  ${media.rubber} {
    font-size: 1.11rem;
  }

`