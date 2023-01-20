import styled from 'styled-components'
import PropTypes from 'prop-types'

// El icono solo debería de renderizar el icono, si le das un background gradient, no se pueden usar otros iconos en otros puntos de la app.
const IconStyled = styled.span`
  color: ${({ color }) => color || 'whitesmoke'};
  background-color: ${({ backgroundColor }) => backgroundColor || '#0096c7'};
  background: linear-gradient(
    160deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 0%,
    rgba(118, 232, 255, 1) 0%,
    rgba(57, 91, 255, 1) 100%
  );
  border-radius: ${({ borderRadius }) => borderRadius || '10px'};
  font-size: ${({ size }) => size || '28px'};
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;
  margin: ${({ margin }) => margin || '0.4rem'};
  padding: ${({ padding }) => padding || '0.4rem'};
  cursor: pointer;
`

function Icon({ name, color, size, ...props }) {
  return (
    <IconStyled
      {...props}
      className="material-symbols-outlined"
      color={color}
      size={size}
    >
      {name}
    </IconStyled>
  )
}

Icon.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
}

export default Icon
