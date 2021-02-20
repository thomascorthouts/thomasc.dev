/** @jsxImportSource theme-ui */
import { Flex, Box, Text } from 'theme-ui'

import Layout from 'components/layout'
import SEO from 'components/seo'

import client from 'client'

import Link from 'next/link'
import { GetServerSideProps, NextPage } from 'next'

type Props = {
  company: any
}

const CompanyPage: NextPage<Props> = ({ company }) => (
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
        <Text as="h1">{company.name}</Text>
        <Text as="span">{company.description}</Text>
        <ul>
          <Text as="span">Roles:</Text>
          {company.roles.map((role: any) => (
            <li>
              <Link
                href={`/resume/${company.slug.current}/${role.slug.current}`}
              >
                <a sx={{ textDecoration: 'none' }}>
                  <Text sx={{ px: [3, null, 2], fontSize: 4 }}>
                    {role.title}
                  </Text>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </Box>
    </Flex>
  </Layout>
)

export const getServerSideProps: GetServerSideProps = async context => {
  // It's important to default the slug so that it doesn't return "undefined"
  const { company = '' } = context.query
  const companyData = await client.fetch(
    `
    *[_type == "company" && slug.current == $company][0]{
      ...,
      "roles": *[ _type == "job" && company._ref == ^._id ]
    }
  `,
    { company }
  )

  return { props: { company: companyData } }
}

export default CompanyPage
