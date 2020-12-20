import { useEffect, FC } from 'react'
import { useStore } from 'effector-react'

import { getProfile, getProfileStats } from '../../../../../store/profile/events'
import { profileStore } from '../../../../../store/profile/model'
import { ProfileState } from '../../../../../store/profile/types'

export const useProfileFetcher = (): ProfileState => {
  const profile = useStore<ProfileState>(profileStore)

  useEffect(() => {
    if (!profile.info.username) {
      getProfile({})
    }
    getProfileStats({})
  }, [])

  return profile
}
