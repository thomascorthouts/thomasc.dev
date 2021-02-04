/** @jsxImportSource theme-ui */
import { ThemeProvider, jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import { Global, css } from '@emotion/react'

import Header from './header'
import Footer from './footer'
import theme from '../theme'

const Layout = ({ title, children }) => (
  <ThemeProvider theme={theme}>
    <Global
      styles={css`
        body {
          margin: 0;
          -webkit-font-smoothing: antialiased;
        }
        svg {
          fill: currentColor;
        }
      `}
    />
    <Header title={title} />
    <main sx={{ color: 'greyDark', px: 3 }}>{children}</main>
    <Footer />
  </ThemeProvider>
)

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  title: 'Thomas Corthouts',
}

export default Layout
