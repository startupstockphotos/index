import { h } from 'hyposcript'
import { Box } from 'hypobox'

export function Gutter ({ children }) {
  return <Box px={[6, 8, 10]}>{children}</Box>
}
