import { createStore } from 'effector-logger'

import { getNews, getMoreNews, getArticle } from './events'

import { NewsState } from './types'

const initialState: NewsState = {
  loading: true,
  news: [],
  article: {
    date: '',
    title: '',
    index: 0,
    description: '',
    icon: '',
    _id: '',
  },
  nextFrom: 0,
}

export const newsStore = createStore<NewsState>(initialState)
  .on(getNews.done, (state, { result }) => ({
    ...state,
    news: [...result.data.articles],
    nextFrom: result.data.nextFrom,
  }))
  .on(getMoreNews.done, (state, { result }) => ({
    ...state,
    news: [...state.news, ...result.data.articles],
    nextFrom: result.data.nextFrom,
  }))
  .on(getArticle.done, (state, { result }) => ({
    ...state,
    article: result.data.article,
  }))
