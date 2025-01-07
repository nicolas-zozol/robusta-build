import { FC } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { EmptyLine } from '../catalog/EmptyLine'
import { tabletSize } from '../shared/sizes'
import { Th2 } from '../theme/TTitle'
import stack from './images/stack-transparent.png'
import github from './images/github-transparent.png'
import bcg from './images/bcg.png'
import renault from './images/renault.png'
import oracle from './images/oracle.png'
import toptal from './images/toptal.png'
import GitHubCalendar from 'react-github-calendar'

export const SocialProof: FC<{}> = ({}) => {
  return (
    <RootSocialProof>
      <EmptyLine size={2} />
      <Th2>Social Proofs</Th2>
      <section className={''}>
        <Social>
          <a href={'https://stackoverflow.com/users/968988/nicolas-zozol'}>
            <Image src={stack} alt={'stackoverflow'} placeholder={'blur'} />
          </a>
          <a href={'https://github.com/nicolas-zozol'}>
            <Image src={github} alt={'github'} placeholder={'blur'} />
          </a>
        </Social>
        <ShowGithub>
          <GitHubCalendar username="nicolas-zozol" colorScheme={'light'} />
        </ShowGithub>

        <EmptyLine size={2} />
        <Th2>They worked with me</Th2>

        <Enterprises>
          <a
            href={'https://www.toptal.com/resume/nicolas-zozol'}
            target={'_blank'}
          >
            <Image src={toptal} alt={'Toptal'} />
          </a>
          <Image src={bcg} alt={'bcg'} placeholder={'blur'} />
          <Image src={renault} alt={'renault'} placeholder={'blur'} />
          <Image src={oracle} alt={'oracle'} placeholder={'blur'} />
        </Enterprises>
      </section>
    </RootSocialProof>
  )
}

const RootSocialProof = styled.div``

const Social = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  img {
    max-width: 200px;
    width: 100%;
    height: auto; /* Ensures the aspect ratio is preserved */
    object-fit: contain; /* Keeps the entire image visible without cropping */
  }
`
const Enterprises = styled(Social)`
  display: flex;
  flex-wrap: wrap;
  gap: 100px;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${tabletSize}) {
    gap: 40px;
    flex-direction: column;
  }
`

const ShowGithub = styled.div`
  @media (max-width: ${tabletSize}) {
    display: none;
  }
`
