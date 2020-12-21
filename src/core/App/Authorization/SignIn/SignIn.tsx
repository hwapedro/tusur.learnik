import React, { FC } from 'react'
import { Formik, FormikActions, Field } from 'formik'
import * as Yup from 'yup'
import { useHistory } from 'react-router-dom'

import { FormField } from '../../../../shared/FormField/FormField'
import { I18nWrapper } from '../../I18n/I18nWrapper/I18nWrapper'

import { RESET_PASSWORD, COURSES_PAGE } from '../../../../global/routes'

import { ButtonStyled, ButtonsWrapperStyled, FormWrappedStyled} from '../Authorization.style'

import {
  WrapperStyled,
} from './SignIn.style'

import { SingInFormValues } from './SignIn.interface'
import { signIn } from '../../../../store/auth/events'

export const SignIn: FC = () => {
  const history = useHistory()
  const initialValues = {
    username: '',
    password: '',
  }

  const signInSchema = Yup.object().shape({
    username: Yup.string().required('Обязательно для заполнения'),
    password: Yup.string().required('Обязательно для заполнения'),
  })

  const onSubmit = (
    values: SingInFormValues,
    actions: FormikActions<SingInFormValues>
  ) => {
    signIn({
      login: values.username,
      password: values.password,
    })
      .then(() => {
        history.push(COURSES_PAGE)
      })
      .catch((e) => {
        actions.setFieldError('username', ' ')
        actions.setFieldError('password', 'Неверный логин или пароль')
        actions.setSubmitting(false)
      })
  }

  return (
    <WrapperStyled>
      {/* <IconWrapperStyled>
        <IconItemStyled meta="vk" />
        <IconItemStyled meta="google" />
        <IconItemStyled meta="facebook" />
      </IconWrapperStyled> */}
      <Formik
        initialValues={initialValues}
        validationSchema={signInSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <FormWrappedStyled>
            <Field
              name="username"
              type="text"
              label="ПОЧТА/НИКНЕЙМ"
              placeholder="ваш никнейм/почта"
              isValid={!(touched.username && errors.username)}
              component={FormField}
            />
            <Field
              name="password"
              type="password"
              label="ПАРОЛЬ"
              placeholder="ваш пароль"
              isValid={!(touched.password && errors.password)}
              component={FormField}
            />
            <ButtonsWrapperStyled>
              <ButtonStyled type="button" onClick={() => history.push(RESET_PASSWORD)}>
                <I18nWrapper pathString="buttons.restorePassword" />
              </ButtonStyled>
              <ButtonStyled type="submit">
                <I18nWrapper pathString="buttons.signin" />
              </ButtonStyled>
            </ButtonsWrapperStyled>
          </FormWrappedStyled>
        )}
      </Formik>
    </WrapperStyled>
  )
}
