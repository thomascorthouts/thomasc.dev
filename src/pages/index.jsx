/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex, Box } from '@theme-ui/components'
import React from 'react'
import { Link } from 'gatsby'

import Layout from 'components/layout'
import Image from 'components/image'
import SEO from 'components/seo'

import ImageThomas from 'images/thomas.jpeg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Flex
      sx={{
        flexDirection: ['column-reverse', null, null, null, null, 'row'],
      }}
    >
      <img
        src={ImageThomas}
        alt="Frontal image of Thomas' face"
        sx={{
          maxWidth: 9,
          mx: [null, null, null, null, null, 5],
          borderRadius: t => t.radii[0],
        }}
      />
      <Box>
        <h1>Hi y'all! 👋</h1>
        <p sx={{ maxWidth: 13, fontSize: [2, null, 3] }}>
          My name is Thomas Corthouts, I'm a full-stack software engineer who
          currently works on the Growth Team at DataCamp.
        </p>
      </Box>
    </Flex>
  </Layout>
)

export default IndexPage
