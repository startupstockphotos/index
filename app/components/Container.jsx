import { h } from 'hyposcript'
import { Box } from 'hypobox'

export function Container ({ size, children }) {
  return (
    <Box
      mx='auto'
      cx={theme => ({
        maxWidth: size
      })}
    >
      {children}
    </Box>
  )
}
