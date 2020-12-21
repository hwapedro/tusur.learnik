import React, { FC, useState, useCallback } from 'react'
import { ErrorMessage } from 'formik'

import { FormFieldProps } from './FormField.interface'
import {
  FieldStyled,
  LabelStyled,
  InputStyled,
  WarningMessageStyled,
  ShowPassStyled,
  SvgWrapperStyled
} from './FormField.style'

export const FormField: FC<FormFieldProps> = props => {
  const [pasShowFlag, setFlag] = useState<boolean>(false)

  const showPas = useCallback(() => {
    setFlag(prevPassShowFlag => !prevPassShowFlag)
  }, [])

  const {
    label,
    placeholder,
    isValid = true,
    type,
    form: { isSubmitting },
    field: { name, value, onChange }
  } = props

  return (
    <>
      <FieldStyled>
        {!!label && <LabelStyled htmlFor={name}>{label}</LabelStyled>}
        <InputStyled
          name={name}
          type={type !== 'password' ? type : pasShowFlag ? 'text' : 'password'}
          value={value}
          disabled={isSubmitting}
          placeholder={placeholder}
          onChange={onChange}
          isValid={isValid}
          maskChar={null}
          mask={'*************************'}
          formatChars={{ '*': '[^<>#$%^&*()!"№;:?]' }}
        />

        {type === 'password' && value !== '' && (
          <ShowPassStyled onClick={showPas}>
            <SvgWrapperStyled />
          </ShowPassStyled>
        )}
        <ErrorMessage name={name} component={WarningMessageStyled} />
      </FieldStyled>
    </>
  )
}
