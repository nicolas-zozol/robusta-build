import { useEffect, useRef } from 'react'
import 'prosemirror-view/style/prosemirror.css'
import { createProseEditorWithColors } from './with-colors/create-prose-editor-with-colors'
import { createSimpleProseEditor } from './create-simple-prose-editor'
import { createProseEditorMinimal } from './minimal/create-prose-editor-minimal'

export const SimpleProseMirrorEditor = () => {
  const editorRef = useRef(null)

  useEffect(() => {
    const editorItem = document.querySelector('#editor')!
    const { view, state } = createSimpleProseEditor(editorItem)

    return () => {
      view.destroy()
    }
  }, [])

  return <div id="editor" ref={editorRef} className={'ProseMirror'}></div>
}

export const ProseMirrorEditorWithColors = () => {
  const editorRef = useRef(null)

  useEffect(() => {
    const editorItem = document.querySelector('#editor2')!
    const { view, state } = createProseEditorWithColors(editorItem)

    return () => {
      view.destroy()
    }
  }, [])

  return (
    <div id="editor2" ref={editorRef} className={'ProseMirror editor'}></div>
  )
}
