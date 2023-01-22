import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Text, Title } from '../components/atoms'
import { colors, FlexBox } from '../styles'

const HomeContainer = styled.div`
  display: flex;
  /* justify-content: flex-start; */
  align-items: center;
  padding-left: 15rem;
  min-height: 100vh;
`
const ImageContainer = styled.div`
  background-image: url('../assets/map-bcn.png');
  background-color: #cccccc;
  background-repeat: no-repeat;
  background-position: top;
  background-attachment: fixed;
  animation: fadeInBG 5s;

  @keyframes fadeInBG {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.5;
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
        <Link to="/work">
          <Text tag="xl">Work</Text>
        </Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </FlexBox>
      <ImageContainer />
    </HomeContainer>
  )
}

export default Home
