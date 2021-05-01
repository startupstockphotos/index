import { hypostyle as hypo } from 'hypostyle'
import * as presets from 'hypostyle/presets'
import { configure } from 'hypobox'

export const hypostyle = hypo({
  ...presets,
  tokens: {
    ...presets.tokens,
    color: {
      black: '#122738',
      gray: '#555'
    },
    fontFamily: {
      sans: '"Roboto", sans-serif',
      mono: '"Roboto Mono", monospace'
    }
  }
})

configure(hypostyle)
