import { createStore } from 'effector-logger'

import { getLessonLastPage, getLessonPages, getPage, setLoading } from './events'

import { LessonState } from './types'

const initialState: LessonState = {
  loading: true,
  lessonId: '',
  page: {
    title: { en: '', ru: '' },
    description: '',
    tasks: [],
    lives: 1,
  },
  pages: [],
}

export const lesson = createStore<LessonState>(initialState)
  .on(getLessonLastPage.done, (state, { result }) => ({
    ...state,
    lessonId: result.data.lessonId,
    page: {
      tasks: result.data.page.tasks,
      title: result.data.page.title,
      description: result.data.page.description,
      lives: result.data.page.lives,
    },
    loading: false,
  }))
  .on(getLessonPages.done, (state, { result }) => ({
    ...state,
    loading: false,
    pages: result.data.pages,
  }))
  .on(getPage.done, (state, { result }) => ({
    ...state,
    page: result.data.page,
  }))
  .on(setLoading.done, (state, { result }) => ({
    ...state,
    loading: result,
  }))

