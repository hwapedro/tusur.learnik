import { useStore } from 'effector-react'

import { profileStore } from "../../../../../store/profile/model"
import { getCourses, setLoading } from './../../../../../store/courses/events'
import { coursesStore } from './../../../../../store/courses/model'


import { useEffect } from 'react'

export function useCoursesFetcher() {
  const { courses, loading } = useStore(coursesStore)
  const { info } = useStore(profileStore)
  const { language } = info
  
  useEffect(() => {
    setLoading(null)
    getCourses({})
  }, [language])

  return {courses, loading}
}
