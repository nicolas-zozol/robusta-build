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
  title: 'Formation',
  description: 'Robusta Code donne des formations depuis 10 ans. Toujours personnalisées, mises a jour et améliorées.',
  items: [
    'Clean Code',
    'React',
    'Java',
    'Javascript'
  ]
}

export const homeColumn2 = {
  title: 'Code',
  description: 'Nous sommes des makers. Nous délivrons tous les jours pour nos clients, et comittons du code pour notre propre MRR. ' +
    'Ici, on ship !',
  items: [
    {title:'Portfolio', link:'https://www.toptal.com/resume/nicolas-zozol', out:true},
    {title:'Masala Parser',link:'https://github.com/masala/masala-parser', out:true},
    {title:'Github', link:'https://github.com/nicolas-zozol/', out:true}
  ]
}

export const homeColumn3 = {
  title: 'Stratégie',
  description: "Coder aujourd'hui n'est pas plus compliqué, mais les options sont surchargées. Nous visons le " +
    "business done, avec une complexité minimale et une scalabilité maximale.",
  items: [
    'Blockchain',
    'Scalabilité',
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
