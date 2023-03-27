/* eslint-disable react/no-unescaped-entities */
import styled from 'styled-components'
import Body from '../components/layout/Body'
import { IconDrive, LinkText, Text, Title } from '../components/atoms'
import { colors, dimensions, FlexBox } from '../styles'

const FlexBoxStyle = styled(FlexBox)`
  margin-top: 0.5rem;
`
const TitleStyle = styled(Title)`
  @media (max-width: 768px) {
    font-size: ${dimensions.font.h6};
  }
`
function About() {
  return (
    <Body>
      <TitleStyle
        className="animate__animated animate__fadeInUp"
        color={colors.font.base}
        tag="h4"
      >
        Sobre mí
      </TitleStyle>
      <Text
        as="blockquote"
        className="animate__animated animate__fadeInUp"
        color={colors.font.base}
        tag="xxl"
      >
        "El objetivo no debe ser llegar a un punto, sino avanzar desde donde
        estás. Esfuérzate día a día, y antes de lo que piensas volverás a estar
        orgulloso de ti."
        <cite>
          {' '}
          - Marcos Chicot, <i>El asesinato de Pitágoras (2013)</i>
        </cite>
        .
      </Text>
      <Text
        className="animate__animated animate__fadeInUp"
        color={colors.font.base}
        tag="xl"
      >
        ¡Hola, soy Sergio! Desarrollador front-end en ciernes, con un afán por
        mejorar y aprender continuamente. Hace un par de años, decidí dar un
        giro a mi carrera profesional buscando nuevas metas y motivaciones. A
        día de hoy, me siento realizado y puedo decir que estoy muy agradecido
        por haber tomado esta decisión. Sin duda, estoy seguro que esta será una
        experiencia enriquecedora y satisfactoria.
      </Text>
      <div
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1000"
        data-aos="fade-up"
      >
        <Text
          className="animate__animated animate__fadeInUp"
          color={colors.font.base}
          tag="xl"
        >
          Me considero una persona resolutiva y autodidacta, organizada, afable,
          y acostumbrada a trabajar en equipo y bajo presión. Aprendo rápido,
          soy capaz de adquirir nuevas habilidades con relativa facilidad, y soy
          curioso y con pensamiento analítico.
        </Text>
      </div>
      <div
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1000"
        data-aos="fade-up"
      >
        <Text color={colors.font.base} tag="xl">
          Puedes leer más sobre mi experiencia, habilidades y educación en el
          siguiente enlace:
        </Text>
      </div>
      <div
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1000"
        data-aos="fade-up"
      >
        <FlexBoxStyle direction="row" align="center">
          <IconDrive />
          <LinkText
            animationHover="animate__animated animate__jello"
            color={colors.font.tertiary}
            fontWeight="500"
            href="https://drive.google.com/file/d/1-JWWOgFbchccmhGsuNEe0lBe6eLyMNfI/view?usp=sharing"
            tag="xl"
          >
            Mi CV
          </LinkText>
        </FlexBoxStyle>
      </div>
      <div
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1000"
        data-aos="fade-up"
      >
        <FlexBoxStyle
          align="center"
          direction="row"
          margin="0rem 0rem 3rem 0rem"
        >
          <IconDrive />
          <LinkText
            animationHover="animate__animated animate__headShake"
            color={colors.font.tertiary}
            fontWeight="500"
            href="https://drive.google.com/file/d/1D84FhiLtg-_zUNnVCEYc_Emi9zn6ngrP/view?usp=sharing"
            tag="xl"
          >
            React JS - Bootcamp IT Academy Barcelona
          </LinkText>
        </FlexBoxStyle>
      </div>
    </Body>
  )
}

export default About
