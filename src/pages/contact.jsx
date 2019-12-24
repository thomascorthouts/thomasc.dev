/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex, Box, Image, Text } from '@theme-ui/components'
import React from 'react'
import { Link } from 'gatsby'

import Layout from 'components/layout'
import SEO from 'components/seo'

import ImageThomas from 'images/thomas.jpeg'
import IconGithub from 'images/icons/github.svg'
import IconLinkedIn from 'images/icons/linkedin.svg'
import IconTwitter from 'images/icons/twitter.svg'
import IconEmail from 'images/icons/email.svg'

import { GITHUB_LINK, LINKEDIN_LINK, TWITTER_LINK } from 'routes'

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
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
      <Box>
        <h1>
          Don't be a stranger <br /> just say hello.
        </h1>
        <Text as="section" variant="regular" sx={{ maxWidth: 13 }}>
          <p>
            {' '}
            I'll be honest, I stole{' '}
            <a href="https://ekkrit.design/contact" sx={{ color: 'inherit' }}>
              that headline
            </a>
            . But it seems to have caught your attention and that's exactly what
            I was going for. I'd love to get in touch with each and everyone of
            you so feel free to reach out through one of the socials or leave a
            note in the form at the bottom.
          </p>
        </Text>
        <h2>Socials</h2>
        <ul sx={{ listStyle: 'none', pl: 0 }}>
          <li>
            <a
              href={GITHUB_LINK}
              sx={{
                color: 'inherit',
                textDecoration: 'none',
                '&:hover, &:focus': { textDecoration: 'underline' },
              }}
            >
              <IconGithub
                sx={{
                  height: 2,
                  width: 2,
                  mx: 2,
                }}
              />
              Github: thomascorthouts
            </a>
          </li>
          <li>
            <a
              href={LINKEDIN_LINK}
              sx={{
                color: 'inherit',
                textDecoration: 'none',
                '&:hover, &:focus': { textDecoration: 'underline' },
              }}
            >
              <IconLinkedIn
                sx={{
                  height: 2,
                  width: 2,
                  mx: 2,
                }}
              />
              LinkedIn: Thomas Corthouts
            </a>
          </li>
          <li>
            <a
              href={TWITTER_LINK}
              sx={{
                color: 'inherit',
                textDecoration: 'none',
                '&:hover, &:focus': { textDecoration: 'underline' },
              }}
            >
              <IconTwitter
                sx={{
                  height: 2,
                  width: 2,
                  mx: 2,
                }}
              />
              Twitter: thomasc_dev
            </a>
          </li>
          <li>
            <IconEmail
              sx={{
                height: 2,
                width: 2,
                mx: 2,
              }}
            />
            E-mail: thomas@thomasc.dev
          </li>
        </ul>
      </Box>
    </Flex>
  </Layout>
)

export default ContactPage
