import React from "react";

import { Sizes } from "../lib/theme";
import { Box } from "./Box";

export function Container({
  size,
  children,
}: React.PropsWithChildren<{ size: keyof Sizes }>) {
  return (
    <Box maxWidth={size} mx="auto">
      {children}
    </Box>
  );
}
