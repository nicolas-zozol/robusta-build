import { EditorState } from 'prosemirror-state'
import { EditorView } from 'prosemirror-view'
import { dispatchBasicTransaction, ProseEditor } from '../prose-editor'
import { telegramSchema } from './telegram-schema'
import { telegramCommands } from './telegram-commands'
import { transformStopToEnd, truncateAfterEndPlugin } from './telegram-plugin'
import { dispatchTelegramTransaction } from './dispatch-telegram-transaction'

export function createProseEditorTelegram(domElement: Element): ProseEditor {
  let state = EditorState.create({
    schema: telegramSchema,
    plugins: [telegramCommands, transformStopToEnd, truncateAfterEndPlugin],
  })

  let view = new EditorView(domElement, {
    state,

    dispatchTransaction: transaction => {
      dispatchTelegramTransaction(view, transaction)
    },
  })
  return { view, state }
}
