import styled from 'styled-components'
import PropTypes from 'prop-types'

const SVGStyled = styled.svg`
  fill: ${({ fill }) => fill || '#4672FE'};
  height: ${({ height }) => height || '28px'};
  stroke: ${({ stroke }) => stroke || '#4672FE'};
  width: ${({ width }) => width || '28px'};
`

function IconSVG({ d, fill, height, stroke, width }) {
  return (
    <SVGStyled
      fill={fill}
      width={width}
      height={height}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      stroke={stroke}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        {' '}
        <path d={d} />{' '}
      </g>
    </SVGStyled>
  )
}

IconSVG.propTypes = {
  d: PropTypes.string.isRequired,
  fill: PropTypes.string,
  height: PropTypes.string,
  stroke: PropTypes.string,
  width: PropTypes.string,
}

export default IconSVG
