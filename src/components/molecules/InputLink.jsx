import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import PropTypes from 'prop-types'
import { colors } from '../../styles'
import { Input } from '../atoms'
import useHover from '../../hooks/useHover'

const LinkStyled = styled(Link)`
  text-decoration: none;
`
const InputStyled = styled(Input)`
  background-color: ${colors.main};
  text-decoration: none;
  border: none;
`
function InputLink() {
  const [workIsHovering, workOnHoverProps] = useHover()
  const [aboutIsHovering, aboutOnHoverProps] = useHover()
  const [contactIsHovering, contactOnHoverProps] = useHover()

  return (
    <>
      <LinkStyled to="/about" {...workOnHoverProps}>
        {workIsHovering ? (
          <InputStyled
            tag="h1"
            color={colors.font.secondary}
            type="button"
            value="Sobre mí"
            padding="1rem"
          />
        ) : (
          <InputStyled
            tag="h1"
            color={colors.font.base}
            type="button"
            value="Hola."
          />
        )}
      </LinkStyled>
      <LinkStyled to="/work" {...aboutOnHoverProps}>
        {aboutIsHovering ? (
          <InputStyled
            tag="h1"
            color={colors.font.secondary}
            type="button"
            value="Developer"
            padding="1rem"
          />
        ) : (
          <InputStyled
            tag="h1"
            color={colors.font.main}
            type="button"
            value="Soy"
          />
        )}
      </LinkStyled>
      <LinkStyled to="/contact" {...contactOnHoverProps}>
        {contactIsHovering ? (
          <InputStyled
            tag="h1"
            color={colors.font.secondary}
            type="button"
            value="Contacto"
            padding="1rem"
          />
        ) : (
          <InputStyled
            tag="h1"
            color={colors.font.main}
            type="button"
            value="Sergio"
          />
        )}
      </LinkStyled>
    </>
  )
}

// InputLink.propTypes = {
//   to: PropTypes.string.isRequired,
//   color: PropTypes.string,
//   onClick: PropTypes.func,
// }

export default InputLink
