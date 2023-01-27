import styled from 'styled-components'

const Image = styled.div`
  border: ${({ border }) => border || '1px solid #000'};
  border-radius: ${({ borderRadius }) => borderRadius || '100px'};
  height: ${({ height }) => height || '80%'};
  margin: ${({ height }) => height || '2.5rem'};
  width: ${({ width }) => width || '35%'};
`

export default Image
