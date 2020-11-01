import { h } from 'hyposcript'
import { Box, configure, getCss } from 'hypobox'
import { document } from 'presta/document'

import { theme } from '@/app/lib/theme'

configure({ theme })

const name = `Startup Stock Photos`
const url = `https://startupstockphotos.com`

export const pages = './app/pages/**/*.js'

export function createDocument (ctx) {
  return document(ctx, {
    body: `<div id="root">${ctx.body}</div>`,
    foot: {
      script: [{ src: '/client.js' }]
    },
    head: {
      og: {
        site_name: name,
        url
      },
      twitter: {
        site_name: name,
        card: 'summary_large_image',
        creator: '@estrattonbailey'
      },
      meta: [
        { name: 'author', content: 'https://twitter.com/estrattonbailey' },
        { name: 'author', content: 'https://twitter.com/JHKrak' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/static/favicon.png' },
        { rel: 'stylesheet', href: '/static/style.css' }
      ],
      style: [{ id: 'style', children: getCss() }],
      script: [
        {
          children: `"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(e,t){"use strict";if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(e),r=1;r<arguments.length;r++){var o=arguments[r];if(null!=o)for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(n[c]=o[c])}return n},writable:!0,configurable:!0});`
        }
      ]
    }
  })
}
