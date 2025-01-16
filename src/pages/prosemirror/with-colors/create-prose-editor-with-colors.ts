import { baseKeymap } from 'prosemirror-commands'
import { undo, redo, history } from 'prosemirror-history'
import { keymap } from 'prosemirror-keymap'
import { Schema } from 'prosemirror-model'
import { EditorState } from 'prosemirror-state'
import { EditorView } from 'prosemirror-view'
import { dispatchBasicTransaction, ProseEditor } from '../prose-editor'
import { schemaWithColors } from './schema-with-colors'
import { schema } from 'prosemirror-schema-basic'

export function createProseEditorWithColors(domElement: Element): ProseEditor {
  const schemaWithColors = createSchema()
  let state = EditorState.create({
    schema: schema,
    plugins: [
      //history(),
      //keymap({ 'Mod-z': undo, 'Mod-y': redo }),
      keymap(baseKeymap),
    ],
  })

  let view = new EditorView(domElement, {
    state,

    dispatchTransaction: transaction => {
      dispatchBasicTransaction(view, transaction)
    },
  })
  return { view, state }
}

function createSchema(): Schema {
  const base = schemaWithColors
  return schemaWithColors
  /*
  return new Schema({
    nodes: addListNodes(schemaWithColors.spec.nodes, 'paragraph block*', 'block'),
    marks: schemaWithColors.spec.marks,
  })*/
}
