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
            <Box
              as='a'
              href='https://paypal.me/startupphotos'
              target='_blank'
              db
              mr={[4, 6]}
              px={4}
              py={1}
              bg='blue'
              css={{ color: 'white !important', borderRadius: '20px' }}
            >
              Donate
            </Box>
            <Box as='a' href='/about' db mr={[4, 6]}>
              About
            </Box>
            <Box as='a' href='/faq' db>
              FAQ
            </Box>
          </Box>
        </Box>
      </Gutter>
    </Box>
  )
}
