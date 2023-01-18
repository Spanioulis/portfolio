import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors, dimensions } from '../../styles'

const SelectStyled = styled.select`
  border-radius: 10px;
  color: ${colors.font.base};
  font-size: ${dimensions.font.h5};
  padding: 0rem 0.5rem;
  width: 400px;
`

function Select({ value, value2, value3, value4 }) {
  return (
    <SelectStyled name="select">
      <option value="default" defaultValue={value}>
        {value}
      </option>
      <option value="value2">{value2}</option>
      <option value="value3">{value3}</option>
      <option value="value3">{value4}</option>
    </SelectStyled>
  )
}

Select.propTypes = {
  value: PropTypes.string.isRequired,
  value2: PropTypes.string.isRequired,
  value3: PropTypes.string.isRequired,
  value4: PropTypes.string.isRequired,
}

export default Select
