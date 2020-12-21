import React from 'react'

import {
  WrapperStyled,
  HistoryList,
  HistoryItem,
  HistoryContentWrapper,
  GameResultWrapper,
  GamePointsWrapper,
  Text,
  VictoryText,
  DefeatText,
  Wrapper,
  UserBoardWrapper,
  NumberStyled,
  ScoreWrapper,
  LeaderBoardWrapper,
  LeaderBoardTitleStyled,
  LeaderBoardItemWrapper,
  NameStyled,
  LeaderBoardItemContentWrapper,
  StatisticTitle,
  UsernameStyled,
  GridWrapperStyled,
} from './ArenaHistoryPage.style'

import { useArenaHistoryFetcher } from './hooks/useArenaHistoryFetcher'
import { LoadingSpinner } from '../../LoadingSpinner/LoadingSpinner'
import { I18nWrapper } from '../../I18n/I18nWrapper/I18nWrapper'

export const ArenaHistoryPage = () => {
  const {
    history,
    loadingHistory,
    loadingBoard,
    leaderBoard,
    place,
    username,
    arenaStats,
    points,
  } = useArenaHistoryFetcher()

  if (loadingHistory || loadingBoard) {
    return <LoadingSpinner />
  }

  return (
    <WrapperStyled>
      <Wrapper>
        <UserBoardWrapper>
          <UsernameStyled>{username}</UsernameStyled>
          <StatisticTitle>
            <span role="img">🥇 </span>
            <I18nWrapper pathString="arena.totalWins" /> :{' '}
            {arenaStats.battlesTotal - arenaStats.battlesLost}{' '}
          </StatisticTitle>
          <StatisticTitle>
            <span role="img">🔥 </span>
            <I18nWrapper pathString="arena.totalPoints" /> : {points}
          </StatisticTitle>
        </UserBoardWrapper>
      </Wrapper>
      <GridWrapperStyled>
        <HistoryList>
          {history.reverse().map((item, index) => (
            <HistoryItem key={index}>
              <HistoryContentWrapper won={item.won}>
                <GameResultWrapper>{resolveResult(item.won)}</GameResultWrapper>
                <GamePointsWrapper>
                  <Text>
                    {item.points} <I18nWrapper pathString="arena.pointsGained" />
                  </Text>
                </GamePointsWrapper>
              </HistoryContentWrapper>
            </HistoryItem>
          ))}
        </HistoryList>
        <LeaderBoardWrapper>
          <LeaderBoardTitleStyled>
            <span role="img">🏆 </span><I18nWrapper pathString="arena.leaderboard" />
          </LeaderBoardTitleStyled>
          {leaderBoard.data &&
            leaderBoard.data.map((el: any, index: number) => (
              <LeaderBoardItemWrapper position={index + 1}>
                <NumberStyled position={index + 1}>{index + 1}.</NumberStyled>
                <LeaderBoardItemContentWrapper>
                  <ScoreWrapper>
                    {el[1]} <I18nWrapper pathString="arena.points" />
                    {username === el[0] && <I18nWrapper pathString="arena.isYou" />}
                  </ScoreWrapper>
                  <NameStyled>{el[0]}</NameStyled>
                </LeaderBoardItemContentWrapper>
              </LeaderBoardItemWrapper>
            ))}
          {!leaderBoard.data.find((el: any) => el[0] === username) && (
            <LeaderBoardItemWrapper position={1}>
              <NumberStyled position={place.position + 1}>
                {place.position + 1}.
              </NumberStyled>
              <LeaderBoardItemContentWrapper>
                <ScoreWrapper>
                  {place.points} <I18nWrapper pathString="arena.isYou" />
                </ScoreWrapper>
                <NameStyled>{username}</NameStyled>
              </LeaderBoardItemContentWrapper>
            </LeaderBoardItemWrapper>
          )}
        </LeaderBoardWrapper>
      </GridWrapperStyled>
    </WrapperStyled>
  )
}

const resolveResult = (won: boolean) => {
  if (won) {
    return (
      <VictoryText>
        {' '}
        <I18nWrapper pathString="arena.winMessage" />
      </VictoryText>
    )
  } else {
    return (
      <DefeatText>
        <I18nWrapper pathString="arena.loseMessage" />
      </DefeatText>
    )
  }
}
