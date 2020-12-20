import { createStore } from 'effector-logger'

import {
  enterRoom,
  setArenaVictory,
  joinCurrentRoom,
  getNextTask,
  submitTask,
  getHistory,
  setLoading,
  setError,
  getLeaderBoard,
  setQueue,
} from './events'

import { ArenaState } from './types'
import { ERROR_MESSAGE } from '../../constants'

const initialState: ArenaState = {
  loadingRoom: true,
  loadingTask: true,
  loadingHistory: true,
  loadingBoard: true,
  opponent: [],
  room: { courseIndex: 0, d: '', history: [], tasks: [], users: [], winner: -1 },
  task: {},
  victory: '',
  finished: false,
  error: false,
  history: [],
  leaderBoard: [],
  place: {},
  battlesLost: 0,
  battlesTotal: 0,
  battlesWon: 0,
  points: 0,
  queue: {
    inQueue: false,
    queueTime: 0,
    courseIndex: 0
  }
}

export const arena = createStore(initialState)
  .on(enterRoom.done, (state, { result }) => ({
    ...state,
    opponent: result.opponent,
  }))
  .on(setArenaVictory.done, (state, { result }) => ({
    ...state,
    victory: result.victory,
    finished: true,
  }))
  .on(joinCurrentRoom.done, (state, { result }) => ({
    ...state,
    room: result.data.room,
    loadingRoom: false,
  }))
  .on(getNextTask.done, (state, { result }) => ({
    ...state,
    task: result.data.task,
    loadingTask: false,
  }))
  .on(getHistory.done, (state, { result }) => ({
    ...state,
    history: result.data.history,
    loadingHistory: false,
    battlesLost: result.data.battlesLost,
    battlesTotal: result.data.battlesTotal,
    battlesWon: result.data.battlesWon,
    points: result.data.points
  }))
 .on(setQueue.done, (state, { result }) => ({
  ...state,
  queue: {
    queueTime:  result.time,
    inQueue: result.queue,
    courseIndex: result.courseIndex
  }
 })) 
  .on(setLoading.done, (state, { result }) => ({
    ...state,
    loadingRoom: true,
    loadingTask: true,
    loadingHistory: true
  }))
  .on(setError.done, (state, { result }) => ({
    ...state,
    error: true,
  }))
  .on(getLeaderBoard.done, (state, { result }) => ({
    ...state,
    leaderBoard: result.data.leaderboard,
    place: result.data.userData,
    loadingBoard: false
  }))