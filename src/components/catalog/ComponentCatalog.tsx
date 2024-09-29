import { FC } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { Chapter } from './ComponentCatalog.model'
import { TLinkStories } from '../theme/TLink'
import { ErrorBoundary } from '../error-handling/ErrorBoundary'
import { HashRouter, Link, Route, Routes, useParams } from 'react-router-dom'
import { TabContainer } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { TTitleStories } from '../theme/TTitle'
import { TextStories } from '../theme/TText'
import { HomeHeaderStories } from '../header/FullHeader'
import { TThreeColumnsStories } from '../theme/ColumnWithItems'
import { BasicLayout } from '../../pages/layout/BasicLayout'
import { TSocialMediaStories } from '../blog/SocialMedia'

/**
 * When adding a story, you just have to declare an element in the following array.
 * Chapters are an array of React components
 */

const chapters: Chapter[] = [
  /*{title: 'HomeHeader', content: HomeHeaderStories},
  {title: 'ErrorDisplayer', content: ExceptionDisplayerStories}
  */
]

const themeElements: Chapter[] = [
  { title: 'T Link', content: TLinkStories },
  { title: 'T Title', content: TTitleStories },
  { title: 'T Text', content: TextStories },
  { title: 'Robusta Header', content: HomeHeaderStories },
  { title: 'T Three Columns', content: TThreeColumnsStories },
  { title: 'T Social Media', content: TSocialMediaStories },

  /*{title: 'T List', content: TListStories},
  {title: 'T Keywords', content: TKeywordStories},
  {title: 'T Definition List Terms', content: TDefinitionListTermStories},
  {title: 'T Definition List', content: TDefinitionListStories},
  {title: 'T Post Promo', content: TPostPromoStories},
  {title: 'T Icon Text', content: TIconTextStories},
  {title: 'T Author Promo', content: TAuthorPromoStories},
  {title : 'T About', content: TAboutStories},
  {title : 'T About', content: TAboutStories},
  {title : 'T Separation', content: TSeparationStories},
  {title : 'T Copyright', content: TCopyrightStories},
  {title: 'T Footer Content', content:TFooterContentStories},
  {title: 'T Cards', content:TCardStories},
*/
]

function toKebabCase(str: string) {
  return str.replace(/\s/gi, '-').toLowerCase()
}

/*
const TabContainer = styled.div`
  padding-top: 2rem;
`

const STabContent = styled.div`
  margin: 5px;
  padding: 5px;
  border: solid blue medium;
`
*/
//type ComponentCatalogProps={chapters:Chapter[]}
export const ComponentCatalog: FC<{}> = () => {
  return (
    <BasicLayout>
      <ErrorBoundary>
        <HashRouter basename={'/'}>
          <Row>
            <Col sm={2}>
              <h5>Stories Catalog</h5>
              {chapters.map(story => (
                <div key={toKebabCase(story.title)}>
                  <Link to={'/' + story.title}>{story.title}</Link>
                </div>
              ))}
              <h5>Theme Catalog</h5>
              {themeElements.map(story => (
                <div key={toKebabCase(story.title)}>
                  <Link to={'/' + story.title}>{story.title}</Link>
                </div>
              ))}
            </Col>
            <Col>
              <hr />
              <Routes>
                <Route path="/:componentName" element={<ChapterComponent />} />
              </Routes>
            </Col>
          </Row>
        </HashRouter>
      </ErrorBoundary>
    </BasicLayout>
  )
}

//const RouterPage = (props: { pageComponent: JSX.Element }) => props.pageComponent;
function ChapterComponent() {
  const { componentName } = useParams() as any
  const chapter = chapters
    .concat(themeElements)
    .find(c => c.title === componentName)
  return (
    <>
      {chapter && (
        <Tabs id={`tabs-${toKebabCase(chapter.title)}`}>
          {chapter.content.map(story => (
            <Tab title={story.title} key={story.title} eventKey={story.title}>
              {story.documentation && (
                <TabContainer>
                  <h4>
                    <FontAwesomeIcon icon={faCoffee} />
                    Documentation
                  </h4>
                  <p>{story.documentation}</p>
                  <hr />
                </TabContainer>
              )}
              <div>{story.content}</div>
            </Tab>
          ))}
        </Tabs>
      )}
    </>
  )
}
