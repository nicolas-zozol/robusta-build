import { EditorView } from 'prosemirror-view'
import { EditorState, Transaction } from 'prosemirror-state'
import { Node } from 'prosemirror-model'
import { getAutocompleteBox } from './autocomplete-ui'
import { findNodeByName } from '../helpers/state-helper'
import { NodeWithPos } from '../helpers/types'

/**
 * This function is responsible for handling the autocomplete box when the user types
 * regular text into the editor.
 * @param view
 * @param transaction
 */

export function dispatchAutocompleteTransaction(
  view: EditorView,
  transaction: Transaction
) {
  const {} = transaction
  const initialState = view.state
  let newState = view.state.apply(transaction)
  view.updateState(newState)

  const writingIntoTempPeople = detectWritingIntoTempPeople(initialState)

  const box = getAutocompleteBox()
  const tempNode = findTempPeopleNode(newState)

  if (writingIntoTempPeople && box && tempNode) {
    const matchString = extractMatchString(newState)

    box
      .update(matchString)
      .then(active => {
        if (active.found) {
          console.log('## active', active.found)
        } else {
          console.log('## not active, text replacing')
          // box exited, replace the temporary node by the matchString
          box.exit()
          const { pos, node } = tempNode
          newState = replaceNodeByText(newState, node, pos, matchString)
          view.updateState(newState)
        }
      })
      .catch(console.error)
  } else {
    //console.log('Not writing into tempPeople')
  }
}

function replaceNodeByText(
  state: EditorState,
  node: Node,
  pos: number,
  text: string
): EditorState {
  const { tr, schema } = state
  const nodeSize = node.nodeSize
  tr.replaceWith(pos, pos + nodeSize, schema.text(text))
  return state.apply(tr)
}

/**
 * Helper to detect if we are in "writing into tempPeople" mode
 */
function detectWritingIntoTempPeople(state: EditorState): boolean {
  const json = state.doc.toJSON()
  let containsTempPeople = false
  if (json && json.content) {
    containsTempPeople = json.content.some(
      (node: any) => node.type === 'temporaryPeople'
    )
  }
  return containsTempPeople
}

function findNodePosition(
  state: EditorState,
  nodeName: string
): number | undefined {
  const json = state.doc.toJSON()
  let position: number | undefined = undefined
  if (json && json.content) {
    json.content.forEach((node: any, index: number) => {
      if (node.type === nodeName) {
        position = index
        console.log(`Found node ${nodeName} at position`, position)
        return position
      }
    })
  }
  return position
}

// Helper to find the temporaryPeople node
function findTempPeopleNode(state: EditorState): NodeWithPos | null {
  return findNodeByName(state, 'temporaryPeople')
}

// Helper to extract the match string (text without @ symbol)
function extractMatchString(state: EditorState): string {
  const node = findTempPeopleNode(state)
  if (!node) {
    return ''
  }

  return node.node.textContent?.substring(1) || ''
}
