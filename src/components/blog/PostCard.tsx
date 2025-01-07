import { TitleLink } from '../theme/TLink'
import img from '../../styles/components/img.module.scss'
import { getThumbnail } from '../../logic/thumbnail'
import { Post } from '../../logic/posts'
import { Card, Paraf, ReadMore } from './Card'

type PostCardProps = {
  post: Post
}

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <Card className={'card mb-80 w-350'} key={post.slug}>
      <TitleLink to={`/blog/${post.category}/${post.slug}`}>
        {post.title}
      </TitleLink>
      <div>
        <img
          src={getThumbnail(post)}
          className={`${img.floatThumbnail} ml-10`}
          alt={post.title}
        />
        <Paraf className={'no-justify'}>{post.excerpt}</Paraf>
      </div>
      <ReadMore
        to={`/blog/${post.category}/${post.slug}`}
        className={'stick-bottom'}
      >
        Read More
      </ReadMore>
    </Card>
  )
}
