import styled from 'styled-components'
import logo from '../assets/images/home_machu_picchu.png'
import { InputLink } from '../components/molecules'

const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`
const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: font-size 1s ease;

  @media only screen and (max-width: 600px) {
    margin: 0rem 0rem 0rem 2rem;
  }
  @media only screen and (min-width: 600px) {
    margin: 0rem 0rem 0rem 5rem;
  }
  @media only screen and (min-width: 768px) {
    margin: 0rem 0rem 0rem 3rem;
  }
  @media only screen and (min-width: 992px) {
    margin: 5rem 0rem 0rem 3rem;
  }
  @media only screen and (min-width: 1200px) {
    margin: 5rem 0rem 0rem 11rem;
  }
`
const ImageContainer = styled.div`
  background-image: url(${logo});
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  /* box-shadow: 5px 0px 5px 0px #000000 inset; */
  flex: 1;
  max-height: 500px;
  max-width: 400px;
  overflow: hidden;

  @media only screen and (max-width: 600px) {
    visibility: hidden;
  }
  @media only screen and (min-width: 600px) {
    visibility: hidden;
  }
  @media only screen and (min-width: 768px) {
    max-height: 420px;
    max-width: 300px;
    margin: 5rem 1rem 3rem 0rem;
    visibility: visible;
  }
  @media only screen and (min-width: 992px) {
    max-height: 450px;
    max-width: 335px;
    margin: 4rem 2rem 4rem 0rem;
    visibility: visible;
  }
  @media only screen and (min-width: 1200px) {
    margin: 5rem 7rem 5rem 0rem;
    max-height: 500px;
    max-width: 400px;
    visibility: visible;
  }
  -webkit-mask-image: linear-gradient(
    to right,
    transparent,
    black 20px,
    black 90%,
    transparent
  );
  mask-image: linear-gradient(
    to right,
    transparent,
    black 20px,
    black 90%,
    transparent
  );
`
function Home() {
  return (
    <>
      <HomeContainer className="container">
        <TextContainer className="text-container">
          <InputLink />
        </TextContainer>
        <ImageContainer className="image-container animate__animated animate__fadeIn animate__slower"></ImageContainer>
      </HomeContainer>
    </>
  )
}

export default Home
