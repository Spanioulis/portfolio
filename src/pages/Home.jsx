import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Input } from '../components/atoms'
import { colors, FlexBox } from '../styles'
import map from '../assets/images/map-bcn.png'
import { useShown } from '../hooks'

const HomeContainer = styled.div`
  display: flex;
  /* justify-content: flex-start; */
  align-items: center;
  padding-left: 15rem;
  min-height: 100vh;
`
const ImageContainer = styled.div`
  height: 500px;
  width: 100%;
  margin-left: 3rem;
  /* background-color: #cccccc; */
  background-image: url(${map});
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  animation: fadeInBG 5s;

  @keyframes fadeInBG {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 0.8;
    }
  }
`
const LinkStyled = styled(Link)`
  text-decoration: none;
  margin-right: 2rem;
`

const InputStyled = styled(Input)`
  background-color: ${colors.main};
  text-decoration: none;
  border: none;
`

function Home() {
  const {
    onMouseEnter,
    onMouseLeave,
    isShownWork,
    isShownAbout,
    isShownContact,
  } = useShown()

  return (
    <HomeContainer>
      <FlexBox>
        <LinkStyled
          to="/work"
          onMouseEnter={(e) => onMouseEnter(e)}
          onMouseLeave={(e) => onMouseLeave(e)}
        >
          {isShownWork ? (
            <InputStyled
              tag="h1"
              color={colors.font.secondary}
              type="button"
              value="Work"
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
        <LinkStyled
          to="/about"
          onMouseEnter={(e) => onMouseEnter(e)}
          onMouseLeave={(e) => onMouseLeave(e)}
        >
          {isShownAbout ? (
            <InputStyled
              tag="h1"
              color={colors.font.secondary}
              type="button"
              value="About"
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
        <LinkStyled
          to="/contact"
          onMouseEnter={(e) => onMouseEnter(e)}
          onMouseLeave={(e) => onMouseLeave(e)}
        >
          {isShownContact ? (
            <InputStyled
              tag="h1"
              color={colors.font.secondary}
              type="button"
              value="Contacto"
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
      </FlexBox>
      <ImageContainer>...</ImageContainer>
    </HomeContainer>
  )
}

export default Home
