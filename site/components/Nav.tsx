import Link from "next/link";

import { Box } from "./Box";
import { Gutter } from "./Gutter";

export function Nav({ subpage }: { subpage?: string }) {
  return (
    <Box as="header" py="med" borderBottom="2px solid currentColor">
      <Gutter>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box as="h1" fontSize={2} fontWeight={4} display="flex" alignItems="center">
            <Link href="/" passHref>
              <Box as="a">
                SSP
              </Box>
            </Link>

            {subpage && (
              <>
                <Box mx="xs">/</Box>

                <Box>{subpage}</Box>
              </>
            )}
          </Box>

          <Box
            as="nav"
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
          >
            <Link href="/pages/[slug]" as={`/pages/about`} passHref>
              <Box as="a" fontSize={2} fontWeight={4}>
                About
              </Box>
            </Link>
          </Box>
        </Box>
      </Gutter>
    </Box>
  );
}
