import { FC } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { Th2 } from '../theme/TTitle'
import stack from './images/stack-transparent.png'
import github from './images/github-transparent.png'
import bcg from './images/bcg.png'
import renault from './images/renault.png'
import oracle from './images/oracle.png'
import toptal from './images/toptal.png'

export const SocialProof: FC<{}> = ({}) => {
  return (
    <RootSocialProof>
      <section className={''}>
        <Social>
          <a href={'https://stackoverflow.com/users/968988/nicolas-zozol'}>
            <Image src={stack} alt={'stackoverflow'} placeholder={'blur'} />
          </a>

          <a href={'https://github.com/nicolas-zozol'}>
            <Image src={github} alt={'github'} placeholder={'blur'} />
          </a>
        </Social>
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
const Enterprises = styled(Social)``
