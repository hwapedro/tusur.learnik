import React, { useEffect, useRef } from 'react'

import { deleteAchievement } from '../../store/profile/events'

import {
  NotificationWrapper,
  ImageStyled,
  TextStyled,
  ContentWrapper,
} from './Notification.style'

export const Notification = ({ data }: any) => {
  const timerToClearSomewhere = useRef(0)

  useEffect(() => {
    timerToClearSomewhere.current = setTimeout(() => {
      deleteAchievement(data._id)
      clearTimeout(timerToClearSomewhere.current)
    }, 5000)
  }, [])

  return (
    <NotificationWrapper
      onClick={() => {
        clearTimeout(timerToClearSomewhere.current)
        deleteAchievement(data._id)
      }}
    >
      <ContentWrapper>
        <ImageStyled src={data.icon}></ImageStyled>
        <TextStyled>Вы получили достижение</TextStyled>
      </ContentWrapper>
    </NotificationWrapper>
  )
}
