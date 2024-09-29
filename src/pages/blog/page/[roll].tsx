import { FC } from 'react'

import { BasicLayout } from '../../layout/BasicLayout'
import { GetStaticPaths, GetStaticProps } from 'next'
import BlogRoll from '../../../components/blog/blog-roll'
import { getSortedPostsData, Post } from '../../../logic/posts'
import { configuration } from '../../../configuration'

interface Props {
  currentPage: number
  posts: Post[]
}

const size = configuration.rollSize
const BlogRollPage: FC<Props> = ({ currentPage, posts }) => {
  const start = size * (currentPage - 1)
  const end = start + size
  const rollContext = {
    currentPage,
    rollSize: size,
    numberOfPages: Math.ceil(posts.length / size),
    roll: posts.slice(start, end),
  }

  return (
    <BasicLayout>
      <BlogRoll pageContext={rollContext} />
    </BasicLayout>
  )
}
export default BlogRollPage

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getSortedPostsData()
  const numberOfPages = Math.ceil(allPosts.length / size)

  const paths = []
  for (let i = 1; i <= numberOfPages; i++) {
    paths.push({ params: { roll: '' + i } })
  }

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props> = async context => {
  const posts = await getSortedPostsData()

  const currentPage = parseInt(context.params!.roll as string, 10)
  return {
    props: {
      currentPage,
      posts,
    },
  }
}
