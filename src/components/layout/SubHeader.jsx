import React from 'react'
import styled from 'styled-components'
import { FlexBox } from '../../styles'
import { Icon, Select } from '../atoms'

const SubHeaderStyled = styled(FlexBox)`
  background-color: lightblue;
  gap: 1.2rem;
  padding-bottom: 0.9em;
  padding-left: 1.3rem;
  padding-right: 2rem;
  padding-top: 0.9em;
`

function SubHeader({ ...props }) {
  return (
    <SubHeaderStyled {...props} direction="row">
      {/* Cada Select debe tener un label asociado */}
      <Select
        value="Piso, chalet o garaje..."
        value2="Piso"
        value3="Chalet"
        value4="Garaje"
      />
      <Select
        value="Madrid, Barcelona o Zaragoza..."
        value2="Madrid"
        value3="Barcelona"
        value4="Zaragoza"
      />
      <Icon name="search" />
    </SubHeaderStyled>
  )
}

export default styled(SubHeader)``
