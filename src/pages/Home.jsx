import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Title } from '../components/atoms'
import { colors, FlexBox } from '../styles'
import map from '../assets/images/map-bcn.png'

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

const TitleStyled = styled(Title)`
  margin: 0.1rem;
`

function Home() {
  return (
    <HomeContainer>
      <FlexBox>
        <TitleStyled tag="h1">Hola.</TitleStyled>
        <TitleStyled tag="h1" color={colors.font.secondary}>
          Soy
        </TitleStyled>
        <TitleStyled tag="h1" color={colors.font.main}>
          Sergio
        </TitleStyled>
      </FlexBox>
      <FlexBox>
        <Link to="/work">Work</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </FlexBox>
      <ImageContainer>...</ImageContainer>
    </HomeContainer>
  )
}

export default Home
