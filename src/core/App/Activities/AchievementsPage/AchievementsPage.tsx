import React from 'react'

import { useAchievementsFetcher } from './hooks/useAchievementsFetcher'
import {
  WrapperStyled,
  AchievementsCardStyled,
  AchievementsWrapper,
  AchievementContentWrapper,
  AchievementTitleStyled,
  AchievementDescriptionStyled,
  ImageStyled,
  ImageLock,
  AchievementNotUnlockedStyled,
} from './AchievementsPage.style'

import { I18nWrapper } from '../../I18n/I18nWrapper/I18nWrapper'

export const AchievementsPage = () => {
  const { achievements } = useAchievementsFetcher()

  return (
    <WrapperStyled>
      <AchievementsWrapper>
        {achievements.map((achievement) => (
          <AchievementsCardStyled>
            <AchievementContentWrapper>
              {achievement.mine ? <ImageStyled src={achievement.icon} /> : <ImageLock />}

              <AchievementTitleStyled>{achievement.title}</AchievementTitleStyled>
              <AchievementDescriptionStyled
                dangerouslySetInnerHTML={{ __html: achievement.description }}
              />
              {!achievement.mine && (
                <AchievementNotUnlockedStyled>
                  <I18nWrapper pathString="achievementPage.notUnlocked" />
                </AchievementNotUnlockedStyled>
              )}
            </AchievementContentWrapper>
          </AchievementsCardStyled>
        ))}
      </AchievementsWrapper>
    </WrapperStyled>
  )
}
