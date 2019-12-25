/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex, Box } from '@theme-ui/components'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'

import HeaderLink from './navlink'

import Bitmoji from 'images/bitmoji.png'

const Header = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      bitmojiImage: file(relativePath: { eq: "bitmoji.png" }) {
        childImageSharp {
          fixed(width: 32) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
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
          <Image
            fixed={data.bitmojiImage.childImageSharp.fixed}
            alt="Bitmoji drawing of Thomas"
          />
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
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
