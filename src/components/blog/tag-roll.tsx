import { Post } from '../../logic/posts'
import { CtaLink, TitleLink } from '../theme/TLink'
import img from '../../styles/components/img.module.scss'
import blogRoll from '../../styles/posts/BlogRoll.module.scss'

import { getThumbnail } from '../../logic/thumbnail'
import { Tag } from '../../logic/tags'

interface TagRollProps {
  tag: Tag
  posts: Post[]
}
export const TagRoll = ({ posts }: TagRollProps) => {
  return (
    <div className={'blog-container wrap'}>
      <div className={'wrap justify-around'}>
        {posts.map((post: Post) => (
          <div className={'card mb-80 w-500'} key={post.slug}>
            <TitleLink to={`/blog/${post.category}/${post.slug}`}>
              {post.title}
            </TitleLink>
            <div className={blogRoll.excerpt}>
              <p>{post.excerpt}</p>
              <img
                src={getThumbnail(post)}
                className={img.thumbnail}
                alt={post.title}
              />
            </div>
            <CtaLink to={`/blog/${post.category}/${post.slug}`}>
              Read More
            </CtaLink>
          </div>
        ))}
      </div>
    </div>
  )
}
