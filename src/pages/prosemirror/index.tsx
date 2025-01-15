import styled from 'styled-components'
import BasicLayout from '../layout/BasicLayout'
import ClientOnly from './ClientOnly'
import ProseMirrorEditor from './ProseMirrorEditor'

export default function Prose() {
  return (
    <BasicLayout>
      <div>
        <div id="content">
          <ClientOnly>
            <RootProse className={'blog-container'}>
              <h1>We Will reproduce ProseMirror Editor</h1>
              <ProseMirrorEditor />
            </RootProse>
          </ClientOnly>
        </div>
      </div>
    </BasicLayout>
  )
}

const RootProse = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  padding: 10px;
`
