import React, { FC, Suspense } from 'react'
import { ThemeProvider } from 'styled-components'
import { useStore } from 'effector-react'

import { profileStore } from '../../store/profile/model'
import { GlobalStyle } from '../../theme/globalStyle'
import { lightTheme, darkTheme } from '../../theme/theme'
import { AppRoutes } from './App.route'

export const App: FC = () => {
  const { theme } = useStore(profileStore)

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <Suspense fallback={<div>Loading...</div>}>
        <GlobalStyle />
        <AppRoutes />
      </Suspense>
    </ThemeProvider>
  )
}
