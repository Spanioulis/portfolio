/* eslint-disable react/no-unescaped-entities */
import Body from '../components/layout/Body'
import { Text, Title } from '../components/atoms'
import { colors } from '../styles'

function About() {
  return (
    <Body>
      <Title color={colors.font.base} tag="h2">
        About
      </Title>
      <Text color={colors.font.base} tag="xxl">
        <blockquote>
          "El objetivo de todo hombre no debe ser llegar a un punto, sino
          avanzar desde donde está. Esfuérzate día a día, y antes de lo que
          piensas volverás a estar orgulloso de ti."
          <cite>
            {' '}
            - Martín Chicot, <i>El asesinato de Pitágoras (2013)</i>
          </cite>
          .
        </blockquote>
      </Text>
    </Body>
  )
}

export default About
