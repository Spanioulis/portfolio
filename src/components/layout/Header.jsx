import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useHover } from '../../hooks'
import { Text } from '../atoms'
import 'animate.css'

const LinkStyled = styled(Link)`
  text-decoration: none;
  margin-right: 2rem;
`
const TextStyled = styled(Text)`
  margin-top: 5.5rem;
  margin-right: 8rem;
`

function Header({ children }) {
  const [headerIsHovering, headerOnHoverProps] = useHover()

  return (
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
  )
}

export default Header

Header.propTypes = {
  children: PropTypes.string.isRequired,
}
