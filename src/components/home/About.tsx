import { FC } from 'react'
import { ShyLink } from '../theme/TLink'
import { Image } from 'react-bootstrap'
import { Th2 } from '../theme/TTitle'
import { P } from '../theme/TText'
import { TimeDiffered } from '../shared/TimeDiffered'
import { nicolas } from '../../logic/author'

const author = nicolas

// TODO : Not the right place at all, should not be in page
export const About: FC<{}> = ({}) => (
  <section className={'wrap mt-40 p-20'}>
    <Th2>About {author.name}</Th2>
    <div>
      <P>
          I am the creator of Robusta Build, based in Toulouse, 🇫🇷.
          I'm a skilled coder and hands-on maker with 20 years of experience and a scientific background.
      </P>
      <P>
        I am <em>Oracle Master Java Certified</em> and
        <ShyLink out={'https://www.toptal.com/resume/nicolas-zozol'}>
          {' '}
          screened by Toptal
        </ShyLink>
          , the elite freelance agency. I worked with Big Companies like{' '}
        <ShyLink out={'https://www.renault.com'}> Renault </ShyLink>
        or{' '}
        <ShyLink out={'https://www.bcg.com/'}>Boston Consulting Group</ShyLink>,
        as well as many startups such as {' '}
        <ShyLink out={'https://www.nauto.com/'}> Nauto </ShyLink>,
        <ShyLink out={'https://www.diool.com/'}> Diool</ShyLink>, <ShyLink out={'https://www.swaap.finance/'}> Swaap Finance</ShyLink>.
        {/* CTA : Hire me on Toptal */}
      </P>
      <P>
          Leveraging my expertise, I am committed to improving code quality and enhancing delivery efficiency.
      </P>
      {/* CTA : Contact-me on linkedIn*/}
    </div>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Image width={300} alt="avatar" src={author.imageUrl} />
      <a href={'https://stackoverflow.com/users/968988/nicolas-zozol'}>
        <img
          style={{
            marginBottom: '10px',
            width: 'min-content',
          }}
          src={author.stackOverflow}
          alt="stack-overflow"
        />
      </a>
      <TimeDiffered>
        <div>
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
  </section>
)
