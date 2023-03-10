import styled from 'styled-components'
import Body from '../components/layout/Body'
import { IconSVG, LinkText, Text, Title } from '../components/atoms'
import { Project } from '../components/molecules'
import IconsDev from '../components/molecules/IconsDev'
import { colors, dimensions, FlexBox } from '../styles'

const IconContainer = styled.div`
  margin: 3.7rem 0rem 0rem 1.5rem;
  @media (max-width: 768px) {
    margin: 3.7rem 0rem 0rem 0.3rem;
  }
`
const TitleStyle = styled(Title)`
  @media (max-width: 768px) {
    font-size: ${dimensions.font.h6};
  }
`
const TextStyle = styled(Text)`
  text-align: left;
`
function Work() {
  return (
    <Body>
      <FlexBox
        direction="row"
        align="center"
        className="animate__animated animate__fadeInLeft"
      >
        <TitleStyle color={colors.font.base} tag="h4">
          Developer
        </TitleStyle>
        <IconContainer className="animate__animated animate__heartBeat animate__infinite animate__slower">
          <LinkText href="https://github.com/Spanioulis">
            <IconSVG
              d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"
              fill="goldenrod"
              height="64px"
              stroke="goldenrod"
              width="64px"
            />
          </LinkText>
        </IconContainer>
      </FlexBox>
      <Text
        className="animate__animated animate__fadeInLeft"
        color={colors.font.base}
        tag="xl"
      >
        Hace un a??o aproximadamente, empec?? en el Bootcamp de IT Academy
        (Cibern??rium - Barcelona Activa), donde he adquirido m??ltiples
        capacidades y habilidades.
      </Text>
      <Text
        className="animate__animated animate__fadeInLeft"
        color={colors.font.base}
        tag="xl"
      >
        {' '}
        Hice una primera etapa de Fundamentos de la Programaci??n con Vanilla
        JavaScript, donde se incidi?? mucho en la l??gica de la programaci??n. En
        la segunda etapa, en el Itinerario de React JS, profundic?? en
        maquetaci??n (HTML5, CSS3, Bootstrap, Tailwind, Styled Components),
        reforc?? los conocimientos de JavaScript intentando reducir el c??digo y
        hacerlo m??s legible (con ECMAScript 6), y realic?? un sprint con
        TypeScript consumiendo datos de una API Rest.
      </Text>
      <div
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1000"
        data-aos="fade-right"
      >
        <Text
          className="animate__animated animate__fadeInLeft"
          color={colors.font.base}
          tag="xl"
        >
          La segunda mitad y m??s importante del itinerario, estuvo dedicada
          exclusivamente a la biblioteca React JS. Empezando por su sintaxis
          JSX, estructura de componentes, hooks b??sicos (useState, useEffect,
          useContext), custom hooks, etc. Junto con otros conceptos/herramientas
          como React Router, Axios, fetch, debugging, consumo de datos de m??s
          APIs, Jest & react-testing-library. Hasta la creaci??n de mi proyecto
          final (Ed Mundo!), donde pude plasmar todos esos conocimientos
          aprendidos.
        </Text>
      </div>
      <div
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1000"
        data-aos="fade-right"
      >
        <Text
          className="animate__animated animate__fadeInLeft"
          color={colors.font.base}
          tag="xl"
        >
          En diciembre de 2022 obtuve el certificado de desarrollador Front-end
          en ReactJS, y posteriormente realic?? un Upskilling de React JS
          Avanzado, impartido por la misma IT Academy, donde profundizamos en la
          generaci??n de un c??digo m??s limpio, reutilizable, seguro y capaz de
          generar aplicaciones con mayor performance; creando proyectos
          estructurados con metodolog??a de dise??o <i>Atomic Design</i> (atoms,
          molecules, organisms), usando Redux & Redux Toolkit, useContext y
          useReducer combinados, layouts con Styled Components, a??adiendo reglas
          ESLint, implementaci??n PropTypes, etc. con entornos de desarrollo como
          VSC y CodeSandbox.
        </Text>
      </div>
      <div
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1000"
        data-aos="fade-right"
      >
        <Text
          className="animate__animated animate__fadeInLeft"
          color={colors.font.base}
          tag="xl"
        >
          He formado parte de un equipo para el desarrollo de una App (demo) en
          React JS, cuya duraci??n fue un sprint 2 semanas intensivas de
          dedicaci??n completa
          <LinkText
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/vicenlu/ita-game"
            color={colors.tertiary}
          >
            -ITA Game-{' '}
          </LinkText>
          . Actualmente estoy trabajando en este proyecto
          <LinkText
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/Spanioulis/lab-app"
            color={colors.secondary}
          >
            -Lab App-{' '}
          </LinkText>{' '}
          para un Hospital (reserva de laboratorios y material), y colaborando
          activamente en este proyecto fullstack
          <LinkText
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/IT-Academy-BCN/ita-directory"
            color={colors.tertiary}
          >
            -ITA Directory-{' '}
          </LinkText>
          desarrollado con ReactJS + NodeJS (CI/CD), cuyas funciones son
          realizar Issues (o crearlas), migrar de JavaScript a TypeScript,
          estilizar (Styled Components) o acabar de perfilar componentes,
          trabajar con Git, Pull Requests y revisi??n de c??digo en GitHub.
        </Text>
      </div>
      <div
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1000"
        data-aos="fade-right"
      >
        <FlexBox>
          <Title tag="h5" margin="2rem 0rem 0.2rem 0rem">
            Mis proyectos
          </Title>
        </FlexBox>
      </div>
      <Project />
      <div
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1000"
        data-aos="fade-right"
      >
        {/* <FlexBox> */}
        <TextStyle tag="xxxl" margin="3rem 0rem 1rem 0rem">
          Lenguajes, bibliotecas, librer??as & herramientas
        </TextStyle>
        {/* </FlexBox> */}
      </div>
      <div
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1000"
        data-aos="fade-right"
      >
        <IconsDev />
      </div>
    </Body>
  )
}

export default Work
