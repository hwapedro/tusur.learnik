import { useEffect, useState } from 'react'
import { useStore } from 'effector-react'
import { useHistory } from 'react-router-dom'

import { getHistory, getLeaderBoard } from '../../../../../store/arena/events'
import { arena } from '../../../../../store/arena/model'
import { profileStore } from '../../../../../store/profile/model'

export function useArenaHistoryFetcher() {
  const { info } = useStore(profileStore)
  const { history, loadingHistory, leaderBoard, place, battlesLost, battlesWon, battlesTotal, loadingBoard, points } = useStore(arena)

  useEffect(() => {
    getHistory(null)
    getLeaderBoard(null)
  }, [])

  return {
    place, history, loadingBoard, loadingHistory, leaderBoard, username: info.username, arenaStats: {
      battlesLost,
      battlesTotal,
      battlesWon,
    }, points
  }
}
