import React, { FC } from 'react'
import { Formik, FormikActions, Field } from 'formik'
import * as Yup from 'yup'
import { useHistory } from 'react-router-dom'

import { FormField } from '../../../../shared/FormField/FormField'

import { I18nWrapper } from '../../I18n/I18nWrapper/I18nWrapper'

import { ButtonStyled, ButtonsWrapperStyled, FormWrappedStyled} from '../Authorization.style'
import { WrapperStyled } from './SignUp.style'
import { SingUpProps, SignUpFormValues } from './SignUp.interface'
import { signUp } from '../../../../store/auth/events'
import { COURSES_PAGE } from '../../../../global/routes'
import { ERROR_MESSAGE } from '../../../../constants'

export const SignUp: FC<SingUpProps> = () => {
  const history = useHistory()
  const initialValues = {
    username: '',
    email: '',
    password: '',
    passwordRepeat: '',
  }

  const signUpSchema = Yup.object().shape({
    username: Yup.string().required('обязательно для заполнения'),
    email: Yup.string()
      .required('обязательно для заполнения')
      .email('неправильная форма почты'),
    password: Yup.string().required('обязательно для заполнения'),
  })

  const onSubmit = (
    values: SignUpFormValues,
    actions: FormikActions<SignUpFormValues>
  ) => {
    const { password, passwordRepeat } = values
    if (password !== passwordRepeat) {
      actions.setFieldError('passwordRepeat', 'пароли не совпадают')
    }
    signUp({ username: values.username, password: values.password, email: values.email })
      .then((data) => {
        history.push(COURSES_PAGE)
      })
      .catch((error) => {
        actions.setFieldError('username', ERROR_MESSAGE[error.code])
        actions.setSubmitting(false)
      })
    actions.setSubmitting(false)
  }

  return (
    <WrapperStyled>
      <Formik
        initialValues={initialValues}
        validationSchema={signUpSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <FormWrappedStyled>
            <Field
              name="email"
              type="text"
              label="ПОЧТА"
              placeholder="напиши почту"
              isValid={!(touched.email && errors.email)}
              component={FormField}
            />
            <Field
              name="username"
              type="text"
              label="НИКНЕЙМ"
              placeholder="придумай никнейм"
              isValid={!(touched.username && errors.username)}
              component={FormField}
            />
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
              placeholder="повторите пароль"
              isValid={touched.passwordRepeat && errors.passwordRepeat}
              component={FormField}
            />

            <ButtonsWrapperStyled>
              <ButtonStyled type="submit">
                <I18nWrapper pathString="buttons.signup" />
              </ButtonStyled>
            </ButtonsWrapperStyled>
          </FormWrappedStyled>
        )}
      </Formik>
    </WrapperStyled>
  )
}
