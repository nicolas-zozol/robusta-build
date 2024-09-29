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
    <Th2>A propos de {author.name}</Th2>
    <div>
      <P>
        Je suis le créateur de Robusta Code, basé à Toulouse, 🇫🇷. Je suis un
        hard-core coder et maker expérimenté, avec un background scientifique.
      </P>
      <P>
        Je suis <em>Oracle Master Java Certified</em> et
        <ShyLink out={'https://www.toptal.com/resume/nicolas-zozol'}>
          {' '}
          screené par Toptal
        </ShyLink>
        , une agency de freelance d&apos;élite. Je travaille avec de grandes
        compagnies telles que{' '}
        <ShyLink out={'https://www.renault.com'}> Renault </ShyLink>
        or{' '}
        <ShyLink out={'https://www.bcg.com/'}>Boston Consulting Group</ShyLink>,
        tout comme avec des start-ups, telles que{' '}
        <ShyLink out={'https://www.nauto.com/'}> Nauto </ShyLink> ou
        <ShyLink out={'https://www.diool.com/'}> Diool</ShyLink>.
        {/* CTA : Hire me on Toptal */}
      </P>
      <P>
        Je veux utiliser mon experience et mon organisation pour améliorer la
        qualité du code produit et fluidifier vos processus de livraison.
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
export default About
