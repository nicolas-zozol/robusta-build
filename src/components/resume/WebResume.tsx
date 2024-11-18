import { FC } from 'react'
import styled from 'styled-components'
import { TimeDiffered } from '../shared/TimeDiffered'
import { Th2 } from '../theme/TTitle'

export const WebResume: FC<{}> = ({}) => {
  return (
    <RootResume>
      <section className={'mt-40 pt-40'}>
        <Th2>Curriculum Vitae</Th2>
        <TimeDiffered time={300}>
          <iframe
            src={'/nicolas/resume-web-crypto.html'}
            width={'100%'}
            height={'2100px'}
          ></iframe>
        </TimeDiffered>
      </section>
    </RootResume>
  )
}

const RootResume = styled.div``
