import { h } from 'hyposcript'
import { Box } from 'hypobox'
import { Img } from '@/app/components/Img'

export function Photo ({ asset, width }) {
  return (
    <Box
      css={() => ({
        boxShadow: `0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04)`,
        overflow: `hidden`
      })}
    >
      <Img asset={asset} w={width} />
    </Box>
  )
}
