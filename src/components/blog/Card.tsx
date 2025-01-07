import styled from 'styled-components'
import { CtaLink } from '../theme/TLink'

export const Paraf = styled.p`
  margin-bottom: 60px;
`
export const ReadMore = styled(CtaLink)``

export const Card = styled.div`
  position: relative;

  h2 {
    line-height: 1;
  }

  ${Paraf} {
    margin-bottom: 60px;
  }

  ${ReadMore} {
    position: absolute;
    bottom: 20px;
  }
`
