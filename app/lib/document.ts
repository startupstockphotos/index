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
  </head>
  <body>
    <div id="root">${body}</div>
    <script src="/client.js"></script>
  </body>
</html>`
}
