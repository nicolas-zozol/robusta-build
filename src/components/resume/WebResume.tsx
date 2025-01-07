import { FC } from 'react'
import styled from 'styled-components'
import { desktopSize } from '../shared/sizes'
import { TimeDiffered } from '../shared/TimeDiffered'
import { Th2 } from '../theme/TTitle'
import { Download } from 'react-feather'

export const WebResume: FC<{}> = ({}) => {
  return (
    <RootResume>
      <WebSection className={'mt-40 pt-40 show-cv-web'}>
        <Th2>Curriculum Vitae</Th2>
        <TimeDiffered time={300}>
          <iframe
            src={'/nicolas/resume-web-crypto.html'}
            width={'100%'}
            height={'2100px'}
          ></iframe>
        </TimeDiffered>
      </WebSection>
      <PdfSection className={'mt-40 pt-40 show-cv-pdf'}>
        <CvLink
          target={'_blank'}
          href={'/nicolas/nicolas-zozol-web3-resume.pdf'}
        >
          <Download />
          Download Nicolas's CV
        </CvLink>

        <CvLink target={'_blank'} href={'/nicolas/nicolas-zozol-portfolio.pdf'}>
          <Download />
          Download Nicolas's Portfolio
        </CvLink>
      </PdfSection>
    </RootResume>
  )
}

const WebSection = styled.section`
  @media (max-width: ${desktopSize}) {
    display: none;
  }
`
const PdfSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
`

const RootResume = styled.div``

const CvLink = styled.a`
  display: flex;
  color: blue;

  font-size: 1.2rem;
  &:hover {
    text-decoration: underline;
    opacity: 0.5;
  }
  svg {
    margin-right: 5px;
  }
`
