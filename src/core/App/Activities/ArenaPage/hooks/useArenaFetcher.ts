import { useEffect, useState } from 'react'
import { useStore } from 'effector-react'
import { useHistory } from 'react-router-dom'

import {
  joinCurrentRoom,
  getNextTask,
  setLoading,
  setError,
} from '../../../../../store/arena/events'
import { arena } from '../../../../../store/arena/model'
import { profileStore } from '../../../../../store/profile/model'

export function useArenaFetcher() {
  const { room, loadingRoom, loadingTask, task, victory, finished, error } = useStore(arena)
  const history = useHistory()

  useEffect(() => {
    setLoading(null)
    joinCurrentRoom(null)
    getNextTask(null).then(({ data }) => {
      if (data.error) {
        setError(null)
        history.push(
          `${history.location.pathname.split('/').slice(0, -1).join('/')}/learn`
        )
      }
    })
  }, [])

  return {
    room,
    currentTask: task,
    loadingRoom,
    loadingTask,
    victory,
    finished,
    error,
  }
}
