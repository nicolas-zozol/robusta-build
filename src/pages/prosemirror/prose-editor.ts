import { EditorState, Transaction } from 'prosemirror-state'
import { EditorView } from 'prosemirror-view'

export interface ProseEditor {
  view: EditorView
  state: EditorState
}

export function dispatchBasicTransaction(
  view: EditorView,
  transaction: Transaction
) {
  console.log('Transaction update', transaction)
  let newState = view.state.apply(transaction)
  view.updateState(newState)
}
