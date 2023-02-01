import styled from 'styled-components'
import PropTypes from 'prop-types'

const SVGStyled = styled.svg`
  fill: ${({ fill }) => fill || 'goldenrod'};
  height: ${({ height }) => height || '96px'};
  stroke: ${({ stroke }) => stroke || 'goldenrod'};
  width: ${({ width }) => width || '96px'};
`

function IconDev({ d, fill, height, width }) {
  return (
    <SVGStyled viewBox="0 0 128 128" height={height} width={width}>
      <path fillRule="evenodd" clipRule="evenodd" d={d} fill={fill} />
    </SVGStyled>
  )
}

IconDev.propTypes = {
  d: PropTypes.string.isRequired,
  fill: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
}

export default IconDev
