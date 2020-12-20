import { createEffect } from 'effector-logger'

import api from '../../global/api'

import {} from './types'

export const getCourses = createEffect<$TSFixMe, $TSFixMe, $TSFixMe>('get courses').use(() => api.request.get('/course/dashboard'))
export const getCourseLessons = createEffect<$TSFixMe, $TSFixMe, $TSFixMe>('get all lessons').use(courseIndex =>
  api.request.get(`/course/${courseIndex}/lessons?course=${courseIndex}`)
)
export const setLoading = createEffect<$TSFixMe, $TSFixMe, $TSFixMe>(
  'set page loading'
).use(() => true)