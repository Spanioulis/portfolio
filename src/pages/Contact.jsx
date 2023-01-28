import styled from 'styled-components'
import Body from '../components/layout/Body'
import { IconSVG, LinkText, Text, Title } from '../components/atoms'
import { colors, FlexBox } from '../styles'

const FlexBoxStyle = styled(FlexBox)`
  margin-top: 0.8rem;
`

function Contact() {
  return (
    <Body>
      <Title color={colors.font.base} tag="h2">
        Contacto
      </Title>
      <Text
        color={colors.font.base}
        tag="xl"
        className="animate__animated animate__lightSpeedInRight"
      >
        Actualmente me encuentro en búsqueda activa de empleo, con ganas de
        seguir desarrollando mis habilidades y aportando mi experiencia
        profesional en una nueva oportunidad laboral. Estoy dispuesto a aprender
        y crecer en un ambiente desafiante y colaborativo. Me considero una
        persona resolutiva, acostumbrada a trabajar bajo presión, altruista...
      </Text>
      <Text
        color={colors.font.base}
        tag="xl"
        className="animate__animated animate__lightSpeedInRight"
      >
        No dudes en contactar conmigo aquí:
      </Text>
      <FlexBoxStyle direction="row" align="center">
        <IconSVG d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z" />
        <LinkText
          // animation="animate__animated animate__lightSpeedInLeft"
          animationHover="animate__animated animate__jello"
          fontWeight="500"
          href="https://github.com/Spanioulis/"
          tag="xl"
        >
          GitHub
        </LinkText>
      </FlexBoxStyle>
      <FlexBoxStyle direction="row" align="center">
        <IconSVG d="M27.26 27.271h-4.733v-7.427c0-1.771-0.037-4.047-2.475-4.047-2.468 0-2.844 1.921-2.844 3.916v7.557h-4.739v-15.271h4.552v2.083h0.061c0.636-1.203 2.183-2.468 4.491-2.468 4.801 0 5.692 3.161 5.692 7.271v8.385zM7.115 9.912c-1.527 0-2.751-1.235-2.751-2.756 0-1.516 1.229-2.749 2.751-2.749s2.755 1.233 2.755 2.749c0 1.521-1.233 2.756-2.755 2.756zM9.489 27.271h-4.749v-15.271h4.749zM29.636 0h-27.276c-1.303 0-2.36 1.031-2.36 2.307v27.387c0 1.276 1.057 2.307 2.36 2.307h27.271c1.301 0 2.369-1.031 2.369-2.307v-27.387c0-1.276-1.068-2.307-2.369-2.307z" />
        <LinkText
          // animation="animate__animated animate__lightSpeedInRight"
          animationHover="animate__animated animate__jello"
          fontWeight="500"
          href="https://www.linkedin.com/in/sergio-paniagua-sanchez/"
          tag="xl"
        >
          Linkedin
        </LinkText>
      </FlexBoxStyle>
      <FlexBoxStyle direction="row" align="center">
        <IconSVG d="M32 6v20c0 1.135-0.865 2-2 2h-2v-18.151l-12 8.62-12-8.62v18.151h-2c-1.135 0-2-0.865-2-2v-20c0-0.568 0.214-1.068 0.573-1.422 0.359-0.365 0.859-0.578 1.427-0.578h0.667l13.333 9.667 13.333-9.667h0.667c0.568 0 1.068 0.214 1.427 0.578 0.359 0.354 0.573 0.854 0.573 1.422z" />
        <LinkText
          // animation="animate__animated animate__lightSpeedInRight"
          animationHover="animate__animated animate__jello"
          fontWeight="500"
          href="mailto:pani77sps@gmail.com"
          tag="xl"
        >
          Email
        </LinkText>
      </FlexBoxStyle>
    </Body>
  )
}

export default Contact
