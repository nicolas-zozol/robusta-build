import { useEffect, useRef } from 'react'
import { createProseEditorAutocomplete } from './create-prose-editor-autocomplete'
import styled from 'styled-components'

export const ProseMirrorEditorAutocomplete = () => {
  const parentRef = useRef(null)
  const editorRef = useRef(null)

  useEffect(() => {
    const editorItem = document.querySelector('#editor-autocomplete')!
    const { view, state } = createProseEditorAutocomplete(editorItem)

    return () => {
      view.destroy()
    }
  }, [])

  return (
    <RootProse ref={parentRef}>
      <ProseAutocomplete
        id="editor-autocomplete"
        ref={editorRef}
        className={'ProseMirror editor'}
      ></ProseAutocomplete>
    </RootProse>
  )
}

const RootProse = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  padding: 10px;

  &.autocomplete-root {
    position: relative;
    border: 3px solid red;
  }

  .autocomplete-box {
    border: 1px solid #ccc;
    background: white;
    border-radius: 4px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    width: 200px;
    max-height: 150px;
    overflow-y: auto;
  }

  .autocomplete-item {
    padding: 8px;
    cursor: pointer;
  }

  .autocomplete-item.active {
    background-color: #007bff;
    color: white;
  }
`

// Will handle most CSS styling of marks and nodes
const ProseAutocomplete = styled.div``
