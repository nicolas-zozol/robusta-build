import { FC } from 'react'
import styled from 'styled-components'
import nav from '../../styles/components/nav.module.scss'

import { ShyLink } from '../theme/TLink'
import Link from 'next/link'
import { Image } from 'react-bootstrap'
import { isAbout, isHome } from './is-home'
import { useRouter } from 'next/router'

export const Footer: FC<{}> = ({}) => {
  const router = useRouter()
  return (
    <footer className={'flex-layout-column m-20 mt-40'}>
      <nav className={nav.horizontalNav + ' ml-40'}>
        <ul style={{ marginLeft: '-40px' }}>
          {!isHome(router) && (
            <li>
              <ShyLink to="/">Home</ShyLink>
            </li>
          )}
          {!isAbout(router) && (
            <li>
              <ShyLink to="/about">About</ShyLink>
            </li>
          )}
        </ul>
      </nav>

      <span className={'text-center mt-80'}>
        <Link href={'/'} legacyBehavior={true}>
          <HorizontalLogo>
            <div>Robusta Build</div>
            <div className={'emojis'}>💪🏗</div>
          </HorizontalLogo>
        </Link>
      </span>
    </footer>
  )
}

const HorizontalLogo = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  font-size: 1.2em;
  .emojis {
    margin-left: 10px;
    font-size: 1.5em;
  }
  margin-bottom: 40px;
`
