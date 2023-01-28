import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors, dimensions } from '../../styles'
import { useHover } from '../../hooks'

const LinkTextStyled = styled.a`
  color: ${({ color }) => color || colors.font.main};
  font-weight: ${({ fontWeight }) => fontWeight || '300'};
  font-size: ${({ fontSize, tag }) => fontSize || dimensions[`${tag}`]};
  text-decoration: none;
  margin: 0.5rem 0rem 0rem 0.8rem;
  width: fit-content;
`

function LinkText({
  children,
  tag,
  fontWeight,
  color,
  fontSize,
  href,
  animation,
  animationHover,
}) {
  const [linkIsHovering, linkOnHoverProps] = useHover()

  return (
    <LinkTextStyled
      {...linkOnHoverProps}
      className={linkIsHovering ? animationHover : animation}
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
  animation: PropTypes.string,
  animationHover: PropTypes.string,
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  href: PropTypes.string.isRequired,
  tag: PropTypes.string,
}

export default LinkText
