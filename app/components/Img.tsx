import React from 'react'
import { Box } from '@sure-thing/box'

import { image } from '@/app/lib/sanity'

export function Img ({ asset, width = 1000, ...props }: any) {
  return (
    <Box pt='66%' {...props} data-component='img'>
      <Box
        as='img'
        db
        abs
        top
        bottom
        left
        right
        w
        h
        z={1}
        data-src={image(asset)
          .width(width)
          .url()}
        css={() => ({
          opacity: 0,
          objectFit: 'cover',
          transitionProperty: 'opacity',
          transitionDuration: '150ms',
          transitionTimingFunction: 'ease-in-out'
        })}
      />
    </Box>
  )
}
