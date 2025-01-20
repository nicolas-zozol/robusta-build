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
    <RootAutocomplete ref={parentRef} className={'root_autocomplete'}>
      <ProseAutocomplete
        id="editor-autocomplete"
        ref={editorRef}
        className={'ProseMirror editor'}
      ></ProseAutocomplete>
    </RootAutocomplete>
  )
}

const RootAutocomplete = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  padding: 10px;

  .autocomplete-root {
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

  .suggestion-item {
    padding: 8px;
    cursor: pointer;
  }

  .suggestion-item.active {
    background-color: #007bff;
    color: white;
  }

  span.temporary {
    border-radius: 3px;
    padding: 3px;
    color: grey;
    font-style: italic;
  }

  span.mention,
  span.hashtag {
    padding: 3px;
    color: white;
    border-radius: 5px;
    margin: 0 2px;
  }
  span.mention {
    background-color: rgba(111, 168, 221, 0.78);
  }
  span.hashtag {
    background-color: rgba(166, 221, 111, 0.78);
  }
`

// Will handle most CSS styling of marks and nodes
const ProseAutocomplete = styled.div``
