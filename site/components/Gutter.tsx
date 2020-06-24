import { Box } from "./Box";

export function Gutter({ children }) {
  return (
    <Box px={['med', 'med', 'xl']}>
      {children}
    </Box>
  );
}
