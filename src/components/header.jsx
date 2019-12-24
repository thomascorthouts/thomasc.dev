/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex, Box } from '@theme-ui/components'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Bitmoji from 'images/bitmoji.png'

const Header = ({ title }) => (
  <Flex
    as="header"
    sx={{
      bg: 'blue',
      color: `white`,
      mb: 3,
      p: 3,
      justifyContent: 'space-between',
    }}
  >
    <Box
      sx={{
        maxWidth: 13,
        display: 'flex',
      }}
    >
      <Link to="/">
        <img src={Bitmoji} alt="Bitmoji drawing of Thomas" sx={{ height: 3 }} />
      </Link>
      <h1 sx={{ margin: 0, ml: 3 }}>{title}</h1>
    </Box>
    <Box as="nav" sx={{ mt: 'auto' }}>
      <Link
        to="/"
        sx={{
          fontSize: 4,
          color: 'greyLighter',
          '&:hover, &:focus': { color: 'white' },
          textDecoration: 'none',
          ml: 2,
        }}
      >
        Home
      </Link>
      <Link
        to="/about"
        sx={{
          fontSize: 4,
          color: 'greyLighter',
          '&:hover, &:focus': { color: 'white' },
          textDecoration: 'none',
          ml: 2,
        }}
      >
        About
      </Link>
      <Link
        to="/contact"
        sx={{
          fontSize: 4,
          color: 'greyLighter',
          '&:hover, &:focus': { color: 'white' },
          textDecoration: 'none',
          ml: 2,
        }}
      >
        Contact
      </Link>
    </Box>
  </Flex>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
