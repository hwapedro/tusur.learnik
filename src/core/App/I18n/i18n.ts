import { useStore } from 'effector-react'
import * as ramda from 'ramda'

import { profileStore } from '../../../store/profile/model'
import en from '../../../static/en.json'
import ru from '../../../static/ru.json'

export const t = (pathString: string): string => {
    const { path } = ramda
    const localization: any = { en, ru }
    const result = `${path(pathString.split(/[[\].]/), ru)}`

    return result
}
