import { ChangeEvent } from 'react'

export type Field = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  name: string
  value: string
}

export type Form = {
  isSubmitting: boolean
}

export interface FormFieldProps {
  field: Field
  form: Form
  placeholder: string
  label?: string
  type: string
  isValid?: boolean,
  mask: string
}
