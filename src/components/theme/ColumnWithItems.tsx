import * as React from "react"
import classes from '../../styles/theme/ThreeColumns.module.scss'
import {Story} from "../catalog/ComponentCatalog.model";

import {Col} from "react-bootstrap"
import {TitleLink} from "./promo";
import {Th2} from "./TTitle";
import {P} from "./TText";
import {ShyLink} from "./TLink";

type TThreeColumnsProps = {
  col1 : any,
  col2 : any,
  col3 : any,
}
type Item =string|TitleLink

interface ColumnProps {
  column:{
    title:string
    description:string
    items:Item[]
  };

}

export function ColumnWithItems({column:{title, description, items}}: ColumnProps) {
  return (
      <div className={classes.columnWithItems}>
        <Th2 noLine>{title}</Th2>
        <P className="description">{description}</P>
        <div>
          {items.map(MaybeLink)}

        </div>
      </div>
  )
}

function MaybeLink(item:any){
  if (typeof item === 'object') {
    return <div className={classes.item} key={item.title}>
      {item.out ? <ShyLink out={item.link}>{item.title}</ShyLink> : <ShyLink to={item.link}>{item.title}</ShyLink>}

    </div>
  }
  return <div className={classes.item} key={item}>{item}</div>;
}


export function TThreeColumns ({col1, col2, col3}:TThreeColumnsProps){
  return(
    <div>
      <div className={classes.columnsContainer}>
        <Col><ColumnWithItems column={col1}/></Col>
        <Col><ColumnWithItems column={col2}/></Col>
        <Col><ColumnWithItems column={col3}/></Col>
      </div>
    </div>
  )
}

export const homeColumn1 = {
  title: 'Training',
  description: 'With a decade of experience, Robusta Build offers training that’s always tailored, current, and continually refined.',
  items: [
    'Clean Code',
    'React',
    'Java',
    'Javascript'
  ]
}

export const homeColumn2 = {
  title: 'Code',
  description: 'Every day, we bring projects to life, committing code and delivering for our clients. Here, shipping is a way of life!',
  items: [
    {title:'Portfolio', link:'https://www.toptal.com/resume/nicolas-zozol', out:true},
    {title:'Masala Parser',link:'https://github.com/masala/masala-parser', out:true},
    {title:'Github', link:'https://github.com/nicolas-zozol/', out:true}
  ]
}

export const homeColumn3 = {
  title: 'Strategy',
  description: "While coding isn’t more complex today, the options can be overwhelming. Our goal is efficient business with minimal complexity and high scalability.",
  items: [
    'Blockchain',
    'Scalability',
    'CQRS'
  ]
}


export const TThreeColumnsStories: Story[] = [
  {
    documentation: "TThreeColumns",
    title: "TThreeColumns",
    content:(
      <TThreeColumns col1={homeColumn1} col2={homeColumn2} col3={homeColumn3}/>
    ) ,
  },
]
