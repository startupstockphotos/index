import { h } from 'hyposcript'
import { Box } from 'hypobox'

export function Gutter ({ children }) {
  return <Box px={[3, 3, 5]}>{children}</Box>
}
