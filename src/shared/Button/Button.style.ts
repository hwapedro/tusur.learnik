import styled from 'styled-components'
import { media } from '../../theme/helper'

export const ButtonStyled = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 204px;
  background-color: #ff6673;
  font-size: 18px;
  padding: 10px 20px;
  color: #f4f4f4;
  border: none;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s ease-in-out;
    cursor: pointer;
  }

  ${media.rubber} {
    padding: 0.6rem 1.3rem;
    height: 3.3rem;
    width: 13.3rem;
    font-size: 1.2rem;
  }
`
