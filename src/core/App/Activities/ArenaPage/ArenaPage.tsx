import React, { useState } from 'react'
import { has, isEmpty } from 'ramda'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

import { TaskSwitch } from '../../Tasks/TaskSwitch'

import { ArenaEndPage } from './ArenaEndPage/ArenaEndPage'
import { ArenaWaitPage } from './ArenaWaitPage/ArenaWaitPage'
import {
  PageWrapper,
  TaskWrapper,
  ButtonWrapper,
  SkipButtonStyled,
  CheckButtonStyled,
  TaskSwitchWrapper,
  ButtonContentWrapper,
  TaskAnimation,
} from './ArenaPage.style'

import { I18nWrapper } from '../../I18n/I18nWrapper/I18nWrapper'

import { AnswerResult } from '../LessonPage/AnswerResult/AnswerResult'
import { LoadingSpinner } from '../../LoadingSpinner/LoadingSpinner'

import { useArenaFetcher } from './hooks/useArenaFetcher'

import { submitTask, getNextTask } from '../../../../store/arena/events'

const hasRightKey = has('right')

export const ArenaPage = () => {
  const {
    room,
    currentTask,
    loadingRoom,
    loadingTask,
    victory,
    finished,
    error,
  } = useArenaFetcher()

  const [answers, addAnswer] = useState<any>([])
  // const [answerStatus, changeAnswerStatus] = useState<any>()
  const [correctAnswer, setCorrectAnswer] = useState<any>()
  const [result, setResult] = useState<any>({})

  const handleTaskCheck = (taskId: String, csrf: String) => {
    submitTask({
      attempt: { answers: answers },
      taskId: taskId,
      csrf: csrf,
    }).then(({ data }) => {
      console.log(data)
      setResult(data.result)
      setCorrectAnswer(data.answer)
    })
  }

  const handleContinue = () => {
    setResult({})
    addAnswer([])
    getNextTask(null)
  }

  const handleSkip = (taskId: String, csrf: String) => {
    submitTask({
      attempt: { answers: [] },
      taskId: taskId,
      csrf: csrf,
    }).then(({ data }) => {
      setResult(data.result)
    })
  }

  if (loadingRoom && loadingTask) {
    return <LoadingSpinner />
  }

  if (isEmpty(currentTask) || !currentTask) {
    return (
      <PageWrapper>
        <TaskWrapper>
          <LoadingSpinner />
          <ArenaWaitPage  courseIndex={1} />
        </TaskWrapper>
      </PageWrapper>
    )
  }

  if (finished) {
    return (
      <PageWrapper>
        <TaskWrapper>
          <ArenaEndPage victory={victory} courseIndex={room.courseIndex} />
        </TaskWrapper>
      </PageWrapper>
    )
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
        {loadingTask && <LoadingSpinner />}
        {!error && !loadingTask && <TaskWrapper>{task}</TaskWrapper>}

        {!hasRightKey(result) && !error && (
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

        {hasRightKey(result) && (
          <AnswerResult
            isCorrect={result.right}
            task={currentTask}
            correctAnswer={correctAnswer}
            handleContinue={handleContinue}
            arena={true}
          ></AnswerResult>
        )}
      </PageWrapper>
    </>
  )
}
