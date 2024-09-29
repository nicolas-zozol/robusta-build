import { FC } from 'react'

import { BasicLayout } from '../layout/BasicLayout'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getSortedPostsData, Post } from '../../logic/posts'
import { getPostsByTag, getValuableTags, Tag } from '../../logic/tags'
import { TagRoll } from '../../components/blog/tag-roll'

interface Props {
  tag: Tag
  posts: Post[]
}

const TagRollPage: FC<Props> = ({ tag, posts }) => {
  return (
    <BasicLayout>
      <TagRoll tag={tag} posts={posts} />
    </BasicLayout>
  )
}
export default TagRollPage

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getSortedPostsData()
  const tags = getValuableTags(allPosts)

  const paths = []
  for (let tag of tags) {
    paths.push({ params: { tag } })
  }

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props> = async context => {
  const allPosts = await getSortedPostsData()

  const tag = context.params!.tag as string
  return {
    props: {
      tag,
      posts: getPostsByTag(tag, allPosts),
    },
  }
}
