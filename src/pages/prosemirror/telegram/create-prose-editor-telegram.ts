import { EditorState } from 'prosemirror-state'
import { EditorView } from 'prosemirror-view'
import { dispatchBasicTransaction, ProseEditor } from '../prose-editor'
import { telegramSchema } from './telegram-schema'
import { telegramCommands } from './telegram-commands'
import { transformStopToEnd } from './telegram-plugin'

export function createProseEditorTelegram(domElement: Element): ProseEditor {
  let state = EditorState.create({
    schema: telegramSchema,
    plugins: [telegramCommands, transformStopToEnd],
  })

  let view = new EditorView(domElement, {
    state,

    dispatchTransaction: transaction => {
      dispatchBasicTransaction(view, transaction)
    },
  })
  return { view, state }
}
