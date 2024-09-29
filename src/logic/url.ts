import {Post} from './posts'
import {configuration} from '../configuration'

export type Slug = string;
export type Url = string; // without the domain !

/* Old urls with a bit of SEO traffic */
const oldUrlMap = new Map<Slug, Url>()

oldUrlMap.set('completing-a-rxjs-observable-with-another', 'javascript/completing-a-rxjs-observable-with-another')
oldUrlMap.set('easy-automation-with-sonoff-and-javascript', 'web/easy-automation-with-sonoff-and-javascript')
oldUrlMap.set('quel-langage-pour-progresser-dans-sa-carriere', 'theory/quel-langage-pour-progresser-dans-sa-carriere')
oldUrlMap.set('applying-correctly-classname-with-styled-components', '/javascript/applying-correctly-classname-with-styled-components')
oldUrlMap.set('leaving-gmail', '/privacy/leaving-gmail')


export function path(paths: string[]) {
  return paths
    .map(p => p.charAt(0) === '/' ? p.slice(1) : p)
    .map(p => p.charAt(p.length - 1) === '/' ? p.slice(0, p.length - 1) : p)
    .join('/')
}

export function getPostUrl(post: Post): string {
  if (oldUrlMap.has(post.slug)) {
    return path([configuration.site, 'blog', post.category, oldUrlMap.get(post.slug)!])
  } else {
    return path([configuration.site, 'blog', post.category, post.slug])
  }
}