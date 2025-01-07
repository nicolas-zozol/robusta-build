import * as React from 'react'
import { ShyLink } from '../../components/theme/TLink'
import BasicLayout from '../layout/BasicLayout'

import bcgHome from '../../components/portfolio/images/bcg-home.png'
import diool from '../../components/portfolio/images/diool.png'
import docdokuPlm from '../../components/portfolio/images/docdoku-plm.png'
import eyeloDashboard from '../../components/portfolio/images/eyelo-dashboard.png'
import nautoEventDetails from '../../components/portfolio/images/nauto-event-details.png'
import nautoEventList from '../../components/portfolio/images/nauto-event-list.png'
import samDetails from '../../components/portfolio/images/sam-details.png'
import samHome from '../../components/portfolio/images/sam-home.png'
import samNewAccessRequest from '../../components/portfolio/images/sam-new-access-request.png'
import swaapHome from '../../components/portfolio/images/swaap-home.png'
import swaapPortfolio from '../../components/portfolio/images/swaap-portfolio.png'
import swaapVault from '../../components/portfolio/images/swaap-vault.png'
import { PortfolioItem } from '../../components/portfolio/PortfolioItem'

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
            will produce market making for the benefit of the user.
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

        <PortfolioItem images={[eyeloDashboard]} title={'Eyelo (2015)'}>
          <p>
            Eye.lo is a tracker for telecoms. The application allow admin users
            to create customized dashboards for functional users – such as
            sellers or CEO. It’s a huge Javascript app for this epoch, made with
            plain old Angular JS.
          </p>
        </PortfolioItem>

        <PortfolioItem images={[docdokuPlm]} title={'DocDoku (2013)'}>
          <p>
            Docdoku PLM is a PLM software running on Ipad, transforming Catia
            data into Three.js structures. Very innovative, we were able to
            build this working mvp in a few month with only 5 people.
          </p>
        </PortfolioItem>
      </main>
    </BasicLayout>
  )
}
