import { NextPage } from 'next'
import { BasicLayout } from './layout/BasicLayout'

interface HomeProps {
  allPostsData: any[]
}

const About: NextPage<HomeProps> = ({}) => {
  return (
    <BasicLayout>
      <div className={'grey-background mtb-20'}>
        <div className={'blog-container'}>
          <p>Copyright 2013-2021 Robusta Code</p>
          <p>Hosted by Netlify</p>
          <p>
            Edited by Robusta Build, 1038 route de Moundas, 31600 Lamasquere,
            near the best city in the world named Toulouse, 🇫🇷
          </p>
          <p>
            <em>Building internet the right way</em> since 2002
          </p>
        </div>
      </div>
    </BasicLayout>
  )
}

export default About

export async function getStaticProps() {
  return {
    props: {},
  }
}
