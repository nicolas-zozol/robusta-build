import { CtaLink, TitleLink } from '../theme/TLink'
import img from '../../styles/components/img.module.scss'
import { getThumbnail } from '../../logic/thumbnail'
import { Post } from '../../logic/posts'
import { Th2 } from '../theme/TTitle'
import { PostCard } from './PostCard'

type FeaturedPostProps = {
  posts: Post[]
}

export const FeaturedPosts = ({ posts }: FeaturedPostProps) => {
  return (
    <>
      <Th2>recent articles</Th2>

      <div className={'wrap justify-between'}>
        {posts.map((post: Post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </>
  )
}
