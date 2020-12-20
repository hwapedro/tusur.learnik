import React, { FC } from 'react'
import { useStore } from 'effector-react'
import { isEmpty } from 'ramda'

import { FillProps } from './Fill.interface'
import {
  FillTitleWrapper,
  FillTitleStyled,
  TextWrapper,
  TextStyled,
  InputStyled,
} from './Fill.style'

import { I18nWrapper } from '../../I18n/I18nWrapper/I18nWrapper'
import { profileStore } from '../../../../store/profile/model'
import { Language } from '../../../../store/lessons/types'

export const Fill: FC<FillProps> = ({ task, addAnswer, answers, result }) => {
  const { info } = useStore(profileStore)
  const parts = task.info.question[info.language as keyof Language].split(/༼ つ ◕_◕ ༽つ/g)
  const excessInputIndex = parts.length - 1

  return (
    <>
      <FillTitleWrapper>
        <FillTitleStyled>
          <I18nWrapper pathString="lessonPage.fillTask" />
        </FillTitleStyled>
      </FillTitleWrapper>
      <TextWrapper>
        {parts.map((el, index) => (
          <>
            <TextStyled>{el}</TextStyled>
            {index !== excessInputIndex && (
              <InputStyled
                type="text"
                disabled={!isEmpty(result)}
                onChange={(event) => {
                  answers[index] = event.target.value
                  addAnswer([...answers])
                }}
              />
            )}
          </>
        ))}
      </TextWrapper>
    </>
  )
}
