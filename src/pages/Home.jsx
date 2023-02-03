import styled from 'styled-components'
import { FlexBox } from '../styles'
import logo from '../assets/images/home_machu_picchu.png'
import { InputLink } from '../components/molecules'

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0rem 0rem 0rem 10rem;
  min-height: 100vh;

  @media (max-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
    margin: 2rem 0rem 0rem 2rem;
  }
`
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
