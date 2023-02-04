import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FlexBox } from '../../styles'
import Header from './Header'

const HeaderContainer = styled(FlexBox)`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1;
`
const BodyContainer = styled(FlexBox)`
  text-align: justify;

  @media only screen and (max-width: 600px) {
    margin: 0rem 1.5rem;
  }

  @media only screen and (min-width: 600px) {
    margin: 0rem 3rem;
  }

  @media only screen and (min-width: 768px) {
    margin: 0rem 5rem;
  }

  @media only screen and (min-width: 992px) {
    margin: 0rem 7rem;
  }

  @media only screen and (min-width: 1200px) {
    margin: 0rem 20rem 5rem 15rem;
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
