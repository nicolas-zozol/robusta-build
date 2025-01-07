import { ReactNode } from 'react'
import { FullHeader } from '../../components/header/FullHeader'
import Head from 'next/head'
import { Footer } from '../../components/shared/Footer'

interface Props {
  title?: string
  children: ReactNode
}

export const BasicLayout = ({ title, children }: Props) => {
  if (!title) {
    title = 'Robusta Build - Clean Code, Javascript, Blockchain'
  }
  return (
    <div>
      <Head>
        {/*Optional: Preconnect to Google's font domain for faster font loading */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin=""
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>{title}</title>
      </Head>
      <FullHeader />
      <main className={'mtb-20'}>{children}</main>
      <Footer />
    </div>
  )
}
export default BasicLayout
