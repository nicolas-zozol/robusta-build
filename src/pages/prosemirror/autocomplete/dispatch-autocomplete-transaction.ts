import { EditorView } from 'prosemirror-view'
import { EditorState, Transaction } from 'prosemirror-state'
import { Node } from 'prosemirror-model'

export function dispatchAutocompleteTransaction(
  view: EditorView,
  transaction: Transaction
) {
  console.log('===  dispatchAutocompleteTransaction')
  const {} = transaction
  const initialState = view.state
  let newState = view.state.apply(transaction)
  view.updateState(newState)

  setTimeout(() => {
    console.log('===  looking at dispatchAutocompleteTransaction')
    const jsonDoc = view.state.doc.toJSON()
    console.log(jsonDoc)
  }, 0)

  const writingIntoTempPeople = detectWritingIntoTempPeople(newState)

  if (writingIntoTempPeople) {
    const tempNode = findTempPeopleNode(newState)
    if (tempNode) {
      console.log({
        tempNode,
        matchString: extractMatchString(newState),
        textContent: tempNode.textContent,
        tempNodeSize: tempNode.nodeSize,
      })
    }
  } else {
    console.log('Not writing into tempPeople')
  }
}

// Helper to detect if we are in "writing into tempPeople" mode
function detectWritingIntoTempPeople(state: EditorState): boolean {
  const { doc, selection } = state
  const { $from } = selection
  const nodeAtCursor = doc.nodeAt($from.pos)
  console.log({ nodeAtCursor, pos: $from.pos })
  return nodeAtCursor?.type.name === 'temporaryPeople'
}

// Helper to find the temporaryPeople node
function findTempPeopleNode(state: EditorState): Node | null {
  const { doc, selection } = state
  const { $from } = selection
  return doc.nodeAt($from.pos)
}

// Helper to extract the match string (text without @ symbol)
function extractMatchString(state: EditorState): string {
  const { doc, selection } = state
  const { $from } = selection
  const nodeAtCursor = doc.nodeAt($from.pos)
  return nodeAtCursor?.textContent?.substring(1) || ''
}
