import styled from 'styled-components'
import Body from '../components/layout/Body'
import { IconSVG, LinkText, Text, Title } from '../components/atoms'
import { colors, FlexBox } from '../styles'
import IconsDev from '../components/molecules/IconsDev'
import { Project } from '../components/molecules'

const IconContainer = styled.div`
  margin: 3.7rem 0rem 0rem 1.5rem;
`
function Work() {
  return (
    <Body>
      <FlexBox
        direction="row"
        align="center"
        className="animate__animated animate__fadeInLeft"
      >
        <Title color={colors.font.base} tag="h4">
          Developer
        </Title>
        <IconContainer className="animate__animated animate__heartBeat animate__infinite animate__slower">
          {/* <IconContainer className="animate__animated animate__zoomIn animate__infinite"> */}
          <LinkText href="https://github.com/Spanioulis">
            <IconSVG
              fill="goldenrod"
              stroke="goldenrod"
              height="64px"
              width="64px"
              d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"
            />
          </LinkText>
        </IconContainer>
      </FlexBox>
      <Text
        color={colors.font.base}
        tag="xl"
        className="animate__animated animate__fadeInLeft"
      >
        Hace un año aproximadamente, empecé en el Bootcamp de IT Academy
        (Cibernàrium - Barcelona Activa), donde he adquirido múltiples
        capacidades y habilidades.
      </Text>
      <Text
        color={colors.font.base}
        tag="xl"
        className="animate__animated animate__fadeInLeft"
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
      <div
        data-aos="fade-right"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1000"
      >
        <Text
          color={colors.font.base}
          tag="xl"
          className="animate__animated animate__fadeInLeft"
        >
          La segunda mitad y más importante del itinerario, estuvo dedicada
          exclusivamente a la biblioteca React JS. Empezando por su sintaxis
          JSX, estructura de componentes, hooks básicos (useState, useEffect,
          useContext), custom hooks, etc. Junto con otros conceptos/herramientas
          como React Router, Axios, fetch, debugging, consumo de datos de más
          APIs, Jest & react-testing-library. Hasta la creación de mi proyecto
          final{' '}
          {/* <a
          href="https://github.com/Spanioulis/app-book-released"
          target="_blank"
          rel="noreferrer noopener"
        >
          Ed-Mundo!
        </a> */}
          , donde pude plasmar todos esos conocimientos aprendidos.
        </Text>
      </div>
      <div
        data-aos="fade-right"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1000"
      >
        {' '}
        <Text
          color={colors.font.base}
          tag="xl"
          className="animate__animated animate__fadeInLeft"
        >
          En diciembre de 2022 obtuve el certificado de desarrollador Front-end
          en ReactJS, y actualmente estoy acabando un curso de React JS
          Avanzado, impartido por la misma IT Academy, donde estamos
          profundizando en la generación de un código más limpio, reutilizable,
          seguro y capaz de generar aplicaciones con mayor performance; creando
          proyectos estructurados con metodología de diseño <i>Atomic Design</i>{' '}
          (atoms, molecules, organisms), usando Redux & Redux Toolkit,
          useContext y useReducer combinados, layouts con Styled Components,
          añadir reglas ESLint, implementación PropTypes, etc. con entornos de
          desarrollo como VSC y CodeSandbox.
        </Text>
      </div>
      <div
        data-aos="fade-right"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1000"
      >
        {' '}
        <FlexBox>
          <Title tag="h5" margin="2rem 0rem 0.2rem 0rem">
            Mis proyectos
          </Title>
        </FlexBox>
      </div>
      <Project />
      <div
        data-aos="fade-right"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1000"
      >
        {' '}
        <FlexBox>
          <Text tag="xxxl" margin="3rem 0rem 1rem 0rem">
            Lenguajes, bibliotecas, librerías & herramientas...
          </Text>
        </FlexBox>
      </div>
      <div
        data-aos="fade-right"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1000"
      >
        <IconsDev />
      </div>
    </Body>
  )
}

export default Work
