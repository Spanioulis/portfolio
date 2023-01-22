import styled from 'styled-components'
import map from '../../assets/images/map-bcn.png'

const Map = styled.div`
  background-image: url(${map});
  border-radius: 15px;
  flex: 1;
  margin: 1.2rem 1.2rem 2rem 0rem;
  object-fit: cover;
  box-shadow: 5px 5px 20px gray;
`
export default Map
