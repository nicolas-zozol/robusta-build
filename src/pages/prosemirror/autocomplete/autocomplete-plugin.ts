import { Command, EditorState, Plugin, Transaction } from 'prosemirror-state'
import { keymap } from 'prosemirror-keymap'
import { getFakeUsers } from './fake-data'
import { EditorView } from 'prosemirror-view'

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

  // Capture the current input context
  const { $from } = state.selection
  const matchString = '' // Start with an empty string or prefilled context

  // Show the autocomplete box
  showAutocompleteBox(view, matchString).then(selectedName => {
    selectedName && insertPeopleNode(view, selectedName)
  })

  return true // Indicate the key was handled
}

export const autocompleteCommands = keymap({
  Enter: doEnter,
  '@': handleAtKey,
})

/* PLUGIN UI */

type AutocompleteOptions = {
  matchString: string
  callback: (name: string) => void
}

// Function to show the autocomplete box
async function showAutocompleteBox(
  view: EditorView,
  matchString: string
  //callback: (name: string) => void
): Promise<string | null> {
  const users = await getFakeUsers(matchString) // Simulated server call

  console.log('Autocomplete users:', users)

  const rect = view.dom.getBoundingClientRect()
  const cursorPos = view.coordsAtPos(view.state.selection.$from.pos)

  // Simulate a dropdown box for the example
  console.log('Showing autocomplete at:', {
    x: cursorPos.left - rect.left,
    y: cursorPos.top - rect.top,
  })

  console.log('Users fetched for autocomplete:', users)

  // Call the callback with a user name (mocking user selection here)
  if (users.length > 0) {
    return users[0]
  } else {
    return null
  }
}

// Function to handle inserting a PeopleNode
function insertPeopleNode(view: EditorView, name: string): void {
  const { state, dispatch } = view
  const { schema } = state

  const peopleNode = schema.nodes.people.create({ name })
  const transaction = state.tr.replaceSelectionWith(peopleNode)
  dispatch(transaction.scrollIntoView())
}
