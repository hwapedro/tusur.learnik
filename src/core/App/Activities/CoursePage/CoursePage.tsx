import React, { FC, useState, useEffect, useContext, useRef } from 'react'
import { useHistory } from 'react-router-dom'

import {
  WrapperStyled,
  NavigationWrapper,
  NavigationCoursesStyled,
  NavigationCourseStyled,
  ProgressWrapper,
  ProgressTextWrapper,
  ProgressTextStyled,
  PrecentStyled,
  ProgressLessonDoneStyled,
  LessonCardStyled,
  LessonsWrapper,
  PageDoneWrapper,
  PageDoneStyled,
  LessonBottomWrapper,
  LessonTitleStyled,
  LessonDescriptionStyled,
  LessonButtonStyled,
  HeaderPageWrapper,
  ArenaButtonWrapper,
  TopWrapper,
  ArenaButtonLeaveStyled,
  ArenaButtonJoinStyled,
  ArenaTextWrapper,
  TeoriaStyled,
  LessonDifficultydWrapper,
} from './CoursePage.style'

import { I18nWrapper } from '../../I18n/I18nWrapper/I18nWrapper'
import { CoursePageProps } from './CoursePage.inteface'
import { Description } from '../../Description/Description'
import { LoadingSpinner } from '../../LoadingSpinner/LoadingSpinner'
import { useCourseFetcher } from './hooks/useCourseFetcher'
import { SocketContext } from '../../App.route'
import { COURSES_PAGE, LESSON_PAGE } from '../../../../global/routes'
import { setQueue } from '../../../../store/arena/events'

export const CoursePage: FC<CoursePageProps> = () => {
  const {
    title,
    description,
    lessons,
    lessonsDone,
    courseIndex,
    loading,
    inQueue,
    queueTime,
  } = useCourseFetcher()
  const history = useHistory()
  const socket = useContext(SocketContext)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [timer, setTimer] = useState<number>(0)
  const increment = useRef<any>(null)
  const [precentProgress, setPrecentProgress] = useState<number>(0)
  const [circleProgressRadius, setCircleProgressRadius] = useState<number>(0)

  useEffect(() => {
    if (inQueue) {
      increment.current = setInterval(() => {
        setTimer(Math.floor((new Date().getTime() - queueTime) / 1000))
      }, 1000)
    } else {
      clearInterval(increment.current)
    }
  }, [inQueue])

  useEffect(() => {
    if (lessons.length) {
      setPrecentProgress((lessonsDone / lessons.length) * 100)
      setCircleProgressRadius(131.88 * (lessonsDone / lessons.length))
    }
  }, [lessons])

  if (loading) {
    return <LoadingSpinner />
  }

  return (
    <WrapperStyled>
      <HeaderPageWrapper>
        <NavigationWrapper>
          <NavigationCoursesStyled onClick={() => history.push(COURSES_PAGE)}>
            <I18nWrapper pathString="header.courses" />
          </NavigationCoursesStyled>
          <NavigationCourseStyled>{title}</NavigationCourseStyled>
        </NavigationWrapper>
      </HeaderPageWrapper>
      <TeoriaStyled onClick={() => setIsOpen(!isOpen)}>
        <I18nWrapper pathString="coursePage.teoria" />
      </TeoriaStyled>
      <TopWrapper>
        <ProgressWrapper>
          <ProgressTextWrapper>
            <ProgressTextStyled>
              <I18nWrapper pathString="coursePage.progress" />
              <PrecentStyled>{precentProgress}%</PrecentStyled>
            </ProgressTextStyled>
            <ProgressLessonDoneStyled>
              {lessonsDone}/{lessons.length} <I18nWrapper pathString="coursePage.done" />
            </ProgressLessonDoneStyled>
          </ProgressTextWrapper>
          {precentProgress === 100 ? (
            <div>
              <svg
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M54 27C54 41.9117 41.9117 54 27 54C12.0883 54 0 41.9117 0 27C0 12.0883 12.0883 0 27 0C41.9117 0 54 12.0883 54 27ZM9.45 27C9.45 36.6926 17.3074 44.55 27 44.55C36.6926 44.55 44.55 36.6926 44.55 27C44.55 17.3074 36.6926 9.45 27 9.45C17.3074 9.45 9.45 17.3074 9.45 27Z"
                  fill="#5ECBA1"
                />
                <path
                  d="M23.5515 30.6942L19.6677 26.8448L18 28.4977L23.5515 34L35 22.6529L33.3323 21L23.5515 30.6942Z"
                  fill="#5ECBA1"
                />
              </svg>
            </div>
          ) : (
            <div>
              <svg
                id="svg1"
                xmlns="http://www.w3.org/2000/svg"
                width="54"
                height="54"
                viewBox="0 0 54 54"
              >
                <circle
                  cx="27"
                  cy="27"
                  r="21"
                  fill="none"
                  stroke-dasharray="131.88"
                  stroke-dashoffset="0"
                  stroke="#E6F7FC"
                  strokeWidth="9"
                />
                <circle
                  cx="27"
                  cy="27"
                  r="21"
                  fill="none"
                  transform="rotate(-90 27 27)"
                  stroke-dasharray="131.88"
                  stroke-dashoffset={131.88 - circleProgressRadius}
                  stroke="#00A7E1"
                  strokeWidth="9"
                ></circle>
              </svg>
            </div>
          )}
        </ProgressWrapper>
        {lessonsDone === lessons.length && (
          <ArenaButtonWrapper>
            <ArenaTextWrapper>
              <I18nWrapper pathString="arena.text" />
            </ArenaTextWrapper>
            {inQueue ? (
              <>
                <ArenaButtonLeaveStyled
                  onClick={() => {
                    setQueue({ time: 0, queue: false, courseIndex: 0 })
                    socket.send({
                      type: 'leaveArena',
                      course: courseIndex,
                    })
                  }}
                >
                  <I18nWrapper pathString="arena.cancelQueue" />{' '}
                  {new Date(timer * 1000).toISOString().substr(14, 5)}
                </ArenaButtonLeaveStyled>
              </>
            ) : (
              <ArenaButtonJoinStyled
                onClick={() => {
                  setQueue({ time: new Date().getTime(), queue: true, courseIndex })
                  socket.send({
                    type: 'joinArena',
                    course: courseIndex,
                  })
                }}
              >
                <I18nWrapper pathString="arena.findOpponent" />
              </ArenaButtonJoinStyled>
            )}
          </ArenaButtonWrapper>
        )}
      </TopWrapper>
      <LessonsWrapper>
        {lessons.map((lesson, index) => (
          <LessonCardStyled
            onClick={() =>
              history.push(`${LESSON_PAGE}/${courseIndex}/${lesson.lessonIndex}`)
            }
          >
            <LessonDifficultydWrapper difficulty={lesson.difficulty}>
              <I18nWrapper pathString={`coursePage.difficulty.${lesson.difficulty}`} />
            </LessonDifficultydWrapper>
            <LessonTitleStyled>{lesson.title}</LessonTitleStyled>
            <LessonDescriptionStyled
              dangerouslySetInnerHTML={{ __html: lesson.description }}
            />
            <PageDoneWrapper>
              {lesson.pagesShort.map((el) => (
                <PageDoneStyled isDone={el.done}>{el.title.ru}</PageDoneStyled>
              ))}
            </PageDoneWrapper>
            <LessonBottomWrapper>
              {lesson.pagesShort[0].done ? (
                <LessonButtonStyled>
                  <I18nWrapper pathString="buttons.continue" />
                </LessonButtonStyled>
              ) : (
                <LessonButtonStyled disabled={index > lessonsDone}>
                  <I18nWrapper pathString="buttons.begin" />
                </LessonButtonStyled>
              )}
            </LessonBottomWrapper>
          </LessonCardStyled>
        ))}
      </LessonsWrapper>
      <Description isOpen={isOpen} setIsOpen={setIsOpen} description={description} />
    </WrapperStyled>
  )
}
