import * as React from 'react'
import {Story} from "../catalog/ComponentCatalog.model";
import classes from '../../styles/theme/Title.module.scss'
import {WithClass} from "./theme";


/**
 *
 * Th1, Th2, Th3, Th4  : Hierarchy in the the document
 * <Th1 struct/>, <Th2 struct/>, <Txh3 struct/> : Structuring a presentational page

 *
 * There are also TextList and TextDefinitions separated
 * <TTextList list={l:List} struct? />, <TTextDefinition definitions={} struct? />
 */


interface ITh2 extends WithClass{
    noLine?:boolean;
}

const getClass = (className: string | undefined) => className ? classes.title + ' ' + className : classes.title;

export const Th1: React.FC<WithClass> = ({style, className, children}) => {
    return <h1 style={style} className={getClass(className)}>{children}</h1>
}
export const Th2: React.FC<ITh2> = ({noLine, style, className, children}) => {
    if(noLine){
        return <h2 style={style} className={getClass(className)+' '+classes.noLine}>{children}</h2>
    }
    return <h2 style={style} className={getClass(className)}>{children}</h2>
}
export const Th3: React.FC<WithClass> = ({style, className, children}) => {
    return <h3 style={style} className={className}>{children}</h3>
}
export const Th4: React.FC<WithClass> = ({style, className, children}) => {
    return <h4 style={style} className={className}>{children}</h4>
}

export const TTitleStories: Story[] = [
    {
        documentation: "TTitle",
        title: "TTitle",
        content: (
            <>
                <div>
                    <Th1>Standard title h1</Th1>
                    <Th2 style={{marginTop: "0"}}>Some title h2</Th2>
                    <Th2 noLine>No line Th2</Th2>
                    <Th3>This is h3</Th3>
                    <Th4>h4 is smaller but nice</Th4>
                </div>
            </>
        ),
    },
]
