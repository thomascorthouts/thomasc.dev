/** @jsxImportSource theme-ui */
import { Flex, Box, Text } from 'theme-ui'

import Layout from 'components/layout'
import SEO from 'components/seo'

import { GetServerSideProps, NextPage } from 'next'
import getJobForSlug, { Job } from 'sources/getJobForSlug'

type Props = {
  job: Job
}

const PostPage: NextPage<Props> = ({ job }) => (
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
        <Text as="p" variant="regular" sx={{ mt: 24 }}>
          {job.description}
        </Text>
      </Box>
    </Flex>
  </Layout>
)

export const getServerSideProps: GetServerSideProps = async context => {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug } = context.query
  if (typeof slug === 'undefined' || Array.isArray(slug))
    return { notFound: true }
  const job = await getJobForSlug(slug)

  return { props: { job } }
}

export default PostPage
