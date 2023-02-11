import styled from 'styled-components'
import { colors, FlexBox } from '../../styles'
import { Button, LinkText, Text, Title } from '../atoms'
import { link, repo, video } from '../../assets'
import { useModal } from '../../hooks'
import Modal from './Modal'
import infoModal from '../../constants/infoModal'

const LinkTextStyled = styled.a`
  margin: 0.1rem;
`
const FlexBoxStyle = styled(FlexBox)`
  margin-top: 1.5rem;
  gap: 2rem;
`
const FlexBoxStyle2 = styled(FlexBox)`
  margin-top: 0.7rem;
  gap: 0.5rem;
`
function Project() {
  console.log('InfoModal', infoModal)
  const [openModal1, closeModal1, isOpen1] = useModal(false)
  const [openModal2, closeModal2, isOpen2] = useModal(false)
  const [openModal3, closeModal3, isOpen3] = useModal(false)

  return (
    <>
      {/* Ed-Mundo! */}
      {isOpen1 && <Modal closeModal={closeModal1}>Edmundo</Modal>}
      <FlexBoxStyle direction="row">
        <FlexBox>
          <Title tag="h6" color={colors.font.secondary} margin="0rem">
            Ed Mundo!
          </Title>
          <FlexBox direction="row">
            <Button onClick={openModal1}>
              {' '}
              <img src={video} alt="Video logo" width="26px" />
            </Button>
            <Text tag="xxl" margin="0rem">
              App book released
            </Text>
          </FlexBox>
        </FlexBox>
        <FlexBoxStyle2 justify="center">
          <FlexBox direction="row" align="center">
            <LinkTextStyled
              href="https://ed-mundo.netlify.app/"
              rel="noopener noreferrer"
              target="_blank"
            >
              {' '}
              <img src={link} alt="Link logo" width="26px" />
            </LinkTextStyled>
            <LinkText
              animationHover="animate__animated animate__headShake"
              color={colors.font.main}
              fontWeight="500"
              href="https://ed-mundo.netlify.app/"
              margin="0rem 0rem 0rem 0.3rem"
              tag="xl"
            >
              Ver demo
            </LinkText>
          </FlexBox>
          <FlexBox direction="row" align="center">
            <LinkTextStyled
              href="https://github.com/Spanioulis/app-book-released"
              rel="noopener noreferrer"
              target="_blank"
            >
              {' '}
              <img src={repo} alt="Repo logo" width="26px" />
            </LinkTextStyled>
            <LinkText
              animationHover="animate__animated animate__headShake"
              color={colors.font.main}
              fontWeight="500"
              href="https://github.com/Spanioulis/app-book-released"
              margin="0rem 0rem 0rem 0.3rem"
              tag="xl"
            >
              Repositorio
            </LinkText>
          </FlexBox>
        </FlexBoxStyle2>
      </FlexBoxStyle>
      {/* SWAPI */}
      {isOpen2 && <Modal closeModal={closeModal2}>SWAPI</Modal>}
      <FlexBoxStyle direction="row">
        <FlexBox>
          <Title tag="h6" color={colors.font.secondary} margin="0rem">
            SWAPI
          </Title>
          <FlexBox direction="row">
            <Button onClick={openModal2}>
              {' '}
              <img src={video} alt="Video logo" width="26px" />
            </Button>
            <Text tag="xxl" margin="0rem">
              Star Wars API
            </Text>
          </FlexBox>
        </FlexBox>
        <FlexBoxStyle2 justify="center">
          <FlexBox direction="row" align="center">
            <LinkTextStyled
              href="https://swapi-spanioulis.netlify.app/"
              rel="noopener noreferrer"
              target="_blank"
            >
              {' '}
              <img src={link} alt="Link logo" width="26px" />
            </LinkTextStyled>
            <LinkText
              animationHover="animate__animated animate__headShake"
              color={colors.font.main}
              fontWeight="500"
              href="https://swapi-spanioulis.netlify.app/"
              margin="0rem 0rem 0rem 0.3rem"
              tag="xl"
            >
              Ver demo
            </LinkText>
          </FlexBox>
          <FlexBox direction="row" align="center">
            <LinkTextStyled
              href="https://github.com/Spanioulis/swapi"
              rel="noopener noreferrer"
              target="_blank"
            >
              {' '}
              <img src={repo} alt="Repo logo" width="26px" />
            </LinkTextStyled>
            <LinkText
              animationHover="animate__animated animate__headShake"
              color={colors.font.main}
              fontWeight="500"
              href="https://github.com/Spanioulis/swapi"
              margin="0rem 0rem 0rem 0.3rem"
              tag="xl"
            >
              Repositorio
            </LinkText>
          </FlexBox>
        </FlexBoxStyle2>
      </FlexBoxStyle>
      {/* Budget App */}
      {isOpen3 && <Modal closeModal={closeModal3}>Budgets</Modal>}
      <FlexBoxStyle direction="row">
        <FlexBox>
          <Title tag="h6" color={colors.font.secondary} margin="0rem">
            Budget App
          </Title>
          <FlexBox direction="row">
            <Button onClick={openModal3}>
              {' '}
              <img src={video} alt="Video logo" width="26px" />
            </Button>
            <Text tag="xxl" margin="0rem">
              App presupuestos
            </Text>
          </FlexBox>
        </FlexBox>
        <FlexBoxStyle2 justify="center">
          <FlexBox direction="row" align="center">
            <LinkTextStyled
              href="https://budgets-web.netlify.app/"
              rel="noopener noreferrer"
              target="_blank"
            >
              {' '}
              <img src={link} alt="Link logo" width="26px" />
            </LinkTextStyled>
            <LinkText
              animationHover="animate__animated animate__headShake"
              color={colors.font.main}
              fontWeight="500"
              href="https://budgets-web.netlify.app/"
              margin="0rem 0rem 0rem 0.3rem"
              tag="xl"
            >
              Ver demo
            </LinkText>
          </FlexBox>
          <FlexBox direction="row" align="center">
            <LinkTextStyled
              href="https://github.com/Spanioulis/budgets-app"
              rel="noopener noreferrer"
              target="_blank"
            >
              {' '}
              <img src={repo} alt="Repo logo" width="26px" />
            </LinkTextStyled>
            <LinkText
              animationHover="animate__animated animate__headShake"
              color={colors.font.main}
              fontWeight="500"
              href="https://github.com/Spanioulis/budgets-app"
              margin="0rem 0rem 0rem 0.3rem"
              tag="xl"
            >
              Repositorio
            </LinkText>
          </FlexBox>
        </FlexBoxStyle2>
      </FlexBoxStyle>
    </>
  )
}

export default Project
