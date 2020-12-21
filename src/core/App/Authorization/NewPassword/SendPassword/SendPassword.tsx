import React, { FC } from 'react'
import { Formik, FormikActions, Field } from 'formik'
import { useLocation } from 'react-router-dom'
import * as Yup from 'yup'

import { FormField } from '../../../../../shared/FormField/FormField'

import {
  WrapperStyled,
  ButtonWrapperStyled,
  ButtonStyled,
  ButtonsWrapperStyled,
  FormWrappedStyled,
  CardStyled,
} from '../../Authorization.style'
import { TitleStyled } from '../NewPassword.style'

import { NewPasswordFormValues } from './SendPassword.interface'

import { sendPassword } from '../../../../../store/auth/events'

const SendPassword: FC = () => {
  const initialValues = {
    password: '',
    passwordRepeat: '',
  }

  const signInSchema = Yup.object().shape({
    password: Yup.string().required('Обязательно для заполнения'),
    passwordRepeat: Yup.string()
      .required('Обязательно для заполнения')
      .test('passwords-match', 'Passwords must match', function (value) {
        return this.parent.password === value
      }),
  })

  const onSubmit = (
    values: NewPasswordFormValues,
    actions: FormikActions<NewPasswordFormValues>
  ) => {
    sendPassword({
      password: values.password,
      passwordRepeat: values.passwordRepeat,
    })
      .then(() => {
        actions.setSubmitting(false)
      })
      .catch(() => {
        actions.setSubmitting(false)
      })
  }

  return (
    <WrapperStyled>
      <CardStyled>
        <TitleStyled>Придумай новый пароль!</TitleStyled>
        <Formik
          initialValues={initialValues}
          validationSchema={signInSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched }) => (
            <FormWrappedStyled>
              <Field
                name="password"
                type="password"
                label="ПАРОЛЬ"
                placeholder="придумай пароль"
                isValid={!(touched.password && errors.password)}
                component={FormField}
              />
              <Field
                name="passwordRepeat"
                type="password"
                label="ПОДТВЕРЖДЕНИЕ ПАРОЛЯ"
                placeholder="повтори пароль"
                isValid={!(touched.password && errors.password)}
                component={FormField}
              />
              <ButtonsWrapperStyled>
                <ButtonWrapperStyled>
                  <ButtonStyled type="submit">готово</ButtonStyled>
                </ButtonWrapperStyled>
              </ButtonsWrapperStyled>
            </FormWrappedStyled>
          )}
        </Formik>
      </CardStyled>
    </WrapperStyled>
  )
}

export default SendPassword
