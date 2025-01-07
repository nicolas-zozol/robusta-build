import Head from 'next/head'
import { configuration } from '../../configuration'
import GtmScript from './GtmScript.jsx'

interface HomeSeoProps {}

export const HomeSeo: React.FC<HomeSeoProps> = () => {
  const { site, siteName, mission, logo, siteTitle } = configuration

  return (
    <Head>
      <GtmScript />
      {/* Main stream HTML */}
      <title>{siteTitle}</title>
      <meta
        name="keywords"
        content={
          'robusta build, freelance, clean code, solidity, ethers.js, web, blockchain'
        }
      />
      <meta name="title" content={siteName} />
      <meta name="description" content={`${siteName} : ${mission}`} />
      {/* noindex && <meta name="robots" content="noindex"/>*/}

      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <link
        rel="icon"
        href="/favicon-32x32.png"
        sizes="32x32"
        type="image/x-icon"
      />

      {/* Twitter Open Graph Like */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@NicolasZozol" />
      <meta name="twitter:creator" content="@NicolasZozol" />
      <meta name="twitter:title" content={siteName} />
      <meta name="twitter:description" content={mission} />
      <meta name="twitter:image" content={logo} />
      <meta name="twitter:image:alt" content={logo} />

      {/* Pure Open Graph */}
      <meta property="og:title" content={siteName} />
      <meta property="og:image" content={logo} />
      <meta name="description" property="og:description" content={mission} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={site} />

      {/* standard */}
      <meta name="locale" property="og:locale" content={'en'} />
      <meta name="site_name" property="og:site_name" content={siteName} />

      {/* temporary */}
      <meta name="msvalidate.01" content="B715C05D75DFCA0AF4A6F25FEFF0572D" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getJsonLd()) }}
      />
    </Head>
  )
}

function getJsonLd() {
  const jsonLd: any = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Robusta Build',
    url: 'https://www.robusta.build/',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.robusta.build/public/images/logo.png',
    },
  }
  return jsonLd
}
