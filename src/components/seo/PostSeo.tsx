import { Post } from '../../logic/posts'
import Head from 'next/head'
import { configuration } from '../../configuration'
import { getPostUrl, path } from '../../logic/url'

interface PostSeoProps {
  post: Post
}

export const PostSeo: React.FC<PostSeoProps> = ({ post }) => {
  console.log({ site: configuration.site })
  const { site, siteName } = configuration

  return (
    <Head>
      {/* Main stream HTML */}
      <title>{post.title}</title>
      <meta name="keywords" content={post.keywords.join(', ')} />
      <meta name="title" content={post.title} />
      <meta name="description" content={post.excerpt} />
      {/* noindex && <meta name="robots" content="noindex"/>*/}

      {/* Twitter Open Graph Like */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@NicolasZozol" />
      <meta name="twitter:creator" content="@NicolasZozol" />
      <meta name="twitter:title" content={'Robusta.build: ' + post.title} />
      <meta name="twitter:description" content={post.excerpt} />
      <meta
        name="twitter:image"
        content={path([site, 'thumbnails', post.image])}
      />
      <meta name="twitter:image:alt" content={post.title} />

      {/* Pure Open Graph */}
      <meta property="og:title" content={post.title} />
      <meta
        property="og:image"
        content={path([site, 'thumbnails', post.image])}
      />
      <meta
        name="description"
        property="og:description"
        content={post.excerpt}
      />
      <meta property="og:type" content="website" />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={getPostUrl(post)} />

      {/* standard */}
      <meta name="locale" property="og:locale" content={post.lang} />
      <meta name="site_name" property="og:site_name" content={siteName} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getJsonLd(post)) }}
      />
    </Head>
  )
}

function getJsonLd(post: Post) {
  const jsonLd: any = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://google.com/article',
    },
    headline: post.title,
    image: [configuration.site + post.image],
    datePublished: new Date(post.date).toISOString(),
    author: {
      '@type': 'Person',
      name: post.author,
      url: 'https://www.robusta.build',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Robusta Build',
      url: 'https://www.robusta.build/',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.robusta.build/public/images/logo.png',
      },
    },
  }
  if (post.modified) {
    jsonLd.dateModified = new Date(post.modified).toISOString()
  }
  return jsonLd
}
