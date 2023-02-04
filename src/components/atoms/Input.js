import styled from 'styled-components'
import { colors, dimensions } from '../../styles'

const Input = styled.input`
  color: ${({ color }) => color || colors.font.base};
  background-color: transparent;
  font-weight: ${({ fontWeight }) => fontWeight || '700'};
  font-size: ${({ fontSize, tag }) => fontSize || dimensions.font[`${tag}`]};
  padding-left: ${({ padding }) => padding || '0rem'};
  margin-right: ${({ margin }) => margin || '0rem'};
  cursor: pointer;
`
export default Input
