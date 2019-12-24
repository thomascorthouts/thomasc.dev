/** @jsx jsx */
import { jsx } from 'theme-ui'
import {
  Flex,
  Box,
  Image,
  Text,
  Label,
  Input,
  Button,
  Textarea,
} from '@theme-ui/components'
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
        . But it seems to have caught your attention and that's exactly what I
        was going for. I'd love to get in touch with each and everyone of you so
        feel free to reach out through one of the socials or leave a note in the
        form at the bottom.
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
    <h2>Contact Form</h2>
    <Box
      as="form"
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      sx={{ maxWidth: 12 }}
    >
      <input type="hidden" name="form-name" value="contact" />
      <Label htmlFor="name">Name:</Label>
      <Input name="name" sx={{ mb: 3, maxWidth: 9 }} />
      <Label htmlFor="email">Email:</Label>
      <Input name="email" sx={{ mb: 3, maxWidth: 9 }} />
      <Label htmlFor="message">Message:</Label>
      <Textarea name="message" rows="5" sx={{ mb: 3, maxWidth: 10 }} />
      <Button>Submit</Button>
    </Box>
  </Layout>
)

export default ContactPage
