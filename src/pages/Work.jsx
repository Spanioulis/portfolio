import styled from 'styled-components'
import Body from '../components/layout/Body'
import { IconDrive, LinkText, Text, Title } from '../components/atoms'
import { colors, FlexBox } from '../styles'

const FlexBoxStyle = styled(FlexBox)`
  margin-top: 0.8rem;
`

function Work() {
  return (
    <Body>
      <Title color={colors.font.base} tag="h2">
        Developer
      </Title>
      <Text
        color={colors.font.base}
        tag="xl"
        className="animate__animated animate__lightSpeedInLeft"
      >
        Hace un año aproximadamente, empecé en el Bootcamp de IT Academy
        (Cibernàrium - Barcelona Activa), donde he adquirido múltiples
        capacidades y habilidades.
      </Text>
      <Text
        color={colors.font.base}
        tag="xl"
        className="animate__animated animate__lightSpeedInLeft"
      >
        {' '}
        Hice una primera etapa de Fundamentos de la Programación con Vanilla
        JavaScript, donde se incidió mucho en la lógica de la programación. En
        la segunda etapa, en el Itinerario de React JS, profundicé en
        maquetación (HTML5, CSS3, Bootstrap, Tailwind, Styled Components),
        reforcé los conocimientos de JavaScript intentando reducir el código y
        hacerlo más legible (con ECMAScript 6), y realicé un sprint con
        TypeScript consumiendo datos de una API Rest.
      </Text>
      <Text
        color={colors.font.base}
        tag="xl"
        className="animate__animated animate__lightSpeedInLeft"
      >
        La segunda mitad y más importante del itinerario, estuvo dedicada
        exclusivamente a la biblioteca React JS. Empezando por su sintaxis JSX,
        estructura de componentes, hooks básicos (useState, useEffect,
        useContext), custom hooks, etc. Junto con otros conceptos/herramientas
        como React Router, Axios, fetch, debugging, consumo de datos de más
        APIs, Jest & react-testing-library. Hasta la creación de mi proyecto
        final{' '}
        <a
          href="https://github.com/Spanioulis/app-book-released"
          target="_blank"
          rel="noreferrer noopener"
        >
          Ed-Mundo!
        </a>
        , donde pude plasmar todos esos conocimientos aprendidos.
      </Text>
      <Text
        color={colors.font.base}
        tag="xl"
        className="animate__animated animate__lightSpeedInLeft"
      >
        En diciembre de 2022 obtuve el certificado de desarrollador Front-end en
        ReactJS, y actualmente estoy acabando un curso de React JS Avanzado,
        impartido por la misma IT Academy, donde estamos profundizando en la
        generación de un código más limpio, reutilizable, seguro y capaz de
        generar aplicaciones con mayor performance; creando proyectos
        estructurados con metodología de diseño <i>Atomic Design</i> (atoms,
        molecules, organisms), usando Redux & Redux Toolkit, useContext y
        useReducer combinados, layouts con Styled Components, añadir reglas
        ESLint, implementación PropTypes, etc. con entornos de desarrollo como
        VSC y CodeSandbox.
      </Text>
      <FlexBoxStyle direction="row" align="center">
        <IconDrive />
        <LinkText
          // animation="animate__animated animate__lightSpeedInLeft"
          animationHover="animate__animated animate__jello"
          color={colors.font.tertiary}
          fontWeight="500"
          href="https://drive.google.com/file/d/1-JWWOgFbchccmhGsuNEe0lBe6eLyMNfI/view?usp=sharing"
          tag="xl"
        >
          Mi CV
        </LinkText>
      </FlexBoxStyle>

      <FlexBoxStyle direction="row" align="center">
        <IconDrive />
        <LinkText
          // animation="animate__animated animate__lightSpeedInLeft"
          animationHover="animate__animated animate__jello"
          color={colors.font.tertiary}
          fontWeight="500"
          href="https://drive.google.com/file/d/1D84FhiLtg-_zUNnVCEYc_Emi9zn6ngrP/view?usp=sharing"
          tag="xl"
        >
          React JS - Bootcamp IT Academy Barcelona
        </LinkText>
      </FlexBoxStyle>
    </Body>
  )
}

export default Work
