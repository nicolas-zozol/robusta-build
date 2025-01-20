import { Schema, NodeSpec, MarkSpec } from 'prosemirror-model'

const autocompleteNodes: Record<string, NodeSpec> = {
  doc: {
    content: 'inline*',
  },
  text: {
    group: 'inline',
  },
  temporaryPeople: {
    group: 'inline',
    inline: true,
    atom: false, // Allow editing
    content: 'text*',
    toDOM: () => ['span', { class: 'temporary-people' }, 0],
    parseDOM: [{ tag: 'span.temporary-people' }],
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
  },
  temporaryHashtag: {
    group: 'inline',
    inline: true,
    atom: false,
    content: 'text*',
    toDOM: () => ['span', { class: 'temporary-hashtag' }, 0],
    parseDOM: [{ tag: 'span.temporary-hashtag' }],
  },
  hashtag: {
    inline: true,
    atom: true,
    group: 'inline',
    attrs: { tag: { default: '' } },
    toDOM: node => [
      'span',
      { class: 'hashtag', 'data-name': node.attrs.tag },
      `#${node.attrs.tag}`,
    ],
  },
  temporaryFlow: {
    group: 'inline',
    inline: true,
    atom: false,
    content: 'text*',
    toDOM: () => ['span', { class: 'temporary-flow' }, 0],
    parseDOM: [{ tag: 'span.temporary-flow' }],
  },
  flow: {
    inline: true,
    atom: true,
    group: 'inline',
    attrs: { name: { default: '' } },
    toDOM: node => [
      'span',
      { class: 'flow', 'data-name': node.attrs.name },
      `#${node.attrs.name}`,
    ],
  },
}

const autocompleteMarks: Record<string, MarkSpec> = {}

export const autocompleteSchema = new Schema({
  nodes: autocompleteNodes,
  marks: autocompleteMarks,
})
