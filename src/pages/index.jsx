/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Link } from 'gatsby'

import Layout from 'components/layout'
import Image from 'components/image'
import SEO from 'components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div sx={{ maxWidth: 9, marginBottom: 3 }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
