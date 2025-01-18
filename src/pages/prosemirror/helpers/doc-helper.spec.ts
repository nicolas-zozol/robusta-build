import { describe, expect, test } from '@jest/globals'
import { createNodeFromContent, stringToDOMNode, wrapAsDoc } from './doc-helper'
import { DOMParser, Fragment, Schema, Node } from 'prosemirror-model'
import { fragmentToHtml, nodeToHtml } from './node-helper'

describe('createNodeFromContent', () => {
  // Sample schema for testing
  const schema = new Schema({
    nodes: {
      doc: { content: 'block*' },
      paragraph: { group: 'block', content: 'inline*', toDOM: () => ['p', 0] },
      text: { group: 'inline', toDOM: node => node.text || '' },
    },
  })

  test('returns input  after a content loop', () => {
    const initialText = '<p>Test</p>'
    const nodes = createNodeFromContent(initialText, schema)
    //const doc = wrapAsDoc(nodes, schema)
    const html = nodeToHtml(nodes as Node, schema)

    expect(initialText).toBe(html)
  })

  test('returns input after a content loop with two paragraph', () => {
    const initialText = '<p>One</p><p>Two</p>'
    const nodes = createNodeFromContent(initialText, schema)
    const html = fragmentToHtml(nodes as Fragment, schema)

    expect(initialText).toBe(html)
  })

  test('returns input if it is already a Node', () => {
    const initialText = '<p>Test</p>'
    const nodes = createNodeFromContent(initialText, schema)
    if (!(nodes instanceof Node)) {
      fail('Expected nodes to be an instance of Node')
    }
    const result = createNodeFromContent(nodes, schema)
    expect(result).toBe(nodes)
  })

  test('returns input if it is already a Fragment', () => {
    const fragment = Fragment.fromArray([
      schema.node('paragraph', null, schema.text('Hello')),
      schema.node('paragraph', null, schema.text('World')),
    ])

    const result = createNodeFromContent(fragment, schema)
    expect(result).toBe(fragment)
  })

  /*
  test('parses a valid HTML string into a Node', () => {
    const result = createNodeFromContent('<p>Test</p>', schema)
    expect((result as Node).type.name).toBe('doc')
    expect((result as Node).childCount).toBe(1)
    expect((result as Node).firstChild?.type.name).toBe('paragraph')
  })

  test('parses an HTML string with multiple nodes', () => {
    const result = createNodeFromContent('<p>First</p><p>Second</p>', schema)
    expect((result as Node).type.name).toBe('doc')
    expect((result as Node).childCount).toBe(2)
    expect((result as Node).firstChild?.textContent).toBe('First')
    expect((result as Node).lastChild?.textContent).toBe('Second')
  })

  test('throws an error for invalid schema content', () => {
    expect(() => createNodeFromContent('<invalid>', schema)).toThrow()
  })

  test('handles empty string gracefully', () => {
    const result = createNodeFromContent('', schema)
    expect((result as Node).type.name).toBe('doc')
    expect((result as Node).childCount).toBe(0)
  })

  test('handles whitespace-only string gracefully', () => {
    const result = createNodeFromContent('   ', schema)
    expect((result as Node).type.name).toBe('doc')
    expect((result as Node).childCount).toBe(0)
  })*/
})
