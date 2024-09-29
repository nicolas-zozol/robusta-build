import { Post, RollContext } from '../../logic/posts'
import { CtaLink, TitleLink } from '../theme/TLink'
import { PaginationLinks } from '../shared/PaginationLinks'
import img from '../../styles/components/img.module.scss'
import blogRoll from '../../styles/posts/BlogRoll.module.scss'

import { getThumbnail } from '../../logic/thumbnail'

type RollProps = {
  pageContext: RollContext
}
export const BlogRoll = ({ pageContext }: RollProps) => {
  const { currentPage, roll, numberOfPages } = pageContext

  return (
    <div className={'blog-container'}>
      <div className={'wrap justify-between'}>
        {roll.map((post: Post) => (
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
            <div className={'mtb-20'}>
              <CtaLink to={`/blog/${post.category}/${post.slug}`}>
                Read More
              </CtaLink>
            </div>
          </div>
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
