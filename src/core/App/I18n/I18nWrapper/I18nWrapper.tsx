import React, { FC } from 'react'
import { useStore } from 'effector-react'
import * as ramda from 'ramda'

import { profileStore } from '../../../../store/profile/model'
import { I18nWrapperProps } from './I18nWrapper.interface'
import en from '../../../../static/en.json'
import ru from '../../../../static/ru.json'

export const I18nWrapper: FC<I18nWrapperProps> = ({ pathString }) => {
  const { info } = useStore(profileStore)
  const { language } = info
  const { path } = ramda
  const localization: any = { en, ru }

  const result = path(pathString.split(/[[\].]/), localization[language])

  return <>{result ? result : pathString}</>
}
