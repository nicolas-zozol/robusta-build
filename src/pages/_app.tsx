import '../styles/modern-reset.scss'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import './pm.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
