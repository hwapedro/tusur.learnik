import React, { FC } from 'react'
import Select from 'react-select'

import { SelectProps } from './SelectField.interface'
import { LabelStyled } from './SelectField.style'


const customStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    fontSize: '15px',
    padding: '10px',
    color: 'black',
  }),
  input: (provided: any, state: any) => ({
    ...provided,
    color: 'black',
  }),
  control: (provided: any, state: any) => ({
    ...provided,
    border: state.isFocused || state.isSelected ? '1px solid #3f75ff' : '1px solid #DDE4E9',
    boxShadow: 'none',
    '&:hover': {
      border: state.isFocused || state.isSelected ? '1px solid #3f75ff' : '1px solid #DDE4E9',
    },
  }),
  placeholder: (provided: any, state: any) => ({
    ...provided,
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: '15px',
    lineHeight: '15px',
    color: '#C9D0D5',
  }),
}

export const SelectField: FC<SelectProps> = ({
  label,
  options,
  name,
  placeholder,
  selectedValue,
  onChange,
}) => {
  return (
    <>
      {!!label && <LabelStyled htmlFor={name}>{label}</LabelStyled>}
      <Select
        styles={customStyles}
        options={options}
        value={selectedValue}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  )
}
