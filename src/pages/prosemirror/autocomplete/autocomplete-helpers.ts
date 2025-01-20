import { EditorState } from 'prosemirror-state'
import { findNodeByName } from '../helpers/state-helper'
import { NodeWithPos } from '../helpers/types'

export function detectWritingIntoTempPeople(state: EditorState): boolean {
  const json = state.doc.toJSON()
  let containsTempPeople = false
  if (json && json.content) {
    containsTempPeople = json.content.some(
      (node: any) => node.type === 'temporaryPeople'
    )
  }
  return containsTempPeople
}

export function findTempPeopleNode(state: EditorState): NodeWithPos | null {
  return findNodeByName(state, 'temporaryPeople')
}

// Helper to extract the match string (text without @ symbol)
export function extractMatchString(state: EditorState): string {
  const node = findTempPeopleNode(state)
  if (!node) {
    return ''
  }

  return node.node.textContent?.substring(1) || ''
}
