import { CtaLink, TitleLink } from '../theme/TLink'
import img from '../../styles/components/img.module.scss'
import { getThumbnail } from '../../logic/thumbnail'
import { Post } from '../../logic/posts'
import { Th2 } from '../theme/TTitle'

type FeaturedPostProps = {
  posts: Post[]
}

export const FeaturedPosts = ({ posts }: FeaturedPostProps) => {
  return (
    <>
      <Th2>recent articles</Th2>

      <div className={'wrap justify-between'}>
        {posts.map((post: Post) => (
          <div className={'card mb-80 w-350'} key={post.slug}>
            <TitleLink to={`/blog/${post.category}/${post.slug}`}>
              {post.title}
            </TitleLink>
            <div>
              <img
                src={getThumbnail(post)}
                className={`${img.floatThumbnail} m-10`}
                alt={post.title}
              />
              <p>{post.excerpt}</p>
            </div>
            <CtaLink to={`/blog/${post.category}/${post.slug}`}>
              Read More
            </CtaLink>
          </div>
        ))}
      </div>
    </>
  )
}
