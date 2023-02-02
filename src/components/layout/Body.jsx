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
  margin: 0rem 20rem 3rem 20rem;
  text-align: justify;

  @media (max-width: 768px) {
    margin: 0rem 2rem;
  }
  @media (max-width: 1200px) {
    margin: 0rem 5rem;
  }
`

function Body({ children }) {
  return (
    <>
      <HeaderContainer className="header-container" align="flex-end">
        <Header>sergio</Header>
      </HeaderContainer>
      <BodyContainer className="body-container">{children}</BodyContainer>
    </>
  )
}

Body.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Body
