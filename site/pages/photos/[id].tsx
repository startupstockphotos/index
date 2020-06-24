import Head from "next/head";

import { client } from "../../lib/sanity";

import { Box } from "../../components/Box";
import { Img } from "../../components/Img";
import { Nav } from "../../components/Nav";

export async function getStaticPaths() {
  const photos = await client.fetch(
    `*[_type == 'photo']{
      "slug": slug.current,
    }`
  );

  return {
    paths: photos.map((photo) => ({
      params: {
        id: photo.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const photo = await client.fetch(
    `*[_type == 'photo' && slug.current == $slug]{
      title,
      slug,
      image,
      "username": user->username.current,
    }[0]`,
    { slug: params.id }
  );

  return {
    props: {
      photo,
    },
  };
}

export default function Home({ photo }) {
  return (
    <>
      <Head>
        <title>Startup Stock Photos</title>
      </Head>

      <Nav subpage={photo.slug.current} />

      <Box height="calc(100vh - 77px)">
        <Img asset={photo.image} width={2000} paddingTop="auto" height="100%" />
      </Box>
    </>
  );
}
