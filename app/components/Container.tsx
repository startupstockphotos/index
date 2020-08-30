import React from 'react'
import { Box } from '@sure-thing/box'

import { Sizes } from '@/app/lib/theme'

export function Container ({
  size,
  children
}: React.PropsWithChildren<{ size: keyof Sizes }>) {
  return (
    <Box
      mx='auto'
      css={(theme: any) => ({
        maxWidth: size,
      })}
    >
      {children}
    </Box>
  )
}
