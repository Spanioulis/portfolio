import styled from 'styled-components'

// Debería llamarse Card
// Podría ser un styled(FlexBox)
const Cards = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'column'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  max-height: ${({ maxWidth }) => maxWidth || '300px'};
  border-radius: ${({ borderRadius }) => borderRadius || '15px'};
  box-shadow: ${({ boxShadow }) => boxShadow || '5px 5px 20px gray'};
`
export default Cards
