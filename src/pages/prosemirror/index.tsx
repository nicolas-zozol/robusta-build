import styled from 'styled-components'
import BasicLayout from '../layout/BasicLayout'
import { ClientOnly } from './ClientOnly'
import {
  ProseMirrorEditorWithColors,
  SimpleProseMirrorEditor,
} from './ProseMirrorEditor'
import { EmptyLine } from '../../components/catalog/EmptyLine'
import { ProseMirrorEditorMinimal } from './minimal/ProseMirrorEditorMinimal'
import { ProseMirrorEditorTelegram } from './telegram/ProseMirrorEditorTelegram'

export default function Prose() {
  return (
    <BasicLayout>
      <div>
        <div id="content">
          <ClientOnly>
            <RootProse className={'blog-container'}>
              <h1>ProseMirror Editor Minimal</h1>
              <ProseMirrorEditorMinimal />
            </RootProse>

            <EmptyLine size={3} />

            <RootProse className={'blog-container'}>
              <h1>ProseMirror Editor Telegram</h1>
              <ProseMirrorEditorTelegram />
            </RootProse>

            <EmptyLine size={3} />

            <RootProse className={'blog-container'}>
              <h1>We Will reproduce ProseMirror Editor</h1>
              <SimpleProseMirrorEditor />
            </RootProse>

            <EmptyLine size={3} />

            <RootProse className={'blog-container'}>
              <h1>ProseMirror Editor with colors</h1>
              <ProseMirrorEditorWithColors />
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
