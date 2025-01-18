import { Fragment, Node, Schema, DOMParser } from 'prosemirror-model'

export function createNodeFromContent(
  content: string | Node | Fragment,
  schema: Schema
): Node | Fragment {
  if (content instanceof Node || content instanceof Fragment) {
    return content
  }

  const parser = DOMParser.fromSchema(schema)
  const domNodes = stringToDOMNode(content)
  if (domNodes.length === 0) {
    return schema.node('doc').content.content[0]
  }
  if (domNodes.length === 1) {
    return parser.parse(domNodes[0], {}).content.content[0]
  }

  return Fragment.fromArray(
    domNodes.map(domNode => parser.parse(domNode, {}).content.content[0])
  )
}

export function stringToDOMNode(
  htmlString: string
): readonly globalThis.Node[] {
  if (typeof document === 'undefined') {
    throw new Error(
      'stringToDOMNode requires a DOM. Make sure to use it in a browser or jsdom environment.'
    )
  }
  const template = document.createElement('template')
  template.innerHTML = htmlString.trim()
  return Array.from(template.content.childNodes) as readonly globalThis.Node[]
}

export function wrapAsDoc(nodes: Node | Fragment, schema: Schema): Node {
  // Ensure the input is a Fragment
  const fragment = nodes instanceof Node ? Fragment.from(nodes) : nodes

  console.log('>>>', fragment.toJSON())
  // Create a parent `doc` node with the Fragment as its content
  return schema.node('doc', null, fragment)
}
