import PropTypes from 'prop-types'
import React from 'react'
import { Text } from '../atoms'

function Header({ children }) {
  return <Text tag="xl">{children}</Text>
}

export default Header

Header.propTypes = {
  children: PropTypes.string.isRequired,
}
