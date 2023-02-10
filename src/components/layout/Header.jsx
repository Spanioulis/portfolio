import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useHover } from '../../hooks'
import { Text } from '../atoms'

const LinkStyled = styled(Link)`
  text-decoration: none;
  margin-right: 2rem;
`
const TextStyled = styled(Text)`
  margin-top: 5.5rem;
  margin-right: 8rem;
  font-weight: 700;

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
  const [scrollingUp, setScrollingUp] = useState(false)
  const [lastScrollTop, setLastScrollTop] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset
      setScrollingUp(currentScrollTop < lastScrollTop)
      setLastScrollTop(currentScrollTop)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollTop])

  return (
    <>
      {scrollingUp && (
        <LinkStyled to="/" {...headerOnHoverProps}>
          {headerIsHovering ? (
            <TextStyled
              className="animate__animated animate__lightSpeedOutRight animate__infinite	animate__slow"
              tag="xl"
            >
              {children}.home
            </TextStyled>
          ) : (
            <TextStyled tag="xl" className="animate__animated animate__flipInX">
              {children}
            </TextStyled>
          )}
        </LinkStyled>
      )}
    </>
  )
}

export default Header

Header.propTypes = {
  children: PropTypes.string.isRequired,
}
