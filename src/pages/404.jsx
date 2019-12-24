/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex, Box, Image, Text } from '@theme-ui/components'
import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Flex
      sx={{
        flexDirection: ['column-reverse', null, null, null, null, 'row'],
      }}
    >
      <Box sx={{ flex: 1, mt: [4, null, null, null, null, 0] }}>
        <div
          sx={{
            width: '100%',
            height: '0',
            pb: '69%',
            position: 'relative',
            maxWidth: 12,
            mx: 'auto',
          }}
        >
          <iframe
            src="https://giphy.com/embed/720g7C1jz13wI"
            width="100%"
            height="100%"
            sx={{ position: 'absolute' }}
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          />
        </div>
      </Box>
      <Box sx={{ flex: 2, px: 3 }}>
        <h1>Oopsie whoopsie</h1>
        <Text as="p" variant="regular" sx={{ maxWidth: 13 }}>
          Well, I guess we're here now...You hit a page that few people will see
          in their lives.. Unfortunately there isn't going on much around here,
          I'm sorry. Hopefully you will have more luck on{' '}
          <Link to="/" sx={{ color: 'inherit' }}>
            the homepage
          </Link>
          .
        </Text>
      </Box>
    </Flex>
  </Layout>
)

export default NotFoundPage
