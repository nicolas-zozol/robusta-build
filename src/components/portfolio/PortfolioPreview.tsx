import * as React from 'react'
import styled from 'styled-components'
import { EmptyLine } from '../catalog/EmptyLine'
import { AnyLink, ShyLink } from '../theme/TLink'
import { PortfolioItem } from './PortfolioItem'

import docdokuPlm from '../../components/portfolio/images/docdoku-plm.png'
import nautoEventDetails from '../../components/portfolio/images/nauto-event-details.png'
import swaapVault from '../../components/portfolio/images/swaap-vault.png'

interface PortfolioPreviewProps {}

export const PortfolioPreview: React.FC<PortfolioPreviewProps> = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      <PortfolioItem images={[swaapVault, nautoEventDetails, docdokuPlm]} />
      <EmptyLine />
      <SeeFullPortfolio to={'/portfolio'}>See full portfolio</SeeFullPortfolio>
    </section>
  )
}

const SeeFullPortfolio = styled(ShyLink)``
