import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors, dimensions } from '../../styles'
import { useHover } from '../../hooks'

const LinkTextStyled = styled.a`
  color: ${({ color }) => color || colors.font.main};
  font-weight: ${({ fontWeight }) => fontWeight || '300'};
  font-size: ${({ fontSize, tag }) => fontSize || dimensions[`${tag}`]};
  margin: ${({ margin }) => margin || '0.1rem 0rem 0rem 0.8rem'};
  text-decoration: none;
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
  margin,
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
      margin={margin}
      tag={tag}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </LinkTextStyled>
  )
}

LinkText.propTypes = {
  animation: PropTypes.string,
  animationHover: PropTypes.string,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  href: PropTypes.string.isRequired,
  margin: PropTypes.string,
  tag: PropTypes.string,
}

export default LinkText
