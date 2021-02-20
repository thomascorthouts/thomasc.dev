/** @jsxImportSource theme-ui */
import { ThemeProvider } from 'theme-ui'
import { Global, css } from '@emotion/react'

import Header from './header'
import Footer from './footer'
import theme from 'theme'

type Props = {
  title?: string
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ title = 'Thomas Corthouts', children }) => (
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

export default Layout
