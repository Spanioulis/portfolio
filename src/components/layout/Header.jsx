import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Text } from '../atoms'

const LinkStyled = styled(Link)`
  text-decoration: none;
  margin-right: 2rem;
`
const TextStyled = styled(Text)`
  margin-top: 5.5rem;
  margin-right: 9rem;
`

function Header({ children }) {
  const [isShown, setIsShown] = useState(false)

  const onMouseEnter = () => {
    setIsShown(true)
  }

  const onMouseLeave = () => {
    setIsShown(false)
  }

  return (
    <LinkStyled to="/" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {isShown ? (
        <TextStyled tag="xl">{children}.home</TextStyled>
      ) : (
        <TextStyled tag="xl">{children}</TextStyled>
      )}
    </LinkStyled>
  )
}

export default Header

Header.propTypes = {
  children: PropTypes.string.isRequired,
}
