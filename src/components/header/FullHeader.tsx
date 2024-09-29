import {FC} from 'react'
import classes from '../../styles/components/header/full-header.module.scss'
import nav from '../../styles/components/nav.module.scss'

import {ShyLink} from '../theme/TLink'
import Link from 'next/link'
import {Story} from '../catalog/ComponentCatalog.model'
// TODO: not the right image
import {Image} from 'react-bootstrap'
import {isHome} from '../shared/is-home'
import {useRouter} from 'next/router'


export const FullHeader:FC<{}> = ({}) => {
  const router = useRouter();

  return (
    <header className={classes.fullHeader}>
      <nav className={nav.horizontalNav}>
        <ul>
          {!isHome(router) && <li><ShyLink to="/">Home</ShyLink></li>}
          <li><ShyLink>CLEAN CODE</ShyLink></li>
          <li><ShyLink>JAVASCRIPT</ShyLink></li>
          <li><ShyLink>BLOCKCHAIN</ShyLink></li>
          <li><ShyLink>SOLIDITY</ShyLink></li>
          <li><ShyLink to="/blog">BLOG</ShyLink></li>
        </ul>
      </nav>

      <div className={classes.mainLogo}>
          <span>
            <Link href={'/'}>
                <Image src={'/images/logo-2-banner.png'} width={250} alt="logo Robusta Code"/>
            </Link>
            </span>
      </div>
    </header>
  )
}


export const HomeHeaderStories: Story[] = [
  {
    documentation: 'Full Header is used for home page, or pages with small content',
    title: 'Full Header',
    content: (
      <>
        <FullHeader/>
        <div>something else</div>
      </>
    )
  }
]
