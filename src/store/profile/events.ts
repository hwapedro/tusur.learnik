import { createEffect } from 'effector-logger'

import api from '../../global/api'

import { } from './types'

export const getProfile = createEffect<$TSFixMe, $TSFixMe, $TSFixMe>('get profile').use(
  async () => await api.request.get(`/user/info`)
)

export const getProfileStats = createEffect<$TSFixMe, $TSFixMe, $TSFixMe>(
  'get profile'
).use(async () => await api.request.get(`/user/stats`))

export const getAchievements = createEffect<$TSFixMe, $TSFixMe, $TSFixMe>(
  'get achievements'
).use(async () => await api.request.get(`/user/achievements`))

export const addNotification = createEffect<$TSFixMe, $TSFixMe, $TSFixMe>(
  'add achievements'
).use(async (data) => data)

export const deleteAchievement = createEffect<$TSFixMe, $TSFixMe, $TSFixMe>(
  'delete achievements'
).use(async (_id) => ({ _id }))

export const setLanguage = createEffect<$TSFixMe, $TSFixMe, $TSFixMe>(
  'set language'
).use((data) => api.request.put(`/user/changeLang`, data))

export const setLoading = createEffect<$TSFixMe, $TSFixMe, $TSFixMe>(
  'set page loading'
).use(() => true)

export const changeTheme = createEffect<$TSFixMe, $TSFixMe, $TSFixMe>('change theme').use(
  (theme) => theme
)

export const setOpenLangMenu = createEffect<$TSFixMe, $TSFixMe, $TSFixMe>(
  'change theme'
).use((isMenuOpen) => isMenuOpen)

export const editProfile = createEffect<$TSFixMe, $TSFixMe, $TSFixMe>(
  'edit profile'
).use(async (info) =>
  await api.request.put(`/user/info`, info)
)

