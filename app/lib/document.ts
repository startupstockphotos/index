export function document ({ body, head }: { body: string; head: string }) {
  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>

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
      if (typeof Object.assign !== 'function') { // Must be writable: true, enumerable: false, configurable: true Object.defineProperty(Object, "assign", { value: function assign(target, varArgs) { // .length of function is 2 'use strict'; if (target === null || target === undefined) { throw new TypeError('Cannot convert undefined or null to object'); } var to = Object(target); for (var index = 1; index < arguments.length; index++) { var nextSource = arguments[index]; if (nextSource !== null && nextSource !== undefined) { for (var nextKey in nextSource) { // Avoid bugs when hasOwnProperty is shadowed if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) { to[nextKey] = nextSource[nextKey]; } } } } return to; }, writable: true, configurable: true }); }
    </script>
  </head>
  <body>
    <div id="root">${body}</div>
    <script src="/client.js"></script>
  </body>
</html>`
}
