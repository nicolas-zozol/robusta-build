import { FC } from 'react'
import classes from '../../styles/components/header/full-header.module.scss'
import nav from '../../styles/components/nav.module.scss'
import { tabletSize } from '../shared/sizes'

import { ShyLink } from '../theme/TLink'
import Link from 'next/link'
import { Story } from '../catalog/ComponentCatalog.model'
// TODO: not the right image
import { isHome } from '../shared/is-home'
import { useRouter } from 'next/router'
import styled from 'styled-components'

export const FullHeader: FC<{}> = ({}) => {
  const router = useRouter()

  return (
    <header className={classes.fullHeader}>
      <Nav className={nav.horizontalNav + ' blog-container'}>
        {!isHome(router) && (
          <span className={'mr-40'}>
            <ShyLink to="/">Home</ShyLink>
          </span>
        )}

        <Start>
          <span>
            <ShyLink>CLEAN CODE</ShyLink>
          </span>
          <span>
            <ShyLink>WEB</ShyLink>
          </span>
          <span>
            <ShyLink>BLOCKCHAIN</ShyLink>
          </span>
          <span>
            <ShyLink>SOLIDITY</ShyLink>
          </span>

          <span>
            <ShyLink>ETHERS.js</ShyLink>
          </span>
        </Start>
        <End>
          <span>
            <ShyLink to="/blog">BLOG</ShyLink>
          </span>
        </End>
      </Nav>

      <div className={classes.mainLogo}>
        <Link href={'/'} legacyBehavior={true}>
          <Logo>
            <div>Robusta Build</div>
            <div className={'emojis'}>💪🏗</div>
          </Logo>
        </Link>
      </div>
    </header>
  )
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`
const Start = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: ${tabletSize}) {
    display: none;
  }
`

const End = styled.div`
  display: flex;
  gap: 20px;
`

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
