import { useEffect, useRef } from 'react'
import { createProseEditorAutocomplete } from './create-prose-editor-autocomplete'
import styled from 'styled-components'

export const ProseMirrorEditorAutocomplete = () => {
  const editorRef = useRef(null)

  useEffect(() => {
    const editorItem = document.querySelector('#editor-autocomplete')!
    const { view, state } = createProseEditorAutocomplete(editorItem)

    return () => {
      view.destroy()
    }
  }, [])

  return (
    <ProseAutocomplete
      id="editor-autocomplete"
      ref={editorRef}
      className={'ProseMirror editor'}
    ></ProseAutocomplete>
  )
}

const ProseAutocomplete = styled.div`
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
