import { FC } from 'react'
import styled from 'styled-components'
import { EmptyLine } from '../catalog/EmptyLine'
import { LinkedInCta } from '../catalog/LinkedInCta'
import { ShyLink } from '../theme/TLink'
import { Image } from 'react-bootstrap'
import { Th2 } from '../theme/TTitle'
import { P } from '../theme/TText'
import { TimeDiffered } from '../shared/TimeDiffered'
import { nicolas } from '../../logic/author'
import { SocialProof } from './SocialProof'

const author = nicolas

// TODO : Not the right place at all, should not be in page
export const About: FC<{}> = ({}) => (
  <section className={'wrap mt-40 pt-40'}>
    <Th2>Web3 & Java Fullstack freelance</Th2>
    <div>
      <P>
        I am <strong>Nicolas Zozol</strong>, the creator of Robusta Build, based
        in Toulouse, 🇫🇷. Do you need a A team contributor ?
      </P>

      <List className={'mt-20'}>
        <li>20+ years of experience, I started to code before Web tools </li>
        <li>Really fullstack, from pixel perfect CSS to docker-compose</li>
        <li>Scientific background, connecting dots of innovations</li>
      </List>
      <br />
      <P>
        I am an <em>Oracle Master Java Certified</em> and
        <ShyLink out={'https://www.toptal.com/resume/nicolas-zozol'}>
          {' '}
          screened by Toptal
        </ShyLink>
        , the elite freelance agency. I worked with Big Companies like{' '}
        <ShyLink out={'https://www.renault.com'}> Renault </ShyLink>
        or{' '}
        <ShyLink out={'https://www.bcg.com/'}>Boston Consulting Group</ShyLink>,
        as well as many startups such as{' '}
        <ShyLink out={'https://www.nauto.com/'}>Nauto</ShyLink>,{' '}
        <ShyLink out={'https://www.diool.com/'}>Diool</ShyLink>,{' '}
        <ShyLink out={'https://www.swaap.finance/'}> Swaap Finance</ShyLink>.
        {/* CTA : Hire me on Toptal */}
      </P>
      <P>My goal is to turn your ideas into robust products !</P>

      <div>
        <EmptyLine size={4} />
        <LinkedInCta />
      </div>

      {/* Social proofs: linkedin, Github, Stack Overflow */}
      {/* CTA : Contact-me on linkedIn, mail, etc...*/}
      {/* Put the CV right below with no mail/phone */}
    </div>

    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Image width={300} alt="avatar" src={author.imageUrl} />

      <TimeDiffered>
        <div>
          <EmptyLine />
          <img
            style={{
              marginRight: '10px',
              width: '20px',
              height: '12px',
              alignSelf: 'center',
            }}
            src="/images/email.png"
            alt={'mail'}
          />
          <a
            style={{
              alignSelf: 'center',
            }}
            href={`mailto:${nicolas.email}`}
          >
            {nicolas.email}
          </a>
        </div>
        {/*
        <div style={{display: "flex", justifyContent: "center"}}>
            <TContactPhone
            icon={"images/smartphone.png"} text={nicolas.phone}/>
          </div>
        */}
      </TimeDiffered>
    </div>

    <div>
      <SocialProof />
    </div>
  </section>
)

const List = styled.ul``
