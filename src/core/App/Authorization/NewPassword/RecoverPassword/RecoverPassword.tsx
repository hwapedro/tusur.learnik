import React, { FC } from 'react'
import { Formik, FormikActions, Field } from 'formik'
import { useHistory } from 'react-router-dom'
import * as yup from 'yup'

import { FormField } from '../../../../../shared/FormField/FormField'

import { I18nWrapper } from '../../../I18n/I18nWrapper/I18nWrapper'
import { AUTHORIZATION } from '../../../../../global/routes'

import {
  WrapperStyled,
  ButtonWrapperStyled,
  ButtonStyled,
  ButtonsWrapperStyled,
  FormWrappedStyled,
  CardStyled,
} from '../../Authorization.style'
import { TitleStyled } from '../NewPassword.style'

import { ResetPasswordFormValues } from './RecoverPassword.interface'
import { recoverPassword } from '../../../../../store/auth/events'

const RecoverPassword: FC = () => {
  const history = useHistory()

  const initialValues = {
    email: '',
  }

  const onSubmit = (
    values: ResetPasswordFormValues,
    actions: FormikActions<ResetPasswordFormValues>
  ) => {
    recoverPassword({
      email: values.email,
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
        <TitleStyled>
          <I18nWrapper pathString="auth.restore" />
        </TitleStyled>
        <Formik
          initialValues={initialValues}
          validationSchema={yup.object().shape({
            email: yup
              .string()
              .email('Некоректный адрес')
              .required('Обязательно для заполнения'),
          })}
          onSubmit={onSubmit}
        >
          {({ errors, touched }) => (
            <FormWrappedStyled>
              <Field
                name="email"
                type="text"
                label="ПОЧТА"
                placeholder="ваша почта"
                isValid={!(touched.email && errors.email)}
                component={FormField}
                width="400px"
                height="45px"
                fontSize="18px"
              />
              <ButtonsWrapperStyled>
                <ButtonWrapperStyled>
                  <ButtonStyled onClick={() => history.push(AUTHORIZATION)}>
                    <I18nWrapper pathString="buttons.signin" />
                  </ButtonStyled>
                </ButtonWrapperStyled>
                <ButtonWrapperStyled>
                  <ButtonStyled type="submit">
                    <I18nWrapper pathString="buttons.restorePassword" />
                  </ButtonStyled>
                </ButtonWrapperStyled>
              </ButtonsWrapperStyled>
            </FormWrappedStyled>
          )}
        </Formik>
      </CardStyled>
    </WrapperStyled>
  )
}

export default RecoverPassword
