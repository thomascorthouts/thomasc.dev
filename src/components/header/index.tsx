/** @jsxImportSource theme-ui */
import { Flex, Box } from 'theme-ui'
import Link from 'next/link'
import { useRouter } from 'next/router'

import HeaderLink from './navlink'

type Props = {
  title: string
}

const Header: React.FC<Props> = ({ title }) => {
  const router = useRouter()
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
        <Link href="/">
          <a>
            <img
              src="/bitmoji.png"
              sx={{ height: 32, width: 32 }}
              alt="Bitmoji drawing of Thomas"
            />
          </a>
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
        <HeaderLink active={router.pathname === '/about'} path="/about">
          About
        </HeaderLink>
        <HeaderLink active={router.pathname === '/contact'} path="/contact">
          Contact
        </HeaderLink>
      </Box>
    </Flex>
  )
}

export default Header
