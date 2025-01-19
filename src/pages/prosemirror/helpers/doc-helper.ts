import { Fragment, Node, Schema, DOMParser } from 'prosemirror-model'

export function createDocFromContent(
  content: string | Node | Fragment,
  schema: Schema
): Node {
  return wrapAsDoc(createNodeFromContent(content, schema), schema)
}

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
    parseWithCheck(content, schema)
    return schema.node('doc').content.content[0]
  }
  if (domNodes.length === 1) {
    return parseWithCheck(content, schema)
  }

  const allNodes = domNodes.map(
    domNode => parser.parse(domNode, {}).content.content[0]
  )
  allNodes.forEach(node => node.check())

  return Fragment.fromArray(allNodes)
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

export function wrapAsDoc(
  nodeOrFragment: Node | Fragment,
  schema: Schema
): Node {
  // Ensure the input is a Fragment
  if (nodeOrFragment instanceof Node && nodeOrFragment.type.name === 'doc') {
    return nodeOrFragment
  }

  if (nodeOrFragment instanceof Node) {
    return schema.node('doc', null, nodeOrFragment)
  } else {
    return schema.node('doc', null, nodeOrFragment)
  }
}

function parseWithCheck(content: string, schema: Schema): Node {
  let hasInvalidContent = false
  let invalidContent = ''

  // This is a trick from tiptap to check if the content is valid
  // A copy of the current schema with a catch-all node at the end
  const contentCheckSchema = new Schema({
    topNode: schema.spec.topNode,
    marks: schema.spec.marks,
    // Prosemirror's schemas are executed such that: the last to execute, matches last
    // This means that we can add a catch-all node at the end of the schema to catch any content that we don't know how to handle
    nodes: schema.spec.nodes.append({
      section: {
        content: 'inline*',
        group: 'block',
        parseDOM: [
          {
            tag: '*',
            getAttrs: e => {
              console.log('CAUGHT HERE', e)
              // If this is ever called, we know that the content has something that we don't know how to handle in the schema
              hasInvalidContent = true
              // Try to stringify the element for a more helpful error message
              invalidContent = typeof e === 'string' ? e : e.outerHTML
              return null
            },
          },
        ],
      },
    }),
  })
  const parser = DOMParser.fromSchema(contentCheckSchema)
  const domNodes = stringToDOMNode(content)
  console.log('DOM NODES', domNodes)
  const document = parser.parse(domNodes[0], {})
  if (hasInvalidContent) {
    throw new Error('Invalid HTML content', {
      cause: new Error(`Invalid element found: ${invalidContent}`),
    })
  }
  const node = document.content.content[0]
  node.check()
  return node
}
