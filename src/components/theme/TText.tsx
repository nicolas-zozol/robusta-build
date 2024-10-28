import * as React from 'react'
import classes from '../../styles/theme/Text.module.scss'

import {addClass, WithClass} from "./theme";
import {ShyLink} from "./TLink";
import {Story} from "../catalog/ComponentCatalog.model";


export const P: React.FC<WithClass> = ({style, className, children}) => {
    return <p style={style} className={addClass(classes.p, className)}>{children}</p>
}


// https://dev.to/fidelve/the-definitive-guide-for-using-prismjs-in-gatsby-4708
// https://using-remark.gatsbyjs.org/code-and-syntax-highlighting/
// ```javascript{1-2,22}{numberLines: true} for highlight


interface ICodeProps extends WithClass {
    language?: string
}

export const CodeBlock: React.FC<WithClass> = ({style, className, children}) => {
    return <pre style={style} className={addClass(classes.p, className)}>
      <code>{children}</code>
  </pre>
}


export const TextStories: Story[] = [
    {
        documentation: 'TText',
        title: 'TText',
        content: (
            <>
                <div style={{width: '600px'}}>
                    <P>I am the founder of Robusta Build. I have a Physics and chemistry background as I was
                        Science Teacher for kids in France and Boston, USA.</P>
                    <hr/>
                    <P>I am a <strong>Oracle Master Java Certified</strong> and
                        was <ShyLink to={"https://www.toptal.com/resume/nicolas-zozol"}>screened by Toptal</ShyLink>, an
                        Elite agency. I worked with <ShyLink to={'https://www.teqtrack.fr/'}>TeqTrack</ShyLink>, and big companies such as Renault or Boston Consulting Group, as well as fresh
                        start-ups, like <ShyLink to={'https://www.teqtrack.fr/'}>TeqTrack</ShyLink>  or <ShyLink to={"https://api.diool.com/"}>Diool</ShyLink>. </P>
                    <hr/>

                </div>
            </>
        )
    }
]
