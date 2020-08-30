import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { Top, getCss } from '@sure-thing/box';

import { theme } from '@/app/lib/theme'
import { document } from '@/app/lib/document'

export function render(Page, context) {
  return renderToStaticMarkup(
    <Top theme={theme}>
      <Page {...context} />
    </Top>
  )
}

export function prepare({ body, head }) {
  return document({
    body,
    head: `<title>${head.title}</title><style id="style">${getCss()}</style>`
  })
}
