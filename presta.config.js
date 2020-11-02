import { h } from 'hyposcript'
import { configure, getCss } from 'hypobox'
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
      script: [
        { src: '/client.js' },
        `<div id='div-gpt-ad-1580157483474-0' style='width: 1px; height: 1px;'><script>googletag.cmd.push(function(){googletag.display('div-gpt-ad-1580157483474-0'); });</script>`
      ]
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
          children: `
            console.groupCollapsed('Built by https://estrattonbailey.com with the following:');
            console.log('https://github.com/sure-thing/presta');
            console.log('https://github.com/sure-thing/hyposcript');
            console.log('https://github.com/sure-thing/hypobox');
            console.log('https://github.com/estrattonbailey/svbstrate');
            console.log('https://github.com/estrattonbailey/operator');
            console.log('https://github.com/estrattonbailey/picoapp');
            console.log('https://github.com/estrattonbailey/vsbl');
            console.log('https://github.com/markedjs/marked');
            console.log('https://github.com/webpack');
            console.log('https://www.sanity.io/');
            console.log('https://www.netlify.com/');
            console.groupEnd();
          `
        },
        {
          children: `"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(e,t){"use strict";if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(e),r=1;r<arguments.length;r++){var o=arguments[r];if(null!=o)for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(n[c]=o[c])}return n},writable:!0,configurable:!0});`
        },

        // banner ad
        `<script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
        <script>
          window.googletag = window.googletag || {cmd: []};
          googletag.cmd.push(function() {
            googletag.defineSlot('/7346874/Hellobar-adunits/7502', [1, 1], 'div-gpt-ad-1580157483474-0').addService(googletag.pubads());
            googletag.pubads().enableSingleRequest();
            googletag.enableServices();
          });
        </script>
        `
      ]
    }
  })
}
