import * as React from 'react'
import { ShyLink } from '../../components/theme/TLink'
import BasicLayout from '../layout/BasicLayout'

import bcgHome from './images/bcg-home.png'
import diool from './images/diool.png'
import docdokuPlm from './images/docdoku-plm.png'
import eyeloDashboard from './images/eyelo-dashboard.png'
import nautoEventDetails from './images/nauto-event-details.png'
import nautoEventList from './images/nauto-event-list.png'
import samDetails from './images/sam-details.png'
import samHome from './images/sam-home.png'
import samNewAccessRequest from './images/sam-new-access-request.png'
import swaapHome from './images/swaap-home.png'
import swaapPortfolio from './images/swaap-portfolio.png'
import swaapVault from './images/swaap-vault.png'
import { PortfolioItem } from './PortfolioItem'

export default function PortfolioIndex() {
  return (
    <BasicLayout>
      <main className={'blog-container'}>
        <h1>Portfolio</h1>
        <PortfolioItem
          images={[swaapHome, swaapPortfolio, swaapVault]}
          title={'Swaap Finance (2021-2024)'}
        >
          <p>
            This web3 application for Swaap Finance allow users to deposit money
            into the blockchain via a secured smart contract. The smart contract
            will start market makin for the benefit of the user.
          </p>

          <p>
            <ShyLink out={'https://www.swaap.finance'}>
              Visit Swaap Finance site
            </ShyLink>
          </p>
        </PortfolioItem>

        <PortfolioItem
          images={[nautoEventDetails, nautoEventList]}
          title={'Nauto AI (2021-2022)'}
        >
          <p>
            Nauto AI is a californian scale-up introducing real time sensors in
            fleet cars – such as Fedex or UPS. The system detects driver errors
            and are aggregated into dashboards.
          </p>
          <p>
            <ShyLink out={'https://www.nauto.com'}>Visit Nauto AI site</ShyLink>
          </p>
        </PortfolioItem>

        <PortfolioItem images={[diool]} title={'Diool (2019-2020)'}>
          <p>
            Diool is a mobile application in Cameroon that allows users to pay
            their bills with phone.
          </p>
          <p>
            <ShyLink out={'https://www.diool.com'}>Visit Diool site</ShyLink>
          </p>
        </PortfolioItem>

        <PortfolioItem images={[bcgHome]} title={'BCG (2020)'}>
          <p>
            I had the luck to work with this huge American firm to deploy the
            new CMS. The work was technically not that hard (mainly basic Java
            servlets and CSS), but result pressure was intense.
          </p>
          <p>
            <ShyLink out={'https://www.bcg.com'}>
              Visit Boston Consulting Group site
            </ShyLink>
          </p>
        </PortfolioItem>

        <PortfolioItem
          images={[samHome, samDetails, samNewAccessRequest]}
          title={'SAM (2019-2020)'}
        >
          <p>
            SAM is a tool to simplify access to Renault’s internal tools. I
            proposed and implemented an economical and innovative
            CQRS/Event-Sourcing architecture
          </p>
        </PortfolioItem>
      </main>
    </BasicLayout>
  )
}
