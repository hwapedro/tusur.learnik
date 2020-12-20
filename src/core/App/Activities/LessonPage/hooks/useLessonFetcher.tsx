import { useEffect, useState } from 'react'
import { useStore } from 'effector-react'
import { useParams } from 'react-router-dom'

import { getLessonLastPage, setLoading } from '../../../../../store/lessons/events'
import { lesson } from '../../../../../store/lessons/model'
import { profileStore } from "../../../../../store/profile/model"

export function useLessonFetcher() {
  const lessonStore = useStore(lesson)
  const [lessonId, setLessonId] = useState<any>()
  const [tasks, setTasks] = useState<any>()
  const [page, setPage] = useState<any>({})
  const [loading, setPageLoading] = useState<any>(true)
  const [currentTask, setCurrentTask] = useState<any>(lessonStore.page.tasks[0])
  const [currentLives, setLives] = useState<any>(lessonStore.page.lives)
  const { courseIndex, lessonIndex } = useParams()
  const { info } = useStore(profileStore)
  const { language } = info

  useEffect(() => {
    if (!lessonStore.loading) {
      setPage({
        title: lessonStore.page.title,
        description: lessonStore.page.description,
        lives: lessonStore.page.lives
      })
      setLives(lessonStore.page.lives)
      setTasks(lessonStore.page.tasks)
      setCurrentTask(lessonStore.page.tasks[0])
      setLessonId(lessonStore.lessonId)
      setPageLoading(false)
    }
  }, [lessonStore, language])

  useEffect(() => {
    setPageLoading(true)
    getLessonLastPage({ courseIndex, lessonIndex })
  }, [lessonIndex])


  return {
    page,
    tasks,
    currentTask,
    setCurrentTask,
    currentLives,
    setLives,
    lessonId,
    loading,
    setPageLoading
  }
}