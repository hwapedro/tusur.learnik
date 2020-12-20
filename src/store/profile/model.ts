import { createStore } from 'effector-logger'

import { getProfile, setLoading, setLanguage, changeTheme, getProfileStats, setOpenLangMenu, editProfile, getAchievements, deleteAchievement, addNotification} from './events'

import { ProfileState } from './types'

const initialState: ProfileState = {
  info: {
    username: '',
    language: 'ru',
    email: '',
    firstName: '',
    lastName: '',
    avatar: 0
  },
  stats: {
    courseCount: 0,
    examCount: 0,
    pointCount: 0,
    taskCount: 0,
  },
  achievements: [],
  achievementsNotif: [],
  achievement: {},
  isLangMenuOpen: false,
  loading: true,
  theme: localStorage.getItem('theme') === 'true',
}

export const profileStore = createStore<ProfileState>(initialState)
  .on(getProfile.done, (state, { result }) => ({
    ...state,
    info: { ...state.info, ...result.data.info },
    loading: false,
  }))
  .on(getProfileStats.done, (state, { result }) => ({
    ...state,
    stats: { ...result.data.stats },
    loading: false,
  }))
  .on(getAchievements.done, (state, { result }) => ({
    ...state,
    achievements: result.data.badges,
  }))
  .on(deleteAchievement.done, (state, { result }) => ({
    ...state,
    achievementsNotif: state.achievementsNotif.filter(achievement => achievement._id !== result._id),
  }))
  .on(addNotification.done, (state, { result }) => ({
    ...state,
    achievementsNotif: [...state.achievementsNotif, result],
  }))
  .on(setLanguage.done, (state, { result }) => {
    return {
      ...state,
      isLangMenuOpen: false,
      info: { ...state.info, language: result.data.info.language },
    }
  })
  .on(changeTheme.done, (state, { result }) => {
    return {
      ...state,
      theme: result,
    }
  })
  .on(editProfile.done, (state, { result }) => ({
    ...state,
    info: result.data.info,
  }))
  .on(setOpenLangMenu.done, (state, { result }) => ({
    ...state,
    isLangMenuOpen: result,
  }))
  .on(setLoading.done, (state, { result }) => ({
    ...state,
    loading: true,
  }))

