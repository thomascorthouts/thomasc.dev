/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import React from 'react'

const Footer = () => (
  <footer
    sx={{
      bg: 'blue',
      color: 'white',
      py: 2,
      mt: 3,
      pl: 3,
    }}
  >
    © 2019, Built with{' '}
    <a href="https://www.gatsbyjs.org" sx={{ color: 'white' }}>
      Gatsby
    </a>
  </footer>
)

export default Footer
