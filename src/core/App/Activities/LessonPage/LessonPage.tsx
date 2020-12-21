import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { times, isEmpty, has } from 'ramda'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

import { useLessonFetcher } from './hooks/useLessonFetcher'

import { TaskSwitch } from '../../Tasks/TaskSwitch'

import { RestartPage } from './ResultPage/RestartPage/RestartPage'
import { SuccessPage } from './ResultPage/SuccessPage/SuccessPage'
import { LessonEndPage } from './ResultPage/LessonEndPage/LessonEndPage'
import { Description } from '../../Description/Description'

import { COURSES_PAGE } from '../../../../global/routes'
import {
  TaskAnimation,
  PageWrapper,
  TaskWrapper,
  TitlePageWrapper,
  TitlePage,
  LivesWrapper,
  FullLiveStyled,
  EmptyLiveStyled,
  ButtonWrapper,
  SkipButtonStyled,
  CheckButtonStyled,
  TaskSwitchWrapper,
  TeoriaStyled,
  LivesContentWrapper,
  ButtonContentWrapper,
  CloseButtonStyled,
} from './LessonPage.style'

import { I18nWrapper } from '../../I18n/I18nWrapper/I18nWrapper'

import { LoadingSpinner } from '../../LoadingSpinner/LoadingSpinner'

import { AnswerResult } from './AnswerResult/AnswerResult'
import { submitTask } from '../../../../store/lessons/events'

const hasRightKey = has('right')

export const LessonPage = () => {
  const {
    page,
    tasks,
    lessonId,
    currentTask,
    setCurrentTask,
    currentLives,
    setLives,
    loading,
    setPageLoading,
  } = useLessonFetcher()
  const history = useHistory()
  const { courseIndex } = useParams()
  const [currentTaskIndex, setCurrentTaskIndex] = useState<any>(0)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [answers, addAnswer] = useState<any>([])
  const [result, setResult] = useState<any>({})
  const [correctAnswer, setCorrectAnswer] = useState<any>([])
  const [reset, setReset] = useState<boolean>(false)
  const [isRestart, setIsRestart] = useState<boolean>(false)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const [lessonDone, setLessonDone] = useState<boolean>(false)

  if (loading) {
    return <LoadingSpinner />
  }
  const handleTaskCheck = (taskId: String, csrf: String) => {
    submitTask({
      attempt: { answers: answers },
      taskId: taskId,
      lessonId: lessonId,
      csrf: csrf,
    }).then(({ data }) => {
      setResult(data.result)
      setReset(data.reset)
      setLives(data.lives)
      setCorrectAnswer(data.answer)
      setLessonDone(data.lessonDone)
    })
  }

  const handleContinue = () => {
    setResult({})
    addAnswer([])
    if (reset) {
      setIsRestart(true)
      setCurrentTaskIndex(0)
      return
    }

    const newTaskIndex = currentTaskIndex + 1
    if (newTaskIndex === tasks.length) {
      setIsSuccess(true)
      setCurrentTaskIndex(0)
      return
    }
    setCurrentTaskIndex(newTaskIndex)
    setCurrentTask(tasks[newTaskIndex])
  }

  const handleSkip = (taskId: String, csrf: String) => {
    submitTask({
      attempt: { answers: [] },
      taskId: taskId,
      lessonId: lessonId,
      csrf: csrf,
    }).then(({ data }) => {
      setResult(data.result)
      setReset(data.reset)
      const newLives = currentLives - 1
      setLives(newLives)
    })
  }

  const task = (
    <SwitchTransition mode={'out-in'}>
      <CSSTransition
        key={currentTask._id}
        classNames="task"
        addEndListener={(node, done) => {
          node.addEventListener('transitionend', done, false)
        }}
      >
        <TaskAnimation>
          <TitlePageWrapper>
            <TitlePage>{page.title}</TitlePage>
          </TitlePageWrapper>
          <TaskSwitchWrapper>
            <TaskSwitch
              answers={answers}
              addAnswer={addAnswer}
              task={currentTask}
              result={result}
            />
          </TaskSwitchWrapper>
        </TaskAnimation>
      </CSSTransition>
    </SwitchTransition>
  )

  return (
    <>
      <PageWrapper>
        <LivesContentWrapper>
          <TeoriaStyled onClick={() => setIsOpen(!isOpen)}>
            <I18nWrapper pathString="coursePage.teoria" />
          </TeoriaStyled>
          <LivesWrapper>
            {times(
              (i) => (i + 1 <= currentLives ? <FullLiveStyled /> : <EmptyLiveStyled />),
              3
            )}
          </LivesWrapper>
          <CloseButtonStyled
            onClick={() => history.push(`${COURSES_PAGE}/${courseIndex}`)}
          />
        </LivesContentWrapper>
        {lessonDone && (
          <LessonEndPage
            setLessonDone={setLessonDone}
            startNewLesson={() => {
              setPageLoading(true)
              setResult({})
              addAnswer([])
            }}
          />
        )}
        {isRestart && <RestartPage isRestart={isRestart} setIsRestart={setIsRestart} />}
        {isSuccess && (
          <SuccessPage setIsSuccess={setIsSuccess} setPageLoading={setPageLoading} />
        )}
        {/* {lessonDone && <LessonEndPage setLessonDone={setLessonDone} />} */}
        {!lessonDone && !isRestart && !isSuccess && !lessonDone && (
          <TaskWrapper>{task}</TaskWrapper>
        )}

        {!hasRightKey(result) && !isRestart && !isSuccess && !lessonDone && (
          <ButtonContentWrapper>
            <ButtonWrapper>
              <div>
                <SkipButtonStyled
                  onClick={() => {
                    handleSkip(currentTask._id, currentTask.csrf)
                  }}
                >
                  <I18nWrapper pathString="buttons.skip" />
                </SkipButtonStyled>
              </div>
              <div>
                <CheckButtonStyled
                  disabled={isEmpty(answers)}
                  onClick={() => {
                    handleTaskCheck(currentTask._id, currentTask.csrf)
                  }}
                >
                  <I18nWrapper pathString="buttons.check" />
                </CheckButtonStyled>
              </div>
            </ButtonWrapper>
          </ButtonContentWrapper>
        )}

        {hasRightKey(result) && !lessonDone && (
          <AnswerResult
            isCorrect={result.right}
            task={currentTask}
            correctAnswer={correctAnswer}
            handleContinue={handleContinue}
            arena={false}
          ></AnswerResult>
        )}
        <Description
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          description={page.description}
        />
      </PageWrapper>
    </>
  )
}
