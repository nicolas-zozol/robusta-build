import { useEffect, useRef } from 'react'
import { createProseEditorTelegram } from './create-prose-editor-telegram'

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
    <div
      id="editor-telegram"
      ref={editorRef}
      className={'ProseMirror editor'}
    ></div>
  )
}
