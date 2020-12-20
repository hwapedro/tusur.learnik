import React from 'react'

import { getPage } from '../../../../../store/lessons/events'
import { useLessonPagesFetcher } from './hooks/useLessonPagesFetcher'

import {
  WrapperNavigation,
  NavigationTitleWrapper,
  NavigationTitleStyled,
  TaskLinkStyled,
} from './Navigation.style'

export const Navigation = () => {
  const lessonStore = useLessonPagesFetcher()
  const handlePageChange = (pageId: string) => {
    getPage(pageId)
  }

  const pageList = lessonStore.pages.map((page, index) => {

    return (
      <div key={index}>
        <TaskLinkStyled
          isDone={page.done}
          onClick={() => page.done && handlePageChange(page._id)}
        >
          {page.title.ru}
        </TaskLinkStyled>
      </div>
    )
  })

  return (
    <WrapperNavigation>
      <NavigationTitleWrapper>
        <NavigationTitleStyled>Страницы</NavigationTitleStyled>
      </NavigationTitleWrapper>
      {pageList}
    </WrapperNavigation>
  )
}
