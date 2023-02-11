import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../../styles'

const ButtonStyled = styled.button`
  padding: 0rem 0.2rem 0rem 0rem;
  cursor: pointer;
  width: fit-content;
`
export default function Button({
  children,
  color = colors.main,
  onClick = () => {},
}) {
  return (
    <ButtonStyled
      type="button"
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      {children}
    </ButtonStyled>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func,
}
