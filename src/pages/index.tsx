import { NextPage } from 'next'
import { EmptyLine } from '../components/catalog/EmptyLine'
import { LinkedInCta } from '../components/catalog/LinkedInCta'
import { WebResume } from '../components/resume/WebResume'
import { BasicLayout } from './layout/BasicLayout'
import { getSortedPostsData, Post } from '../logic/posts'
import { About } from '../components/home/About'
import { FeaturedPosts } from '../components/blog/Featured'
import { HomeSeo } from '../components/seo/HomeSeo'

interface HomeProps {
  allPostsData: any[]
}

function pickFeatured(posts: Post[]) {
  return posts.filter(p => p.featured).slice(0, 3)
}
const Home: NextPage<HomeProps> = ({ allPostsData }) => {
  return (
    <BasicLayout>
      <HomeSeo />
      {/*
      <div className={'blog-container'}>
        <TThreeColumns
          col1={homeColumn1}
          col2={homeColumn2}
          col3={homeColumn3}
        />
      </div>
      */}
      <div className={'grey-background mtb-20'}>
        <div className={'blog-container'}>
          <About />
          <EmptyLine />
          <WebResume />
          <EmptyLine />
          <div>
            <EmptyLine size={2} />
            <LinkedInCta center={false} />
            <EmptyLine size={2} />
          </div>
          <EmptyLine />
          <FeaturedPosts posts={pickFeatured(allPostsData)} />
        </div>
      </div>
    </BasicLayout>
  )
}

export default Home

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
