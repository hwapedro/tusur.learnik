import { useEffect, FC } from 'react'
import { useStore } from 'effector-react'
import { useParams } from 'react-router-dom'

import { getCourseLessons, setLoading } from '../../../../../store/courses/events'
import { profileStore } from '../../../../../store/profile/model'
import { coursesStore } from '../../../../../store/courses/model'
import { arena } from '../../../../../store/arena/model'
import { OneCourse } from '../../../../../store/courses/types'

export const useCourseFetcher = (): OneCourse & {
  courseIndex: string | undefined
  loading: boolean
  inQueue: boolean
  queueTime: number
} => {
  const { title, description, lessons, lessonsDone } = useStore(coursesStore).course
  const { loading } = useStore(coursesStore)
  const { info } = useStore(profileStore)
  const { queueTime, inQueue } = useStore(arena).queue
  const { language } = info

  const { courseIndex } = useParams<{ courseIndex: string | undefined }>()

  useEffect(() => {
    setLoading(null)
    getCourseLessons(courseIndex)
  }, [language])

  return {
    title,
    description,
    lessons,
    lessonsDone,
    courseIndex,
    loading,
    inQueue,
    queueTime,
  }
}
