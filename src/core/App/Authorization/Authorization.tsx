import React, { FC, useState } from 'react'

import { SignIn } from './SignIn/SignIn'
import { SignUp } from './SignUp/SignUp'

import { WrapperStyled, CardStyled, TabsWrapper, TabStyled } from './Authorization.style'
import { AuthorizationProps } from './Authorization.interface'
import { I18nWrapper } from '../I18n/I18nWrapper/I18nWrapper'

export const Authorization: FC<AuthorizationProps> = () => {
  const [isSignUpActive, setSignUpActive] = useState<boolean>(false)

  return (
    <WrapperStyled>
      <CardStyled>
        <TabsWrapper>
          <TabStyled isActive={!isSignUpActive} onClick={() => setSignUpActive(false)}>
            <I18nWrapper pathString="auth.login" />
          </TabStyled>
          <TabStyled isActive={isSignUpActive} onClick={() => setSignUpActive(true)}>
            <I18nWrapper pathString="auth.register" />
          </TabStyled>
        </TabsWrapper>
        {isSignUpActive ? <SignUp /> : <SignIn />}
      </CardStyled>
    </WrapperStyled>
  )
}

export default Authorization
