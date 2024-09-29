import { FC } from 'react'

import { BasicLayout } from '../../layout/BasicLayout'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getSortedPostsData, Post } from '../../../logic/posts'
import Article from '../../../components/blog/Article'
import { getValuableTags, Tag } from '../../../logic/tags'

interface Props {
  host: string
  post: Post
  valuableTags: Tag[]
}

const PostView: FC<Props> = ({ post, valuableTags }) => {
  //  const router = useRouter()
  // const {category, slug} = router.query
  return (
    <BasicLayout>
      <Article post={post} valuableTags={valuableTags} />
    </BasicLayout>
  )
}
export default PostView

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getSortedPostsData()
  const paths = posts.map(post => ({
    params: {
      category: post.category,
      slug: post.slug,
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props> = async context => {
  const posts = await getSortedPostsData()
  const tags = getValuableTags(posts)
  const post = posts.find(p => p.slug === context.params!.slug)!
  const valuableTags = post.tags.filter(t => tags.includes(t))
  return {
    props: {
      host: 'the props',
      post,
      valuableTags,
    },
  }
}
/*

interface Context extends NextPageContext {
  // any modifications to the default context, e.g. query types
}


 */
