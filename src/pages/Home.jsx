import styled from 'styled-components'
// import { Image } from '../components/atoms'
import { FlexBox } from '../styles'
import logo from '../assets/images/home_machu_picchu.png'
import { InputLink } from '../components/molecules'

// import '../App'

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  margin: -2rem 0rem 0rem 10rem;
  min-height: 100vh;
`
// const ImageContainer = styled(Image)`
//   background-image: url(${logo});
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
//   position: absolute;
//   right: 5%;
//   border-top: 1px solid #000;
//   filter: blur(5px);
// `

function Home() {
  return (
    <HomeContainer>
      <FlexBox>
        <InputLink />
      </FlexBox>
      <div className="image-container animate__animated animate__fadeIn animate__slower">
        <img src={logo} alt="Logo" />
      </div>
    </HomeContainer>
  )
}

export default Home
