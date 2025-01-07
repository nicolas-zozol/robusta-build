import { FC } from 'react'
import styled from 'styled-components'
import { desktopSize, tabletSize } from '../shared/sizes'
import { Th2 } from '../theme/TTitle'

export const Skills: FC<{}> = () => {
  return (
    <RootSkills>
      <Th2>Skills</Th2>

      <SkillCategories>
        <Skill>
          <Category>Blockchain</Category>
          <List>
            <li>web3.js</li>
            <li>ethers.js</li>
            <li>Solidity</li>
            <li>TheGraph</li>
          </List>
        </Skill>
        <Skill>
          <Category>Backend</Category>
          <List>
            <li>API design</li>
            <li>Java</li>
            <li>Spring</li>
            <li>Node JS</li>
            <li>SQL</li>
            <li>PHP/Symfony</li>
            <li>MongoDB</li>
          </List>
        </Skill>

        <Skill>
          <Category>Frontend</Category>
          <List>
            <li>Typescript</li>
            <li>React JS</li>
            <li>Angular</li>
            <li>CSS/SASS</li>
            <li>Styled Component</li>
            <li>Responsive Design</li>
          </List>
        </Skill>

        <Skill>
          <Category>Web marketing</Category>
          <List>
            <li>SEO 101 and more</li>
            <li>AIDA model</li>
            <li>Google analytics</li>
            <li>Segment</li>
            <li>MixPanel</li>
            <li>Personal library</li>
          </List>
        </Skill>
      </SkillCategories>
    </RootSkills>
  )
}

const RootSkills = styled.div``

const Category = styled.div`
  font-size: 1.2rem;
  line-height: 2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
`

const List = styled.ul`
  font-size: 1rem;
  padding-left: 10px;
  li {
    list-style: none;
    padding: 0;
  }
`

const SkillCategories = styled.div`
  display: flex;
  margin-left: 20px;
  @media (min-width: ${tabletSize}) {
    flex-direction: row;
  }
  flex-direction: column;
`

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  @media (min-width: ${tabletSize}) {
    width: 33%;
  }
`
