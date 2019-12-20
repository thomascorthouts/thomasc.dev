/** @jsx jsx */
import { ThemeProvider, jsx } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { Global, css } from '@emotion/core'

import Header from './header'
import Footer from './footer'
import theme from 'theme'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          body {
            margin: 0;
            -webkit-font-smoothing: antialiased;
          }
        `}
      />
      <Header siteTitle={data.site.siteMetadata.title} />
      <main sx={{ color: 'greyDark', px: 3 }}>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
