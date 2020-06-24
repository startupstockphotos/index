import Head from "next/head";
import Link from "next/link";

import { client } from "../lib/sanity";

import { Box } from "../components/Box";
import { Img } from "../components/Img";
import { Nav } from "../components/Nav";

export async function getStaticProps() {
  const photos = await client.fetch(`
    *[_type == 'photo']{
        title,
        slug,
        image,
        "username": user->username.current,
      }
  `);

  return {
    props: {
      photos,
    },
  };
}

export default function Home({ photos }) {
  return (
    <>
      <Head>
        <title>Startup Stock Photos</title>
      </Head>

      <Nav />

      <Box as="ul" display="flex" flexWrap="wrap">
        {photos.map((photo) => {
          return (
            <Box as="li" width={[1, 1 / 2, 1 / 3, 1 / 4]}>
              <Link href="/photos/[id]"  as={`/photos/${photo.slug.current}`} passHref>
                <Box as="a" display="block">
                  <Img asset={photo.image} width={450} />
                </Box>
              </Link>
            </Box>
          );
        })}
      </Box>
    </>
  );
}
