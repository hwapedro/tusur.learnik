import { createEffect } from 'effector-logger'

import api, { reqDone } from '../../global/api'

import { arenaParams, arenaVictoryParams } from './types'
/*
eslint-disable
*/
export const enterRoom = createEffect<arenaParams, arenaParams>('enter Room').use(
  (data) => data
)

export const setArenaVictory = createEffect<arenaVictoryParams, arenaVictoryParams>(
  'end arena'
).use((data) => data)

export const joinCurrentRoom = createEffect<$TSFixMe, $TSFixMe, $TSFixMe>(
  'join arena room'
).use(() => api.request.get(`/arena/current`))

export const getNextTask = createEffect<$TSFixMe, $TSFixMe, $TSFixMe>(
  'get Next Task'
).use(() => api.request.get(`/arena/task`))

export const submitTask = createEffect<$TSFixMe, $TSFixMe, $TSFixMe>(
  'submit task'
).use(({ csrf, ...data }) =>
  api.request.post(`/arena/submit`, data, { headers: { 'csrf-token': csrf } })
)


export const getHistory = createEffect<$TSFixMe, $TSFixMe, $TSFixMe>(
  'get history'
).use(() => api.request.get(`/arena/history`))

export const setQueue = createEffect<$TSFixMe, $TSFixMe, $TSFixMe>(
  'set page loading'
).use((data) => data)

export const setLoading = createEffect<$TSFixMe, $TSFixMe, $TSFixMe>(
  'set page loading'
).use(() => true)

export const setError = createEffect<$TSFixMe, $TSFixMe, $TSFixMe>('set error').use(
  () => true
)

export const getLeaderBoard = createEffect<$TSFixMe, $TSFixMe, $TSFixMe>(
  'get leaderboard'
).use(async () => await api.request.get(`/leaderboard/top`))