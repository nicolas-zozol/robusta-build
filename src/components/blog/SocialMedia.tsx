import * as React from "react"
import {Post} from '../../logic/posts'
import {Th3} from '../theme/TTitle'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons'
import {Story} from '../catalog/ComponentCatalog.model'
import {fakePost} from '../../fixtures/fakePost'
import article from '../../styles/components/article.module.scss'
import {getPostUrl} from '../../logic/url'


export interface Social{
  name: string
  icon: any
}
export interface Share{
  name: string
  icon: any
  link : string
}


type TSocialMediaProps = {
  post:Post,
  className?: string
}


export function SocialMedia({post, className}: TSocialMediaProps) {
    return(
    <div className={className}>
      <Th3 className={'text-center'}>Share this post</Th3>
      <div className={'justify-center'}>
        <a className={article.social} href={`${twitterShareLink}${getPostUrl(post)}`}>{twitterSharePic}</a>
        <a className={article.social} href={`${linkedinShareLink}${getPostUrl(post)}`}>{linkedinSharePic}</a>
      </div>
    </div>
  )
}


export const TSocialMediaStories: Story[] = [
  {
    documentation: "TSocialMedia",
    title: "TSocialMedia",
    content:(
      <SocialMedia post={fakePost}/>
    ) ,
  },
]

function TwitterShare (){
  return <span><FontAwesomeIcon icon={faTwitter}/></span>
}

function LinkedinShare (){
  return <span><FontAwesomeIcon icon={faLinkedin}/></span>
}

function FacebookShare (){
  return <span><FontAwesomeIcon icon={faFacebook}/></span>
}
export const shares:Share[] = [
  {
    name: 'twitter',
    icon: <TwitterShare/>,
    link: "https://twitter.com/share?url="
  },
  {
    name: 'linkedin',
    icon: <LinkedinShare/>,
    link: "https://www.linkedin.com/shareArticle?url="
  },
  {
    name: 'facebook',
    icon : <FacebookShare/>,
    link: "https://www.facebook.com/sharer/sharer.php?u="
  }
]



export const twitterSharePic = shares[0].icon
export const linkedinSharePic = shares[1].icon
export const facebookSharePic = shares[2].icon

export const twitterShareLink = shares[0].link
export const linkedinShareLink = shares[1].link
export const facebookShareLink = shares[2].link


