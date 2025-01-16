import { Schema, NodeSpec, MarkSpec } from 'prosemirror-model'

const autocompleteNodes: Record<string, NodeSpec> = {
  doc: {
    content: 'inline*',
  },
  text: {
    group: 'inline',
  },
  people: {
    inline: true,
    atom: true,
    group: 'inline',
    attrs: { name: { default: '' } },
    toDOM: node => [
      'span',
      { class: 'mention', 'data-name': node.attrs.name },
      `@${node.attrs.name}`,
    ],
    parseDOM: [
      {
        tag: 'span[data-name]',
        getAttrs: dom => ({ name: dom.getAttribute('data-name') }),
      },
    ],
  },
}

const autocompleteMarks: Record<string, MarkSpec> = {}

export const autocompleteSchema = new Schema({
  nodes: autocompleteNodes,
  marks: autocompleteMarks,
})
