import styled from 'styled-components'
import PropTypes from 'prop-types'
// import SubHeader from './SubHeader'
import { FlexBox } from '../../styles'
import Header from './Header'

const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  /* text-align: justify; */
  /* padding-left: 30rem; */
  min-height: 100vh;
`

function Body({ children }) {
  return (
    <BodyContainer>
      <FlexBox>
        <Header>sergio</Header>
        {/* <SubHeader /> */}
        {children}
      </FlexBox>
    </BodyContainer>
  )
}

Body.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Body
