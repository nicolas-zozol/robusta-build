import { EditorState } from 'prosemirror-state'
import { EditorView } from 'prosemirror-view'
import { dispatchBasicTransaction, ProseEditor } from '../prose-editor'
import { autocompleteSchema } from './autocomplete-schema'
import { autocompleteCommands } from './autocomplete-commands'
import {
  transformStopToEnd,
  truncateAfterEndPlugin,
} from './autocomplete-plugin'
import { dispatchAutocompleteTransaction } from './dispatch-autocomplete-transaction'

export function createProseEditorAutocomplete(
  domElement: Element
): ProseEditor {
  let state = EditorState.create({
    schema: autocompleteSchema,
    plugins: [autocompleteCommands, transformStopToEnd, truncateAfterEndPlugin],
  })

  let view = new EditorView(domElement, {
    state,

    dispatchTransaction: transaction => {
      dispatchAutocompleteTransaction(view, transaction)
    },
  })
  return { view, state }
}
