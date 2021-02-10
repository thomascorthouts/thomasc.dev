/** @jsxImportSource theme-ui */
import { jsx, Text } from 'theme-ui'
import Link from 'next/link'
import PropTypes from 'prop-types'

const HeaderLink = ({ path, children, active }) => {
  const hoverStyle = { color: 'blue', backgroundColor: 'white', borderRadius: '4px', cursor: 'pointer' }
  const linkStyle = active ? hoverStyle : {color: 'greyLighter', '&:hover, &:focus, &:active': hoverStyle}
  return (
  <Link
    href={path}
  >
    <a sx={{ textDecoration: 'none' }}><Text sx={{...linkStyle,  px: [3, null, 2], fontSize: 4,}} active={active}>{children}</Text></a>
  </Link>
)}

HeaderLink.defaultProps = {
  active: false
}

HeaderLink.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  active: PropTypes.bool,
}

export default HeaderLink
