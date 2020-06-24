import { Box } from "./Box";
import { Img } from "./Img";

export function Photo({ asset, width }) {
  return (
    <Box boxShadow="medium" borderRadius="10px" overflow="hidden">
      <Img asset={asset} width={width} />
    </Box>
  );
}
