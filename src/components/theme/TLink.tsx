import * as React from 'react'
import {Story} from '../catalog/ComponentCatalog.model'
import styles from '../../styles/theme/Link.module.scss'
import {Th2} from './TTitle'
import Link from 'next/link'
import {theme} from './theme'


/**
 * Most links are text black, hover purple
 * LinkGrey = links on header
 * CTA = Buttons
 * purple = uppercase, For title
 * tab = small, for tags
 * <TLink />        : black, purple hover
 * <TPrimaryLink/>    :uppercase, light grey, dark grey hover
 * <TShyLink>   :uppercase, purple, light purple hover
 * <TCta/>        : black, with purple border
 * <TTag>         : small, lowercase, purple, light purple hover
 */



type AnyLinkProps = {
  out?: string;
  to?: string;
  children: React.ReactNode,
  className?: string
}

export function AnyLink({out, to, children, className}: AnyLinkProps) {
  // We have a that is in fact external
  if (to && to.indexOf('http') === 0 && to.indexOf(theme.site) !== 0) {
    console.warn('External url : ', to)
    out = to
    to = undefined
  }
  if (to && to.length > 0) {
    return (<Link href={to}><a className={styles.link + ' ' + className}>{children}</a></Link>)
  } else {
    return <a className={styles.link + ' ' + className} href={out}>{children}</a>
  }
}


export const PrimaryLink = ({out, to, children, className}: AnyLinkProps) => (
  <AnyLink to={to} out={out} className={styles.primaryLink + ' ' + className}>{children}</AnyLink>
)


export const TitleLink = ({out, to, children, className}: AnyLinkProps) => (
  <Th2>
    <AnyLink to={to} out={out} className={styles.titleLink + ' ' + className}>{children}</AnyLink>
  </Th2>
)

export const ShyLink = ({out, to, children, className}: AnyLinkProps) => (

  <AnyLink to={to} out={out} className={styles.shyLink + ' ' + className}>{children}</AnyLink>

)

export const CtaLink = ({out, to, children, className}: AnyLinkProps) => {
    return <AnyLink to={to} out={out} className={styles.ctaLink + ' ' + className}>{children}</AnyLink>
  }


export const Tag = ({out, to, children, className}: AnyLinkProps) => (

  <AnyLink to={to} out={out} className={styles.tagLink + ' ' + className}>{children}</AnyLink>

)
export const TLinkStories: Story[] = [
  {
    documentation: 'Multiple kinds of links, some more appealing',
    title: 'TLink',
    content: (
      <>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}
        >
          <TitleLink to={'/tags/javascript'}>
            Roll Title
          </TitleLink>

          <AnyLink out={'https://www.robusta.io'}>Standard link</AnyLink>
          <ShyLink out={'https://www.robusta.io'}>
            Shy upperlink link
          </ShyLink>

          <PrimaryLink to={'/javascript'}>
            Nice purple title
          </PrimaryLink>
          <Tag to={'/javascript'}>Javascript tag</Tag>
          <CtaLink to={'/javascript'}>Read More CTA</CtaLink>
        </div>
      </>
    ),
  },
]

