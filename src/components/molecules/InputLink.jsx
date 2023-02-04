import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors, dimensions } from '../../styles'
import { Input } from '../atoms'
import useHover from '../../hooks/useHover'

const LinkStyled = styled(Link)`
  text-decoration: none;
`
const InputStyled = styled(Input)`
  background-color: transparent;
  text-decoration: none;
  border: none;

  @media only screen and (max-width: 600px) {
    font-size: ${dimensions.font.h3};
  }

  @media only screen and (min-width: 600px) {
    font-size: ${dimensions.font.h2};
  }

  @media only screen and (min-width: 768px) {
    font-size: ${dimensions.font.h2};
  }

  @media only screen and (min-width: 992px) {
    font-size: ${dimensions.font.h1};
  }

  @media only screen and (min-width: 1200px) {
    font-size: ${dimensions.font.h1};
  }
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
            color={colors.font.secondary}
            padding="1rem"
            tag="h1"
            type="button"
            value="Sobre mí"
          />
        ) : (
          <InputStyled
            color={colors.font.base}
            tag="h1"
            type="button"
            value="Hola."
          />
        )}
      </LinkStyled>
      <LinkStyled to="/work" {...aboutOnHoverProps}>
        {aboutIsHovering ? (
          <InputStyled
            color={colors.font.secondary}
            padding="1rem"
            tag="h1"
            type="button"
            value="Developer"
          />
        ) : (
          <InputStyled
            color={colors.font.main}
            tag="h1"
            type="button"
            value="Soy"
          />
        )}
      </LinkStyled>
      <LinkStyled to="/contact" {...contactOnHoverProps}>
        {contactIsHovering ? (
          <InputStyled
            color={colors.font.secondary}
            padding="1rem"
            tag="h1"
            type="button"
            value="Contacto"
          />
        ) : (
          <InputStyled
            color={colors.font.main}
            tag="h1"
            type="button"
            value="Sergio"
          />
        )}
      </LinkStyled>
    </>
  )
}

export default InputLink
