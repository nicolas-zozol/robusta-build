import { useEffect, useRef } from 'react'
import { EditorState } from 'prosemirror-state'
import { EditorView } from 'prosemirror-view'
import { Schema, DOMParser } from 'prosemirror-model'
import { schema } from 'prosemirror-schema-basic'
import { addListNodes } from 'prosemirror-schema-list'
import { exampleSetup } from 'prosemirror-example-setup'
import 'prosemirror-view/style/prosemirror.css'

const ProseMirrorEditor = () => {
  const editorRef = useRef(null)

  useEffect(() => {
    const view = new EditorView(editorRef.current, {
      state: EditorState.create({
        doc: DOMParser.fromSchema(schema).parse(
          document.querySelector('#content')!
        ),
        plugins: exampleSetup({ schema }),
      }),
    })

    return () => {
      view.destroy()
    }
  }, [])

  return <div id="editor" ref={editorRef} className={'ProseMirror'}></div>
}

export default ProseMirrorEditor
