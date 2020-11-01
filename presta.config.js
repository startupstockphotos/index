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

        // Google Analytics
        `
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-50384201-1"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-50384201-1');
        </script>
        `,

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
        `,

        // FB Pixel
        `<script>
        !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
        n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
        document,'script','https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1889140964685634'); // Insert your pixel ID here.
        fbq('track', 'PageView');
        </script>
        <noscript><img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=1889140964685634&ev=PageView&noscript=1"
        /></noscript>`
      ]
    }
  })
}
