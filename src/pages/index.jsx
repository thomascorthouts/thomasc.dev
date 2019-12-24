/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex, Box, Image, Text } from '@theme-ui/components'
import React from 'react'
import { Link } from 'gatsby'

import Layout from 'components/layout'
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
      <Image
        src={ImageThomas}
        alt="Frontal image of Thomas' face"
        variant="large"
      />
      <Box
        sx={{
          mb: [3, null, null, null, null, 0],
          ml: [null, null, null, null, null, 4],
          maxWidth: 13,
        }}
      >
        <h1>Hi y'all! 👋</h1>
        <Text as="p" variant="regular">
          My name is Thomas Corthouts, I'm a full-stack software engineer who
          currently works on the Growth Team at DataCamp.
        </Text>
      </Box>
    </Flex>
  </Layout>
)

export default IndexPage
