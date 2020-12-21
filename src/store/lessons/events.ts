import { createEffect } from 'effector-logger'

import api from '../../global/api'

export const getLessonLastPage = createEffect<$TSFixMe, $TSFixMe, $TSFixMe>(
  'get all lessons'
).use((data) =>
  api.request.get(`/lesson/${data.lessonIndex}/page/latest`, {
    params: { ci: data.courseIndex },
  })
)

export const getLessonPages = createEffect<$TSFixMe, $TSFixMe, $TSFixMe>(
  'get lesson pages'
).use((data) =>
  api.request.get(`/lesson/${data.lessonIndex}/pages`, {
    params: { ci: data.courseIndex },
  })
)

getLessonPages.done.watch(({ params, result }) => {
  // console.log(params, result)
})

export const submitTask = createEffect<$TSFixMe, $TSFixMe, $TSFixMe>(
  'get all lessons'
).use(({ csrf, ...data }) =>
  api.request.post(`/task/submit`, data, { headers: { 'csrf-token': csrf } })
)

export const getPage = createEffect<$TSFixMe, $TSFixMe, $TSFixMe>(
  'get lesson page'
).use((pageId) => api.request.get(`/page/${pageId}`))

getPage.done.watch(({ params, result }) => {
  // console.log(params, result)
})

export const setLoading = createEffect<$TSFixMe, $TSFixMe, $TSFixMe>(
  'set page loading'
).use(() => true)
