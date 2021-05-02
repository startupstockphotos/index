import { h } from 'hyposcript'
import md from 'marked'

export function Markdown ({ children }) {
  return children[0] ? <div class='wysiwyg'>{md(children[0])}</div> : ''
}
