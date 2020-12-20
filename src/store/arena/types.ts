import { Task } from '../lessons/types'

//events

export interface arenaParams {
  opponent: Opponent
}

export interface arenaVictoryParams {
  victory: string
}

export interface Room {
  d: string
  history: Array<any>
  tasks: Array<Task>
  users: Array<{ points: number; taskIndex: number; user: string }>
  winner: number
  courseIndex: number
}

export interface Opponent {}

export interface Error {
  code: number
  message: string
}

export interface HistoryItem {
  date: string
  opponent: { username: string; avatar: string; points: number }
  points: number
  won: boolean
}

//models

export interface ArenaState {
  opponent: Opponent
  room: Room
  task: any
  loadingRoom: boolean
  loadingTask: boolean
  loadingBoard: boolean
  loadingHistory: boolean,
  victory: string
  finished: boolean
  error: boolean
  history: Array<HistoryItem>
  leaderBoard: any,
  place: any,
  battlesLost: any
  battlesTotal: any
  battlesWon: any
  points: any
  queue: {
    inQueue: boolean
    queueTime: number
    courseIndex: number
  }

}
