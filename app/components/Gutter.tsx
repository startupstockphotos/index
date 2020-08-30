import React from 'react';
import { Box } from "@sure-thing/box";

export function Gutter({ children }: React.PropsWithChildren<{}>) {
  return (
    <Box px={[3, 3, 5]}>
      {children}
    </Box>
  );
}
