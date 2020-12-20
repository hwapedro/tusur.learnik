import React, { FC, useState, useEffect, useContext, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { useStore } from 'effector-react'

import {
  TicketWrapper,
  TextWrapper,
  ArenaButtonLeaveStyled,
  TextStyled,
} from './QueueTicket.style'

import { SocketContext } from '../../App.route'
import { arena } from '../../../../store/arena/model'
import { setQueue } from '../../../../store/arena/events'
import { I18nWrapper } from '../../I18n/I18nWrapper/I18nWrapper'

export const QueueTicket: FC = () => {
  const { queueTime, inQueue, courseIndex } = useStore(arena).queue
  const params = useParams<any>()
  const socket = useContext(SocketContext)
  const [show, setShow] = useState<boolean>(false)
  const [timer, setTimer] = useState<number>(0)
  const increment = useRef<any>(null)

  useEffect(() => {
    setShow(inQueue && !params.courseIndex)
    if (inQueue) {
      increment.current = setInterval(() => {
        setTimer(Math.floor((new Date().getTime() - queueTime) / 1000))
      }, 1000)
    } else {
      clearInterval(increment.current)
    }
  }, [inQueue, params])
  
  if (!show) {
    return null
  }
  return (
    <TicketWrapper show>
      <TextWrapper>
        <TextStyled>
          {' '}
          <I18nWrapper pathString="arena.inQueue" />
        </TextStyled>
        <ArenaButtonLeaveStyled
          onClick={() => {
            setQueue({ time: 0, queue: false })
            socket.send({
              type: 'leaveArena',
              course: courseIndex,
            })
          }}
        >
          <I18nWrapper pathString="arena.cancelQueue" />{' '}
          {new Date(timer * 1000).toISOString().substr(14, 5)}
        </ArenaButtonLeaveStyled>
      </TextWrapper>
    </TicketWrapper>
  )
}
