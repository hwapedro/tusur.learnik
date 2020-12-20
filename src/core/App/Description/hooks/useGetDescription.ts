import { useEffect, useState } from 'react'
import { useStore } from 'effector-react'
import { useParams } from 'react-router-dom'

import { getLessonLastPage, setLoading } from '../../../../store/lessons/events'
import { lesson } from '../../../../store/lessons/model'
import { coursesStore } from '../../../../store/courses/model'

export function useGetDescription() {
  const { page } = useStore(lesson)
  const { course } = useStore(coursesStore)
  const [description, setDescription] = useState('')

  const { lessonIndex } = useParams()

  useEffect(() => {
    console.log(!!lessonIndex)
    const newdescription = !!lessonIndex ? page.description : course.description
    setDescription(newdescription)
  }, [page, course])

  return description
}
