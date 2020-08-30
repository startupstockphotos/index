import { render as resolve } from '@presta/load';
import { Page, getPaths as paths } from '/Users/ericbailey/Sites/ssp/presta/app/pages/Photo.tsx';
import * as config from '/Users/ericbailey/Sites/ssp/presta/presta.runtime.js';

function defaultRender (page, context) {
  return page(context);
}
function defaultPrepare ({ body = '', head = '' }) {
  return `<!DOCTYPE html>
<html>
  <head>
    ${head}
  </head>
  <body>
    ${body}
  </body>
</html>`
}

export function getPaths() {
  return paths();
}

export function render (context) {
  return resolve(Page, context, config.render || defaultRender);
}

export function prepare (props) {
  return (config.prepare || defaultPrepare)(props)
}