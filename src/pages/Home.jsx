import styled from 'styled-components'
import { Image } from '../components/atoms'
import { FlexBox } from '../styles'
import logo from '../assets/images/home_machu_picchu.png'
import { InputLink } from '../components/molecules'

// import '../App'

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 12rem;
  min-height: 100vh;
`
const ImageContainer = styled(Image)`
  /* animation: fadeInBG 3s ease-in-out; */
  background-image: url(${logo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  right: 5%;
  border-top: 1px solid #000;
  filter: blur(5px);

  /* @keyframes fadeInBG {
    0% {
      opacity: 0;
      filter: blur(5px);
    }
    50% {
      opacity: 0.5;
      filter: blur(5px);
    }
    100% {
      opacity: 1;
    }
  } */
`

function Home() {
  return (
    <HomeContainer>
      <FlexBox>
        <InputLink />
      </FlexBox>
      {/* <ImageContainer className="animate__animated animate__zoomIn animate__slower" /> */}
      <div className="image-container animate__animated animate__zoomIn animate__slower">
        <img src={logo} alt="Logo" />
        {/* <img src={logo} alt="Logo" /> */}
      </div>
    </HomeContainer>
  )
}

export default Home
