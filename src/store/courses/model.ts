import { createStore } from 'effector-logger'

import { getCourses, getCourseLessons, setLoading } from './events'

import { CoursesState } from './types'

const initialState: CoursesState = {
  courses: [],
  course: {
    title: '',
    description: '',
    lessons: [],
    lessonsDone: 0,
  },
  loading: true,
}

export const coursesStore = createStore<CoursesState>(initialState)
  .on(getCourses.done, (state, { result }) => ({
    ...state,
    courses: result.data.courses,
    loading: false
  }))
  .on(getCourseLessons.done, (state, { result }) => ({
    ...state,
    course: {
      ...state.course,
      lessons: result.data.lessons,
      title: result.data.course.title,
      description: result.data.course.description,
      lessonsDone: result.data.lessonsDone,
    },
    loading: false
  }))
  .on(setLoading.done, (state, { result }) => ({
    ...state,
    loading: true,
  }))

coursesStore.watch((...args) => {})
