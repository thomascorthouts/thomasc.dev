/** @jsxImportSource theme-ui */
import { Text } from 'theme-ui'
import Link from 'next/link'

type Props = {
  path: string
  children: React.ReactNode
  active?: boolean
}

const HeaderLink: React.FC<Props> = ({ path, children, active = false }) => {
  const hoverStyle = {
    color: 'blue',
    backgroundColor: 'white',
    borderRadius: '4px',
    cursor: 'pointer',
  }
  const linkStyle = active
    ? hoverStyle
    : { color: 'greyLighter', '&:hover, &:focus, &:active': hoverStyle }
  return (
    <Link href={path}>
      <a sx={{ textDecoration: 'none' }}>
        <Text sx={{ ...linkStyle, px: [3, null, 2], fontSize: 4 }}>
          {children}
        </Text>
      </a>
    </Link>
  )
}

export default HeaderLink
