/* eslint-disable react/no-unescaped-entities */
import styled from 'styled-components'
import Body from '../components/layout/Body'
import { Text, Title } from '../components/atoms'
import { colors } from '../styles'

const TextStyled = styled(Text)`
  margin: 0rem;
`

function About() {
  return (
    <Body>
      <Title color={colors.font.base} tag="h2">
        About
      </Title>
      <TextStyled
        as="blockquote"
        className="animate__animated animate__fadeInTopLeft"
        color={colors.font.base}
        tag="xxl"
      >
        "El objetivo de todo hombre no debe ser llegar a un punto, sino avanzar
        desde donde está. Esfuérzate día a día, y antes de lo que piensas
        volverás a estar orgulloso de ti."
        <cite>
          {' '}
          - Martín Chicot, <i>El asesinato de Pitágoras (2013)</i>
        </cite>
        .
      </TextStyled>
    </Body>
  )
}

export default About
