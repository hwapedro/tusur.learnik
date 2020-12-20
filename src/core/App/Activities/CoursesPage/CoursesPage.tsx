import React from 'react'
import { useHistory } from 'react-router-dom'

import { useCoursesFetcher } from './hooks/useCoursesFetcher'

import { I18nWrapper } from '../../I18n/I18nWrapper/I18nWrapper'
import {
  WrapperStyled,
  CourseCardStyled,
  CoursesWrapper,
  CourseBottomWrapper,
  CourseTitleStyled,
  CourseAnnotationStyled,
  ContinueStyled,
  LessonsDoneStyled,
  CompletedTextStyled,
  LessonsAmountStyled,
  GradientLineStyled,
  CourseContentWrapper,
  BeginStyled,
} from './CoursesPage.style'
import { LoadingSpinner } from '../../LoadingSpinner/LoadingSpinner'

export const CoursesPage = () => {
  const { courses, loading } = useCoursesFetcher()
  const history = useHistory()

  if (loading) {
    return <LoadingSpinner />
  }
  return (
    <WrapperStyled>
      <CoursesWrapper>
        {courses.map((course, index) => {
          const gradientIndex = index % 3
          return (
            <CourseCardStyled
              onClick={() =>
                history.push(`${history.location.pathname}/${course.courseIndex}`)
              }
              gradientIndex={gradientIndex}
              courseStarted={!!course.lessonsDone}
            >
              <GradientLineStyled
                gradientIndex={gradientIndex}
                courseStarted={!!course.lessonsDone}
              />
              <CourseContentWrapper>
                <CourseTitleStyled
                  gradientIndex={gradientIndex}
                  courseStarted={!!course.lessonsDone}
                >
                  {course.title}
                </CourseTitleStyled>
                <CourseAnnotationStyled>{course.annotation}</CourseAnnotationStyled>
                <CourseBottomWrapper>
                  <LessonsDoneStyled courseStarted={!!course.lessonsDone}>
                    {course.lessonsDone}
                  </LessonsDoneStyled>
                  <CompletedTextStyled>
                    Completed out of{' '}
                    <LessonsAmountStyled>{course.lessons}</LessonsAmountStyled>
                  </CompletedTextStyled>
                  {course.lessonsDone ? (
                    <ContinueStyled>
                      <I18nWrapper pathString="buttons.continue" />
                    </ContinueStyled>
                  ) : (
                    <BeginStyled>
                      <I18nWrapper pathString="buttons.begin" />
                    </BeginStyled>
                  )}
                </CourseBottomWrapper>
              </CourseContentWrapper>
            </CourseCardStyled>
          )
        })}
      </CoursesWrapper>
    </WrapperStyled>
  )
}
