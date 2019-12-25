/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const HeaderLink = ({ path, children }) => (
  <Link
    to={path}
    sx={{
      fontSize: 4,
      color: 'greyLighter',
      '&:hover, &:focus': { color: 'white' },
      textDecoration: 'none',
      px: [3, null, 2],
    }}
    activeStyle={{
      backgroundColor: 'white',
      borderRadius: '4px',
      color: '#3260ab',
    }}
  >
    {children}
  </Link>
)

HeaderLink.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default HeaderLink
