import { EditorState } from 'prosemirror-state'
import { EditorView } from 'prosemirror-view'
import { dispatchBasicTransaction, ProseEditor } from '../prose-editor'
import { telegramSchema } from './telegram-schema'
import { telegramCommands } from './telegram-commands'

export function createProseEditorTelegram(domElement: Element): ProseEditor {
  let state = EditorState.create({
    schema: telegramSchema,
    plugins: [telegramCommands],
  })

  let view = new EditorView(domElement, {
    state,

    dispatchTransaction: transaction => {
      dispatchBasicTransaction(view, transaction)
    },
  })
  return { view, state }
}
