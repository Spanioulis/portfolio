import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors, dimensions, FlexBox } from '../../styles'
import { Input } from '../atoms'
import useHover from '../../hooks/useHover'

const LinkStyled = styled(Link)`
  text-decoration: none;
`
const InputStyled = styled(Input)`
  background-color: transparent;
  text-decoration: none;
  border: none;
  transition: 0.8s;
  width: fit-content;

  @media only screen and (max-width: 600px) {
    font-size: ${dimensions.font.h5};
  }

  @media only screen and (min-width: 600px) {
    font-size: ${dimensions.font.h3};
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
const InputHoverStyled = styled(Input)`
  background-color: transparent;
  border: none;
  padding-left: 1rem;
  text-decoration: none;
  transition: 0.8s;
  width: fit-content;

  @media only screen and (max-width: 600px) {
    font-size: ${dimensions.font.h5};
    padding-left: 0rem;
  }

  @media only screen and (min-width: 600px) {
    font-size: ${dimensions.font.h3};
    padding-left: 0rem;
  }

  @media only screen and (min-width: 768px) {
    font-size: ${dimensions.font.h2};
    padding-left: 1rem;
  }

  @media only screen and (min-width: 992px) {
    font-size: ${dimensions.font.h1};
  }

  @media only screen and (min-width: 1200px) {
    font-size: ${dimensions.font.h1};
  }
`
const Button = styled.button`
  border: none;
  color: white;
  background-color: transparent;
  width: fit-content;

  @media only screen and (max-width: 600px) {
    margin-top: 4rem;
    visibility: visible;
  }
  @media only screen and (min-width: 600px) {
    margin-top: 4rem;
    visibility: visible;
  }
  @media only screen and (min-width: 768px) {
    visibility: hidden;
  }
`
function InputLink() {
  const [workIsHovering, workOnHoverProps] = useHover()
  const [aboutIsHovering, aboutOnHoverProps] = useHover()
  const [contactIsHovering, contactOnHoverProps] = useHover()
  const [isHovering, setIsHovering] = useState(false)

  function handleHover() {
    setIsHovering(!isHovering)
  }

  return (
    <>
      <LinkStyled to="/about" {...workOnHoverProps}>
        {workIsHovering || isHovering ? (
          <InputHoverStyled tag="h1" type="button" value="Sobre mí" />
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
        {aboutIsHovering || isHovering ? (
          <InputHoverStyled
            color={colors.font.main}
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
        {contactIsHovering || isHovering ? (
          <InputHoverStyled
            color={colors.font.main}
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
      <FlexBox align="center">
        <Button
          className="animate__animated animate__flipInX animate__infinite animate__slow"
          type="button"
          onClick={() => handleHover()}
        >
          Click aquí
        </Button>
      </FlexBox>
    </>
  )
}

export default InputLink
