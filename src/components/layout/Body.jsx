import styled from 'styled-components'
import PropTypes from 'prop-types'
// import SubHeader from './SubHeader'
import { FlexBox } from '../../styles'
import Header from './Header'

const HeaderContainer = styled(FlexBox)`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
`
const BodyContainer = styled(FlexBox)`
  margin-left: 20rem;
  margin-right: 20rem;
  text-align: justify;
  min-height: 100vh;
`

function Body({ children }) {
  return (
    <>
      <HeaderContainer className="header-container" align="flex-end">
        <Header>sergio</Header>
      </HeaderContainer>
      <BodyContainer>{children}</BodyContainer>
    </>
  )
}

Body.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Body
