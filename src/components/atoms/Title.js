import styled from 'styled-components'
import { colors, dimensions } from '../../styles'

const Title = styled.p`
  color: ${({ color }) => color || colors.font.base};
  font-weight: ${({ fontWeight }) => fontWeight || '700'};
  font-size: ${({ fontSize, tag }) => fontSize || dimensions.font[`${tag}`]};
  margin: ${({ margin }) => margin || '4rem 0rem 1rem 0rem'};
`
export default Title
