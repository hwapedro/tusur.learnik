import { ChangeEvent } from 'react'
import { OptionTypeBase, ActionMeta, ValueType } from 'react-select'

export type SelectProps = {
    onChange: (value: ValueType<OptionTypeBase>, actionMeta: ActionMeta<OptionTypeBase>) => void
    label?: string
    name?: string
    placeholder?: string
    options: OptionTypeBase[]
    selectedValue?: OptionTypeBase
}
