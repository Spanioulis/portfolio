import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors, dimensions } from '../../styles'

const LinkTextStyled = styled.a`
  color: ${({ color }) => color || colors.font.main};
  font-weight: ${({ fontWeight }) => fontWeight || '300'};
  font-size: ${({ fontSize, tag }) => fontSize || dimensions[`${tag}`]};
  text-decoration: none;
  padding: 0.5rem;
  width: fit-content;
`

function LinkText({ children, tag, fontWeight, color, fontSize, href }) {
  return (
    <LinkTextStyled
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      href={href}
      tag={tag}
      target="_blank"
    >
      {children}
    </LinkTextStyled>
  )
}

LinkText.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  href: PropTypes.string.isRequired,
  tag: PropTypes.string,
}

export default LinkText
