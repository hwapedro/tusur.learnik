import React, { FC, useState } from 'react'
import { Formik, FormikActions, Field, Form } from 'formik'
import * as Yup from 'yup'

import { editProfile } from '../../../../../store/profile/events'
import { EditFormProfileProps, EditProfileFormValues } from './EditFormProfile.interface'
import { FormField } from '../../../../../shared/FormField/FormField'
import { SelectField } from '../../../../../shared/SelectField/SelectField'
import { AVATARS } from '../../../../../global/constant'

import {
  WrapperStyled,
  EditButtonWrapper,
  EditProfileButtonStyled,
  BackButtonStyled,
} from '../ProfilePage.style'

import {
  TitleStyled,
  AvatarsWrapper,
  AvatarWrapper,
  AvatarStyled,
} from './EditFormProfile.style'
import { I18nWrapper } from '../../../I18n/I18nWrapper/I18nWrapper'

export const EditFormProfile: FC<EditFormProfileProps> = ({ setIsEdit, info }) => {
  const languages: Array<{ label: string; value: string }> = [
    { label: 'Русский', value: 'ru' },
    { label: 'English', value: 'en' },
  ]
  const [isSelectedPicture, selectPicture] = useState<number>(info.avatar)
  const [selectedLanguage, setLanguage] = useState<
    { label: string; value: string } | undefined
  >(languages.find((el) => el.value === info.language))

  const initialValues = {
    email: info.email ? info.email : '',
    username: info.username ? info.username : '',
    firstName: info.firstName ? info.firstName : '',
    lastName: info.lastName ? info.lastName : '',
    bday: info.bday ? info.bday : '',
  }

  const editProfileSchema = Yup.object().shape({
    username: Yup.string().required('Обязательно для заполнения'),
    email: Yup.string()
      .required('Обязательно для заполнения')
      .email('Неккоректный email'),
  })

  const onSubmit = (
    values: EditProfileFormValues,
    actions: FormikActions<EditProfileFormValues>
  ) => {
    console.log(values)
    const info = {
      ...values,
      language: selectedLanguage?.value ? selectedLanguage?.value : '',
      avatar: isSelectedPicture,
    }
    editProfile(info).then(() => setIsEdit(false))
  }

  return (
    <WrapperStyled>
      <TitleStyled>
        <I18nWrapper pathString="profilePage.avatar" />
      </TitleStyled>
      <AvatarsWrapper>
        {AVATARS.map((el, index) => {
          return (
            <AvatarWrapper onClick={() => selectPicture(index)}>
              <AvatarStyled
                isSelectedPicture={isSelectedPicture === index}
                src={el.path}
              />
            </AvatarWrapper>
          )
        })}
      </AvatarsWrapper>

      <TitleStyled>
        {' '}
        <I18nWrapper pathString="profilePage.info" />
      </TitleStyled>
      <Formik
        initialValues={initialValues}
        validationSchema={editProfileSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Field
              name="username"
              type="text"
              label="Никнейм"
              placeholder="username"
              isValid={!(touched.username && errors.username)}
              component={FormField}
            />
            <Field
              name="email"
              type="text"
              label="Почта"
              placeholder="email"
              isValid={!(touched.email && errors.email)}
              component={FormField}
            />
            <Field
              name="firstName"
              type="text"
              label="Имя"
              placeholder="firstName"
              isValid={!(touched.firstName && errors.firstName)}
              component={FormField}
            />
            <Field
              name="lastName"
              type="text"
              label="Фамилия"
              placeholder="lastName"
              isValid={!(touched.lastName && errors.lastName)}
              component={FormField}
            />
            <Field
              name="bday"
              type="text"
              label="Сколько вам лет"
              placeholder="bday"
              isValid={!(touched.bday && errors.bday)}
              component={FormField}
            />
            <SelectField
              label="Язык"
              name="language"
              placeholder="language"
              selectedValue={selectedLanguage}
              options={languages}
              onChange={(selectedOption: any) => setLanguage(selectedOption)}
            />
            <EditButtonWrapper>
              <EditProfileButtonStyled type="submit">
                <I18nWrapper pathString="profilePage.edit" />
              </EditProfileButtonStyled>
              <BackButtonStyled onClick={() => setIsEdit(false)} />
            </EditButtonWrapper>
          </Form>
        )}
      </Formik>
    </WrapperStyled>
  )
}
