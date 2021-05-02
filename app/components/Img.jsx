import { h } from 'hyposcript'
import { Box } from 'hypobox'

import { image } from '@/app/lib/sanity'

export function Img ({ asset, width = 1000, ...props }) {
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
        cx={() => ({
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
