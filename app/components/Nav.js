import { h } from 'hyposcript'
import { Box } from 'hypobox'

import { Gutter } from '@/app/components/Gutter'

export function Nav ({ subpage }) {
  return (
    <Box
      as='header'
      py={6}
      css={{
        borderBottom: '2px solid currentColor'
      }}
    >
      <Gutter>
        <Box f aic jcb>
          <Box as='h1' f aic fs={5} fe={7}>
            {subpage ? (
              <>
                <a href='/'>SSP</a>
                <Box mx={2}>/</Box>
                <Box>{subpage}</Box>
              </>
            ) : (
              <span>SSP</span>
            )}
          </Box>

          <Box as='nav' f aic jce fs={5} fe={7}>
            <Box as='a' href='/about' mr={6}>
              About
            </Box>
            <Box as='a' href='/faq'>
              FAQ
            </Box>
          </Box>
        </Box>
      </Gutter>
    </Box>
  )
}
