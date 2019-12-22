/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Link } from 'gatsby'
import { Flex, Box } from '@theme-ui/components'

import Layout from 'components/layout'
import Image from 'components/image'
import SEO from 'components/seo'

import ImageThomas from 'images/thomas.jpeg'

const AboutPage = () => (
  <Layout title="About Thomas">
    <SEO title="About Thomas" />
    <Flex
      sx={{
        flexDirection: ['column-reverse', null, null, null, null, 'row'],
      }}
    >
      <img
        src={ImageThomas}
        alt="Frontal image of Thomas' face"
        sx={{
          maxWidth: 9,
          mx: [null, null, null, null, null, 5],
          borderRadius: t => t.radii[0],
        }}
      />
      <Box>
        <article sx={{ maxWidth: 13, fontSize: [2, null, 3] }}>
          <p>
            As a Software Engineer with a history in Network&Systems
            Administration, I feel comfortable in every aspect of the stack. My
            background makes me specifically passionate about the integration of
            applications or microservices in a greater set-up as well as the
            technical aspects of an application. Performance is one of the most
            significant examples of how we, as Software Engineers, can shape the
            future of the web and make it accessible for all. It's a joint
            effort of all parts of the stack.
          </p>
          <p>
            As a Software Engineer, I have experience in multiple technologies,
            going from Object-Oriented languages e.g. C# and Java, web
            technologies e.g. React, GatsbyJS & Ruby on Rails as well as mobile
            development technologies like React Native. As a DevOps, I have
            enjoyed working with CI flows, optimizing build times,
            infrastructure tools like Docker and Kubernetes, and so much more.
          </p>
          <p>Always open for a conversation about technology or anything!</p>
        </article>
      </Box>
    </Flex>
  </Layout>
)

export default AboutPage
