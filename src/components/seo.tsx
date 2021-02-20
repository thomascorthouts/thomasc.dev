import Head from 'next/head'

type Props = {
  description?: string
  title: string
}

const SEO: React.FC<Props> = ({ description = '', title }) => {
  const siteTitle = 'Thomas Corthouts'
  return (
    <Head>
      <title>{`${title} | ${siteTitle}`}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={'thomas_dev'} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
    </Head>
  )
}

export default SEO
