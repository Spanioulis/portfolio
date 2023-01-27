import Body from '../components/layout/Body'
import { LinkText, Text, Title } from '../components/atoms'
import { colors } from '../styles'

function Contact() {
  return (
    <Body>
      <Title color={colors.font.base} tag="h2">
        Contacto
      </Title>
      <Text color={colors.font.base} tag="xl">
        Actualmente me encuentro en búsqueda activa de empleo, con ganas de
        seguir desarrollando mis habilidades y aportando mi experiencia
        profesional en una nueva oportunidad laboral. Estoy dispuesto a aprender
        y crecer en un ambiente desafiante y colaborativo. No dudes contactar
        conmigo aquí:
      </Text>
      <LinkText
        href="https://www.linkedin.com/in/sergio-paniagua-sanchez/"
        tag="xl"
        fontWeight="500"
      >
        Linkedin
      </LinkText>
      <LinkText href="https://github.com/Spanioulis/" tag="xl" fontWeight="500">
        GitHub
      </LinkText>
    </Body>
  )
}

export default Contact
