import styled from 'styled-components'
import PropTypes from 'prop-types'
// import SubHeader from './SubHeader'
import { FlexBox } from '../../styles'
import Header from './Header'

const BodyContainer = styled(FlexBox)`
  padding-left: 30rem;
  padding-right: 30rem;
  text-align: justify;
  min-height: 100vh;
`
const HeaderContainer = styled(FlexBox)`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
`

function Body({ children }) {
  return (
    <>
      <HeaderContainer className="header-container" align="flex-end">
        <Header>sergio</Header>
      </HeaderContainer>
      <BodyContainer align="center">{children}</BodyContainer>
    </>
  )
}

Body.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Body
