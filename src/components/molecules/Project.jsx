import styled from 'styled-components'
import { colors, FlexBox } from '../../styles'
import { LinkText, Text, Title } from '../atoms'
import link from '../../assets/icons/link.svg'
import repo from '../../assets/icons/repo.svg'

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
  return (
    <>
      {/* Ed-Mundo! */}
      <FlexBoxStyle direction="row">
        <FlexBox>
          <Title tag="h6" color={colors.font.secondary} margin="0rem">
            Ed Mundo!
          </Title>
          <Text tag="xxl" margin="0rem">
            App book released
          </Text>
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
      <FlexBoxStyle direction="row">
        <FlexBox>
          <Title tag="h6" color={colors.font.secondary} margin="0rem">
            SWAPI
          </Title>
          <Text tag="xxl" margin="0rem">
            Star Wars API
          </Text>
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
      <FlexBoxStyle direction="row">
        <FlexBox>
          <Title tag="h6" color={colors.font.secondary} margin="0rem">
            Budgets App
          </Title>
          <Text tag="xxl" margin="0rem">
            Aplicación presupuestos
          </Text>
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
