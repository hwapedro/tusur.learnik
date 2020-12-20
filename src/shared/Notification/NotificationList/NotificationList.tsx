import React, { useEffect, useRef } from 'react'
import { useStore } from 'effector-react'

import { Notification } from '../Notification'
import { profileStore } from '../../../store/profile/model'
import { NotificationListWrapper } from './NotificationList.style'

export const NotificationList = () => {
  const { achievementsNotif } = useStore(profileStore)

  return (
    <NotificationListWrapper>
      {achievementsNotif.map((achievement) => (
        <Notification data={achievement} />
      ))}
    </NotificationListWrapper>
  )
}
