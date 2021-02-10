/** @jsxImportSource theme-ui */
import { jsx, Flex, Box, Text } from 'theme-ui'

import Layout from '../../../components/layout'
import SEO from '../../../components/seo'


import client from '../../../client'

const PostPage = ({job}) => (
  <Layout>
    <SEO title="Home" />
    <Flex
      sx={{
        flexDirection: ['column-reverse', null, null, null, null, 'row'],
      }}
    >
      <Box
        sx={{
          mb: [3, null, null, null, null, 0],
          ml: [null, null, null, null, null, 4],
          maxWidth: 13,
        }}
      >
        <Text as="h1">{job.title}</Text>
        <Text as="span">at {job.company}</Text>
        <Text as="p" variant="regular" sx={{mt: 24}}>
          {job.description}
        </Text>
      </Box>
    </Flex>
  </Layout>
)

export const getServerSideProps = async (context) => {
  // It's important to default the slug so that it doesn't return "undefined"
  const { job = "" } = context.query
  const jobData =  await client.fetch(`
    *[_type == "job" && slug.current == $job]{
      "company": company->name,
      ...
    }[0]
  `, { job })

  return {props: {job: jobData}}
}

export default PostPage
