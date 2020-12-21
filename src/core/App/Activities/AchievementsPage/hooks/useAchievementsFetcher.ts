import { useEffect } from 'react'
import { useStore } from 'effector-react'

import { getAchievements } from '../../../../../store/profile/events'
import { profileStore } from '../../../../../store/profile/model'
import { Badge } from '../../../../../store/profile/types'

export const useAchievementsFetcher = (): {
  achievements: Array<Badge>
} => {
  const { achievements, info} = useStore(profileStore)
  const { language } = info

  useEffect(() => {
    getAchievements({})
  }, [language])

  return { achievements }
}
