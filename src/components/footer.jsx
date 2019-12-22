/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex, Box, Image } from '@theme-ui/components'
import PropTypes from 'prop-types'
import React from 'react'

import { GITHUB_LINK, LINKEDIN_LINK, TWITTER_LINK } from 'routes'

import IconGithub from 'images/icons/github.svg'
import IconLinkedIn from 'images/icons/linkedin.svg'
import IconTwitter from 'images/icons/twitter.svg'

const Footer = () => (
  <Flex
    as="footer"
    sx={{
      mt: 3,
      py: 3,
      flexDirection: 'column',
      borderTopStyle: 'double',
      borderTopColor: 'blue',
    }}
  >
    <Box sx={{ mx: 'auto' }}>
      <a
        href={GITHUB_LINK}
        sx={{ color: 'greyLight', '&:hover, &:focus': { color: 'grey' } }}
      >
        <IconGithub
          sx={{
            height: 24,
            width: 24,
            mx: 2,
          }}
        />
      </a>
      <a
        href={LINKEDIN_LINK}
        sx={{ color: 'greyLight', '&:hover, &:focus': { color: 'grey' } }}
      >
        <IconLinkedIn
          sx={{
            height: 24,
            width: 24,
            mx: 2,
          }}
        />
      </a>
      <a
        href={TWITTER_LINK}
        sx={{ color: 'greyLight', '&:hover, &:focus': { color: 'grey' } }}
      >
        <IconTwitter
          sx={{
            height: 24,
            width: 24,
            mx: 2,
          }}
        />
      </a>
    </Box>
    <Box sx={{ mx: 'auto', mt: 2 }}>
      © 2019, Built with{' '}
      <a
        href="https://www.gatsbyjs.org"
        sx={{
          color: 'grey',
          textDecoration: 'none',
          '&:hover, &:focus': {
            color: 'greyDark',
            textDecoration: 'underline',
          },
        }}
      >
        Gatsby
      </a>
    </Box>
  </Flex>
)

export default Footer
