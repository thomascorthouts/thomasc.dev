/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Image = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "thomas.jpeg" }) {
        childImageSharp {
          fixed(width: 320) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Img
      fixed={data.image.childImageSharp.fixed}
      alt="Picture of Thomas"
      sx={{ borderRadius: 0 }}
    />
  )
}

export default Image
