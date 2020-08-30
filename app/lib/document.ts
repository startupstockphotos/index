export function document ({ body, head }: { body: string; head: string }) {
  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>

    <link rel="icon" type="image/png" href="/static/favicon.png">

    <meta name="author" content="@estrattonbailey">
    <meta name="keywords" content="stock photos, photos, stock, startup, startups, startup photos, startup stock photos, free, creative commons, CC0">

    <meta name="description" content="Take 'em, these things are free. Go. Make something."/>
    <meta property="og:description" content="Take 'em, these things are free. Go. Make something."/>
    <meta property="og:site_name" content="Startup Stock Photos"/>
    <meta property="og:title" content="Startup Stock Photos | Free Tech Stock Photos"/>
    <meta property="og:image" content="/static/og.png"/>
    <meta property="og:url" content="https://startupstockphotos.com/"/>
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:site" content="@startupphotos"/>
    <meta name="twitter:creator" content="@estrattonbailey"/>
    <meta name="twitter:title" content="Startup Stock Photos | Free Tech Stock Photos"/>
    <meta name="twitter:description" content="Take 'em, these things are free. Go. Make something."/>
    <meta name="twitter:image" content="/static/og.png"/>

    <link rel="stylesheet" href="https://unpkg.com/svbstrate@4.1.1/src/lib/reset.css" />
    <link rel="stylesheet" href="https://unpkg.com/svbstrate@4.1.1/src/lib/buttons.css" />
    <link rel="stylesheet" href="https://unpkg.com/svbstrate@4.1.1/src/lib/forms.css" />
    <link rel="stylesheet" href="https://unpkg.com/svbstrate@4.1.1/src/lib/lists.css" />
    <link href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700" rel="stylesheet" />
    <style>
      * {
        font-family: 'Roboto Mono', monospace;
      }
    </style>

    ${head}

    <script>
      "function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(e,t){"use strict";if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(e),r=1;r<arguments.length;r++){var o=arguments[r];if(null!=o)for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(n[c]=o[c])}return n},writable:!0,configurable:!0});
    </script>
  </head>
  <body>
    <div id="root">${body}</div>
    <script src="/client.js"></script>
  </body>
</html>`
}
