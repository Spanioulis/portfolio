import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useHover } from '../../hooks'
import { Text } from '../atoms'
import { colors } from '../../styles'

const LinkStyled = styled(Link)`
  text-decoration: none;
  margin-right: 2rem;
`
const TextStyled = styled(Text)`
  margin-top: 5.5rem;
  margin-right: 8rem;
  font-weight: 700;
  color: ${({ color }) => color};

  @media only screen and (max-width: 600px) {
    margin-right: 1rem;
  }
  @media only screen and (min-width: 600px) {
    margin-right: 2rem;
  }
  @media only screen and (min-width: 768px) {
    margin-right: 4rem;
  }
  @media only screen and (min-width: 992px) {
    margin-right: 6rem;
  }
  @media only screen and (min-width: 1200px) {
    margin-right: 8rem;
  }
`
function Header({ children }) {
  const [headerIsHovering, headerOnHoverProps] = useHover()
  const [isScrolling, setIsScrolling] = useState(false)
  let lastScrollY = window.scrollY

  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      if (lastScrollY < window.scrollY) {
        setIsScrolling(true)
      } else {
        setIsScrolling(false)
      }
      lastScrollY = window.scrollY
    }
  })

  return (
    <>
      <LinkStyled to="/" {...headerOnHoverProps}>
        {headerIsHovering ? (
          <TextStyled
            className="animate__animated animate__lightSpeedOutRight animate__infinite	animate__slow"
            color={isScrolling ? 'transparent' : `${colors.font.base}`}
            tag="xl"
          >
            {children}.home
          </TextStyled>
        ) : (
          <TextStyled
            tag="xl"
            color={isScrolling ? 'transparent' : `${colors.font.base}`}
            className="animate__animated animate__flipInX"
          >
            {children}
          </TextStyled>
        )}
      </LinkStyled>
    </>
  )
}

export default Header

Header.propTypes = {
  children: PropTypes.string.isRequired,
}
