import { Plugin } from 'prosemirror-state'

export const transformStopToEnd = new Plugin({
  appendTransaction(transactions, oldState, newState) {
    let docChanged = transactions.some(tr => tr.docChanged)
    if (!docChanged) return

    let { doc } = newState
    let tr = newState.tr
    let replaced = false

    doc.descendants((node, pos) => {
      if (node.type.name === 'stop') {
        let nextNode = doc.nodeAt(pos + node.nodeSize)
        if (nextNode && nextNode.type.name === 'stop') {
          // Replace the two `STOP` nodes with an `END` node
          let endNode = newState.schema.nodes.end.create()
          tr.replaceWith(pos, pos + node.nodeSize + nextNode.nodeSize, endNode)
          replaced = true
          return false // Stop further traversal
        }
      }
    })

    return replaced ? tr : null
  },
})
