import React from 'react'
import { Box } from '@sure-thing/box'

import { Gutter } from '@/app/components/Gutter'

export function Nav ({ subpage }: { subpage?: string }) {
  return (
    <Box
      as='header'
      py={3}
      h='75px'
      css={{
        borderBottom: '2px solid currentColor'
      }}
    >
      <Gutter>
        <Box f aic jcb>
          <Box as='h1' f aic fs={5} fe={4}>
            <a href='/'>SSP</a>

            {subpage && (
              <>
                <Box mx={2}>/</Box>

                <Box>{subpage}</Box>
              </>
            )}
          </Box>

          <Box as='nav' f aic jce fs={5} fe={4}>
            <a href='/about'>About</a>
          </Box>
        </Box>
      </Gutter>
    </Box>
  )
}
