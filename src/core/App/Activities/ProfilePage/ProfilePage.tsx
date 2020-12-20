import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import man from '../../../../assets/svg/profile/man.svg'
import date from '../../../../assets/svg/profile/date.svg'
import { useProfileFetcher } from './hooks/useProfileFetcher'
import { logout } from '../../../../store/auth/events'
import { EditFormProfile } from './EditFormProfile/EditFormProfile'
import { I18nWrapper } from '../../I18n/I18nWrapper/I18nWrapper'
import {
  WrapperStyled,
  ProfileWrapper,
  LeftWrapper,
  RightWrapper,
  UsernameStyled,
  EmailStyled,
  ButtonWrapper,
  EditButtonStyled,
  ImageWrapper,
  ImageStyled,
  InfoWrapper,
  LabelStyled,
  InfoContainer,
  StatsWrapper,
  StatsContainer,
  LogoutButtonWrapper,
  LogoutButtonStyled,
  StatsItemWrapper,
  NumberStyled,
  TextStyled,
  InfoItemWrapper,
  LanguageInfo,
  ImageIconStyled,
} from './ProfilePage.style'

import { LoadingSpinner } from '../../LoadingSpinner/LoadingSpinner'
import { AVATARS } from '../../../../global/constant'

export const ProfilePage = () => {
  const { stats, info, loading } = useProfileFetcher()
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const history = useHistory()

  if(loading){
    return <LoadingSpinner />
  }

  
  if (isEdit) {
    return (
      <WrapperStyled>
       <EditFormProfile setIsEdit={setIsEdit} info={info} />
      </WrapperStyled>
    )
  }

  if (isEdit) {
    return (
      <WrapperStyled>
        <EditFormProfile setIsEdit={setIsEdit} info={info} />
      </WrapperStyled>
    )
  }

  return (
    <WrapperStyled>
      <ProfileWrapper>
        <LeftWrapper>
          <UsernameStyled>{info.username}</UsernameStyled>
          <EmailStyled>{info.email}</EmailStyled>
          <ButtonWrapper>
            <EditButtonStyled onClick={() => setIsEdit(true)}>Edit</EditButtonStyled>
          </ButtonWrapper>
        </LeftWrapper>
        <RightWrapper>
          <ImageWrapper onClick={() => setIsEdit(true)}>
            <ImageIconStyled src={AVATARS[info.avatar].path} />
          </ImageWrapper>
        </RightWrapper>
      </ProfileWrapper>

      {((info.firstName && info.lastName) || info.language || info.bday) && (
        <InfoWrapper>
          <LabelStyled><I18nWrapper pathString="profile.info" /></LabelStyled>
          <InfoContainer>
            {(info.firstName || info.lastName) && (
              <InfoItemWrapper>
                <ImageStyled
                  style={{
                    height: '20px',
                    width: '20px',
                  }}
                  src={man}
                />
                {info.lastName}
              </InfoItemWrapper>
            )}
            {info.bday && (
              <InfoItemWrapper>
                <ImageStyled
                  style={{
                    height: '24px',
                    width: '24px',
                  }}
                  src={date}
                />
                {info.bday}
              </InfoItemWrapper>
            )}
            {info.language && (
              <InfoItemWrapper>
                <LanguageInfo code={info.language}>{info.language}</LanguageInfo>
              </InfoItemWrapper>
            )}
          </InfoContainer>
        </InfoWrapper>
      )}

      <StatsWrapper>
        <LabelStyled>
          <I18nWrapper pathString="profile.stats" />
        </LabelStyled>
        <StatsContainer>
          <StatsItemWrapper>
            <NumberStyled>{stats.courseCount}</NumberStyled>
            <TextStyled><I18nWrapper pathString="profile.courseCount" /></TextStyled>
          </StatsItemWrapper>
          <StatsItemWrapper>
            <NumberStyled>{stats.examCount}</NumberStyled>
            <TextStyled><I18nWrapper pathString="profile.examCount" /></TextStyled>
          </StatsItemWrapper>
          <StatsItemWrapper>
            <NumberStyled>{stats.pointCount}</NumberStyled>
            <TextStyled><I18nWrapper pathString="profile.pointCount" /></TextStyled>
          </StatsItemWrapper>
          <StatsItemWrapper>
            <NumberStyled>{stats.taskCount}</NumberStyled>
            <TextStyled><I18nWrapper pathString="profile.taskCount" /></TextStyled>
          </StatsItemWrapper>
        </StatsContainer>
      </StatsWrapper>

      <LogoutButtonWrapper>
        <LogoutButtonStyled
          onClick={async () => {
            logout(null)
            history.push('/')
          }}
        >
          <I18nWrapper pathString="profilePage.logout" />
        </LogoutButtonStyled>
      </LogoutButtonWrapper>
    </WrapperStyled>
  )
}
