import { FC } from 'react'
import classes from '../../styles/components/header/full-header.module.scss'
import nav from '../../styles/components/nav.module.scss'

import { ShyLink } from '../theme/TLink'
import Link from 'next/link'
import { Story } from '../catalog/ComponentCatalog.model'
// TODO: not the right image
import { Image } from 'react-bootstrap'
import { isHome } from '../shared/is-home'
import { useRouter } from 'next/router'
import styled from 'styled-components'

export const FullHeader: FC<{}> = ({}) => {
  const router = useRouter()

  return (
    <header className={classes.fullHeader}>
      <nav className={nav.horizontalNav}>
        <ul>
          {!isHome(router) && (
            <li>
              <ShyLink to="/">Home</ShyLink>
            </li>
          )}
          <li>
            <ShyLink>CLEAN CODE</ShyLink>
          </li>
          <li>
            <ShyLink>JAVASCRIPT</ShyLink>
          </li>
          <li>
            <ShyLink>BLOCKCHAIN</ShyLink>
          </li>
          <li>
            <ShyLink>SOLIDITY</ShyLink>
          </li>
          <li>
            <ShyLink to="/blog">BLOG</ShyLink>
          </li>
        </ul>
      </nav>

      <div className={classes.mainLogo}>
        <Link href={'/'}>
          <Logo>
            <div>Robusta Build</div>
            <div className={'emojis'}>💪🏗</div>
          </Logo>
        </Link>
      </div>
    </header>
  )
}

const Logo = styled.span`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Roboto Slab', serif;
  font-size: 36px;
  .emojis {
    font-size: 46px;
  }
`

export const HomeHeaderStories: Story[] = [
  {
    documentation:
      'Full Header is used for home page, or pages with small content',
    title: 'Full Header',
    content: (
      <>
        <FullHeader />
        <div>something else</div>
      </>
    ),
  },
]
