import { EditorView } from 'prosemirror-view'
import { EditorState, Transaction } from 'prosemirror-state'
import { Node } from 'prosemirror-model'
import { getAutocompleteBox } from './autocomplete-ui'
import { findNodeByName } from '../helpers/state-helper'
import { NodeWithPos } from '../helpers/types'

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
    const node = tempNode.node
    const content = node.textContent || ''
    const matchString = extractMatchString(newState)
    console.log('## matchstring ?', {
      content,
      matchString,
      tempNodeSize: node.nodeSize,
    })
    box.update(matchString).catch(console.error)
  } else {
    //console.log('Not writing into tempPeople')
  }
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
