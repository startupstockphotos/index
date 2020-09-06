import { h } from 'hyposcript'
import { Box, configure, getCss } from 'hypobox'
import { document } from 'presta/document'

import { theme } from '@/app/lib/theme'

configure({ theme })

export function render (Page, context) {
  return <Page {...context} />
}

const name = `Startup Stock Photos`
const title = `Startup Stock Photos | Free Tech Stock Photos`
const description = `Take 'em, these things are free. Go. Make something.`
const image = `/static/og.png`
const url = `https://startupstockphotos.com`

export function createDocument ({ body }) {
  return document({
    body: `<div id="root">${body}</div>`,
    foot: {
      script: [{ src: '/client.js' }]
    },
    head: {
      description,
      og: {
        title,
        description,
        site_name: name,
        image,
        url
      },
      twitter: {
        title,
        description,
        site_name: name,
        image,
        card: 'summary_large_image',
        creator: '@estrattonbailey'
      },
      meta: [
        { name: 'author', content: '@estrattonbailey' },
        {
          name: 'keywords',
          content:
            'stock photos, photos, stock, startup, startups, startup photos, startup stock photos, free, creative commons, CC0'
        }
      ],
      link: [
        `<link rel="icon" type="image/png" href="/static/favicon.png">`,
        `<link rel="stylesheet" href="https://unpkg.com/svbstrate@4.1.1/src/lib/reset.css" />`,
        `<link rel="stylesheet" href="https://unpkg.com/svbstrate@4.1.1/src/lib/buttons.css" />`,
        `<link rel="stylesheet" href="https://unpkg.com/svbstrate@4.1.1/src/lib/forms.css" />`,
        `<link rel="stylesheet" href="https://unpkg.com/svbstrate@4.1.1/src/lib/lists.css" />`,
        `<link href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700" rel="stylesheet" />`
      ],
      style: [
        `<style id="style">${getCss()}</style>`,
        `<style>
          * {
            font-family: 'Roboto Mono', monospace;
          }
          html, body {
            color: #333;
          }
          ::selection {
            background: blue;
            color: white;
          }
          a {
            color: blue;
          }
          a:visited {
            color: blue;
          }
        </style>`
      ],
      script: [
        {
          children: `"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(e,t){"use strict";if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(e),r=1;r<arguments.length;r++){var o=arguments[r];if(null!=o)for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(n[c]=o[c])}return n},writable:!0,configurable:!0});`
        }
      ]
    }
  })
}
