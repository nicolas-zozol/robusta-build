import { FC } from 'react'

import { BasicLayout } from '../layout/BasicLayout'
import { getSortedPostsData, Post } from '../../logic/posts'
import BlogRoll from '../../components/blog/blog-roll'
import { configuration } from '../../configuration'

interface Props {
  posts: Post[]
}

const size = configuration.rollSize
const FirstPageBlogRoll: FC<Props> = ({ posts }) => {
  const rollContext = {
    currentPage: 1,
    rollSize: size,
    numberOfPages: Math.ceil(posts.length / size),
    roll: posts.slice(0, size),
  }

  return (
    <BasicLayout>
      <BlogRoll pageContext={rollContext} />
    </BasicLayout>
  )
}
export default FirstPageBlogRoll

export async function getStaticProps() {
  const posts = await getSortedPostsData()
  return {
    props: {
      posts,
    },
  }
}
