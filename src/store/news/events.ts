import { createEffect } from 'effector-logger'

import api from '../../global/api'

import { } from './types'

export const getNews = createEffect<$TSFixMe, $TSFixMe, $TSFixMe>(
  'get news'
).use((params) =>
  api.request.get(`/news/dashboard`, { params: params })
)

export const getMoreNews = createEffect<$TSFixMe, $TSFixMe, $TSFixMe>(
  'get more news'
).use((params) =>
  api.request.get(`/news/dashboard`, { params: params })
)


export const getArticle = createEffect<$TSFixMe, $TSFixMe, $TSFixMe>(
  'get article'
).use((index) =>
  api.request.get(`/news/${index}`)
)


export const setLoading = createEffect<$TSFixMe, $TSFixMe, $TSFixMe>(
  'set page loading'
).use(() => true)

