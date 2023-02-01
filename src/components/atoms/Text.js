import styled from 'styled-components'
import { colors, dimensions } from '../../styles'

const Text = styled.p`
  color: ${({ color }) => color || colors.font.base};
  font-weight: ${({ fontWeight }) => fontWeight || '100'};
  font-size: ${({ fontSize, tag }) => fontSize || dimensions[`${tag}`]};
  line-height: ${({ lineHeight }) => lineHeight || '1.5'};
  margin: ${({ margin }) => margin || '1rem 0rem'};

  @media (max-width: 768px) {
    font-size: ${dimensions.xl};
  }
`
export default Text
