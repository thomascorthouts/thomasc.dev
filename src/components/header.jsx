/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex, Box } from '@theme-ui/components'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Bitmoji from 'images/bitmoji.png'

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

const Header = ({ title }) => (
  <Flex
    as="header"
    sx={{
      bg: 'blue',
      color: `white`,
      mb: 3,
      p: 3,
      justifyContent: 'space-between',
      flexDirection: ['column', null, 'row'],
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
      <div sx={{ mt: 'auto' }}>
        <h1 sx={{ fontSize: [4, 5], margin: 0, ml: 3 }}>{title}</h1>
      </div>
    </Box>
    <Box
      as="nav"
      sx={{
        mt: [3, null, 'auto'],
      }}
    >
      <HeaderLink path="/">Home</HeaderLink>
      <HeaderLink path="/about">About</HeaderLink>
      <HeaderLink path="/contact">Contact</HeaderLink>
    </Box>
  </Flex>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
