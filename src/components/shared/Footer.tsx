import {FC} from 'react'
import classes from '../../styles/Home.module.scss'
import nav from '../../styles/components/nav.module.scss'

import {ShyLink} from '../theme/TLink'
import Link from 'next/link'
import {Image} from 'react-bootstrap'
import {isAbout, isHome} from './is-home'
import {useRouter} from 'next/router'


export const Footer: FC<{}> = ({}) => {
  const router = useRouter()
  return (

    <footer className={'flex-layout-column m-20 mt-40'}>

      <nav className={nav.horizontalNav + ' ml-40'}>
        <ul style={{marginLeft:'-40px'}}>
          {!isHome(router) && <li><ShyLink to="/">Home</ShyLink></li>}
          {!isAbout(router) && <li><ShyLink to="/about">A propos</ShyLink></li>}
        </ul>
      </nav>

      <span className={'text-center mt-80'}>
            <Link href={'/'}>
                <Image src={'/images/logo-2-banner.png'} width={250} alt="logo Robusta Code"/>
            </Link>
      </span>




    </footer>
  )
}

