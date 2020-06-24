import React from "react";
import { Box } from "./Box";

import { image } from "../lib/sanity";

export function Img({ asset, width = 1000, ...props }) {
  const img = React.useRef(null);
  const [loaded, loadedSet] = React.useState(false);

  React.useEffect(() => {
    if (img.current?.complete) {
      loadedSet(true);
    }
  }, []);

  return (
    <Box paddingTop="66%" {...props}>
      <Box
        as="img"
        display="block"
        position="absolute"
        top="0"
        bottom="0"
        left="0"
        right="0"
        width="100%"
        height="100%"
        src={image(asset).width(100).blur(100).url()}
        style={{
          objectFit: "cover",
        }}
      />

      <Box
        ref={img}
        as="img"
        display="block"
        position="absolute"
        top="0"
        bottom="0"
        left="0"
        right="0"
        width="100%"
        height="100%"
        src={image(asset).width(width).url()}
        transitionProperty="opacity"
        transitionDuration="fast"
        transitionTimingFunction="ease"
        opacity={loaded ? 1 : 0}
        style={{
          objectFit: "cover",
        }}
        onLoad={() => loadedSet(true)}
      />
    </Box>
  );
}
