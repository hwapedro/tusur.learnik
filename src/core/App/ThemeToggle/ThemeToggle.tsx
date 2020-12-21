import React, { FC } from 'react'
import { useStore } from 'effector-react'

import { profileStore } from '../../../store/profile/model'
import { changeTheme } from '../../../store/profile/events'

import './ThemeToogle.style.css'

export const ThemeToggle: FC = () => {
  const { theme } = useStore(profileStore)

  return (
    <>
      <input
        checked={theme}
        onChange={() => {
          localStorage.setItem('theme', `${!theme}`)
          changeTheme(!theme)
        }}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: theme ? '#5ecba1' : '' }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  )
}
