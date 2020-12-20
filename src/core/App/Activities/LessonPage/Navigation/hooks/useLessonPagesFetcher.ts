import { useEffect } from 'react'
import { useStore } from 'effector-react'
import { useParams } from 'react-router-dom'

import { getLessonPages } from '../../../../../../store/lessons/events'
import { lesson } from '../../../../../../store/lessons/model'

export function useLessonPagesFetcher() {
  const lessonsStore = useStore(lesson)
  const { lessonIndex } = useParams()

  useEffect(() => {
    getLessonPages({ lessonIndex })
  }, [])

  return lessonsStore
}
