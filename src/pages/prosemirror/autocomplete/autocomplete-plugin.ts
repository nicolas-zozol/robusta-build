import {
  Command,
  EditorState,
  TextSelection,
  Transaction,
} from 'prosemirror-state'
import { keymap } from 'prosemirror-keymap'
import { getFakeUsers } from './fake-data'
import { EditorView } from 'prosemirror-view'
import { AutocompleteBox, isBoxOpened, MODE } from './autocomplete-ui'

/**
 * This file handle the special keys and commands for the autocomplete feature.
 * It is responsible for handling the `@`, '#', '<>', 'Up & Down', 'Escape', and the Enter key.
 *
 * However, other keys also interact with the autocomplete box, by updating the content of the box
 * or even exiting it when no content is available.
 * This is done in the dispatchAutocompleteTransaction function.
 *
 * @param state
 * @param dispatch
 */

const doEnter: Command = (state: EditorState, dispatch) => {
  console.log('enter pressed')
  return true
}

// Keymap handler for the `@` character
const handleAtKey: Command = (
  state: EditorState,
  dispatch?: (tr: Transaction) => void,
  view?: EditorView
) => {
  if (!view) return false
  const { schema, tr } = state

  // Get the caret position
  const { $from } = state.selection
  const caretPosition = $from.pos

  if (isBoxOpened() && dispatch) {
    return insertAndUpdateText(view, '@')
  }

  // Create a temporary node with an empty string as content
  const temporaryNode = schema.nodes.temporaryPeople.create(
    {},
    schema.text('@')
  )
  if (dispatch) {
    tr.insert(caretPosition, temporaryNode)
    const endPosition = caretPosition + 2
    tr.setSelection(TextSelection.create(tr.doc, endPosition))

    console.log('### inserting', {
      caretPosition,
      temporaryNodeSize: temporaryNode.nodeSize,
      endPosition,
    })

    dispatch(tr)
  } else {
    //console.log('### no dispatch')
  }

  // Show the autocomplete box
  const matchString = ''
  const autocomplete = showAutocompleteBox('PEOPLE', view, matchString)

  // Handle selection of a person
  autocomplete.onSelect = item => {
    insertPeopleNode(view, item) // Replace temporaryNode with the selected person node
  }

  // Handle cancellation
  autocomplete.onClose = () => {
    if (dispatch) {
      // Replace the temporaryNode with plain text containing the match string
      const matchText = schema.text(
        view.state.doc.textBetween(
          caretPosition,
          caretPosition + temporaryNode.nodeSize
        )
      )
      dispatch(
        tr.replaceWith(
          caretPosition,
          caretPosition + temporaryNode.nodeSize,
          matchText
        )
      )
    }
  }

  return true // Indicate the key was handled
}

export const autocompleteCommands = keymap({
  Enter: doEnter,
  '@': handleAtKey,
})

// Function to show the autocomplete box
function showAutocompleteBox(
  mode: MODE,
  view: EditorView,
  matchString: string
): AutocompleteBox {
  const rect = view.dom.getBoundingClientRect()
  const cursorPos = view.coordsAtPos(view.state.selection.$from.pos)

  const x = cursorPos.left - rect.left
  const y = cursorPos.top - rect.top

  const autocomplete = new AutocompleteBox(mode, {
    container: view.dom.parentElement as HTMLElement,
    fetch: getFakeUsers,
    onSelect: item => {
      console.log('Selected:', item)
      insertPeopleNode(view, item) // Insert the selected person node
    },
    onClose: () => {
      console.log('Autocomplete box closed')
    },
  })

  autocomplete.setPosition(x + 30, y + 40) // Adjust position
  autocomplete
    .update(matchString) // Initialize with the current match string
    .catch(error => {
      console.error('Error fetching autocomplete items:', error)
    })

  return autocomplete // Return the instance for external updates
}

// Function to handle inserting a PeopleNode
function insertPeopleNode(view: EditorView, name: string): void {
  const { state, dispatch } = view
  const { schema } = state

  const peopleNode = schema.nodes.people.create({ name })
  const transaction = state.tr.replaceSelectionWith(peopleNode)
  dispatch(transaction.scrollIntoView())
}

function insertAndUpdateText(view: EditorView, text: string): boolean {
  const { state } = view

  const transaction = state.tr.insertText(text)
  const newState = state.apply(transaction)
  view.updateState(newState)
  return true
}
