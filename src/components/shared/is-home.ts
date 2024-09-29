import {NextRouter} from 'next/router'

export const isHome = (router: NextRouter) => router.pathname === '/'
  || router.pathname === ''
  || router.pathname === '/#'

export const isAbout = (router: NextRouter) => router.pathname === '/about'
  || router.pathname === 'about'