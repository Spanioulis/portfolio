import Body from '../components/layout/Body'
import { Text, Title } from '../components/atoms'
import { colors } from '../styles'

function About() {
  return (
    <Body>
      <Title color={colors.font.base} tag="h2">
        About
      </Title>
      <Text color={colors.font.base}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        fugit, debitis tempore iusto pariatur nulla aliquid? Ipsa animi atque
        nobis nesciunt eos facere optio facilis consequatur sequi, nemo ut ea
        esse illum accusantium, dolore nam, sed magni corporis aliquid? Suscipit
        soluta eos hic enim placeat sapiente possimus, dolores odit odio?
      </Text>
    </Body>
  )
}

export default About
