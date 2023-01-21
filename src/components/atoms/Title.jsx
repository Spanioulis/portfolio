import styled from 'styled-components'
import { colors, dimensions } from '../../styles'

const Title = styled.p`
  color: ${(color) => color || colors.font.main};
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
  font-size: ${({ fontSize, tag }) => fontSize || dimensions.font[`${tag}`]};
`
export default Title
