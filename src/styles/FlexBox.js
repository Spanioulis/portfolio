import styled from 'styled-components'

const FlexBox = styled.div`
  align-items: ${({ align }) => align || 'stretch'};
  display: flex;
  flex-direction: ${({ direction }) => direction || 'column'};
  flex-wrap: ${({ wrap }) => wrap || 'no-wrap'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
`

export default FlexBox
