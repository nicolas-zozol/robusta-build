import { useEffect, useRef } from 'react'
import { createProseEditorTelegram } from './create-prose-editor-telegram'
import styled from 'styled-components'

export const ProseMirrorEditorTelegram = () => {
  const editorRef = useRef(null)

  useEffect(() => {
    const editorItem = document.querySelector('#editor-telegram')!
    const { view, state } = createProseEditorTelegram(editorItem)

    return () => {
      view.destroy()
    }
  }, [])

  return (
    <ProseTelegram
      id="editor-telegram"
      ref={editorRef}
      className={'ProseMirror editor'}
    ></ProseTelegram>
  )
}

const ProseTelegram = styled.div`
  .end,
  .stop {
    margin: 0 3px;
    padding: 2px 5px;
    border-radius: 3px;
    color: white;
  }

  .stop {
    background-color: rgba(110, 150, 208, 0.71);
  }

  .end {
    background-color: rgba(229, 60, 161, 0.41);
  }
`
