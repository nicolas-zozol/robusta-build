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

// Will handle most CSS styling of marks and nodes
const ProseAutocomplete = styled.div``
