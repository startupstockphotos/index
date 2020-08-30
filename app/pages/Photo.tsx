import React from "react";
import { Box } from "@sure-thing/box";
import { load } from "@presta/load";

import { client } from "@/app/lib/sanity";
import { documentTitle } from "@/app/lib/documentTitle";

import { Img } from "@/app/components/Img";
import { Layout } from "@/app/components/Layout";

export async function getPaths() {
  const slugs: { slug: string }[] = await client.fetch(`
    *[_type == 'photo']{
      "slug": slug.current,
    }
  `);

  return slugs.map((s) => `/photos/${s.slug}`);
}

export function Page(props: any) {
  const [_, slug] = props.pathname.match(/photos\/(.+)/) || []

  const photo: any = load(
    () =>
      client.fetch(
        `*[_type == 'photo' && slug.current == $slug]{
          title,
          image,
          "palette": image.asset->metadata.palette {
            dominant,
          },
          "username": user->username.current,
        }[0]`,
        { slug }
      ),
    { key: slug }
  );

  props.head.title = documentTitle(photo ? photo.title : '')

  return (
    <Layout navSubPath={slug}>
      {photo && (
        <>
          <Box h="calc(100vh - 75px)">
            <Img bg={photo.palette.dominant.background} asset={photo.image} pt="auto" width={2000} h />
          </Box>
        </>
      )}
    </Layout>
  );
}
