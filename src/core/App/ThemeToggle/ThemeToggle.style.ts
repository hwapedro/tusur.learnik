import styled, { css } from 'styled-components'
import { media } from '../../../theme/helper'

export const ToggleCheckBox = styled.input<{ checked: boolean | null }>`
  height: 0;
  width: 0;
  visibility: hidden;
  ${({ checked }: { checked: boolean | null }) => {
    if (!checked) return
    return css`
    left: calc(100% - 2px);
    transform: translateX(-100%);
    `
  }}
`

export const ToggleLabel = styled.label<{ checked: boolean | null }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 50px;
  height: 25px;
  background: grey;
  border-radius: 100px;
  position: relative;
  transition: background-color 0.2s;
  background: ${(props) => props.theme? '#5ecba1' : ''}
  ${({ checked }: { checked: boolean | null }) => {
    if (!checked) return
    return css`
      left: calc(100% - 2px);
      transform: translateX(-100%);
    `
  }}
`

export const ToogleSpan = styled.span<{ checked: boolean | null }>`
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  transition: 0.4s;
  background: #fff;
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  ${({ checked }: { checked: boolean | null }) => {
    if (!checked) return
    return css`
      left: calc(100% - 2px);
      transform: translateX(-100%);
    `
  }}
`
