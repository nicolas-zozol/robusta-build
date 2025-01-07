import { Post, RollContext } from '../../logic/posts'
import { CtaLink, TitleLink } from '../theme/TLink'
import { PaginationLinks } from '../shared/PaginationLinks'
import img from '../../styles/components/img.module.scss'
import blogRoll from '../../styles/posts/BlogRoll.module.scss'

import { getThumbnail } from '../../logic/thumbnail'
import { Card, Paraf } from './Card'
import { PostCard } from './PostCard'

type RollProps = {
  pageContext: RollContext
}
export const BlogRoll = ({ pageContext }: RollProps) => {
  const { currentPage, roll, numberOfPages } = pageContext

  return (
    <div className={'blog-container'}>
      <div className={'wrap justify-between'}>
        {roll.map((post: Post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
      {numberOfPages > 1 && (
        <PaginationLinks
          currentPage={currentPage}
          numberOfPages={numberOfPages}
        />
      )}
    </div>
  )
}

export default BlogRoll
