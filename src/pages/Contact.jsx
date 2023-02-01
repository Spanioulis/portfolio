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
      <Title
        color={colors.font.base}
        tag="h4"
        className="animate__animated animate__lightSpeedInLeft"
      >
        Contacto
      </Title>
      <Text
        color={colors.font.base}
        tag="xl"
        // className="animate__animated animate__lightSpeedInRight"
        // className="animate__animated animate__zoomIn animate__slower"
      >
        Actualmente me encuentro en búsqueda activa de empleo, con ganas de
        seguir desarrollando mis habilidades y aportando mi experiencia
        profesional en una nueva oportunidad laboral. No dudes en contactar
        conmigo aquí:
      </Text>
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
