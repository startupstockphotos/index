import Head from "next/head";
import md from "marked";

import { client } from "../../lib/sanity";

import { Box } from "../../components/Box";
import { Img } from "../../components/Img";
import { Gutter } from "../../components/Gutter";
import { Container } from "../../components/Container";
import { Nav } from "../../components/Nav";

export async function getStaticPaths() {
  const pages = await client.fetch(
    `*[_type == 'page']{
      "slug": slug.current,
    }`
  );

  return {
    paths: pages.map((page) => ({
      params: {
        slug: page.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const page = await client.fetch(
    `*[_type == 'page' && slug.current == $slug]{
      title,
      slug,
      image,
      description,
      body,
    }[0]`,
    { slug: params.slug }
  );

  return {
    props: {
      page: {
        ...page,
        bodyHTML: md(page.body),
      },
    },
  };
}

export default function Home({ page }) {
  return (
    <>
      <Head>
        <title>{page.title}</title>
      </Head>

      <Nav subpage="About" />

      <Box py={['med', 'med', 'xl']}>
        <Gutter>
          <Container size="med">
            <Box as="h1" fontSize={5} mb="med">{page.title}</Box>
            <Box dangerouslySetInnerHTML={{
              __html: page.bodyHTML,
            }} />
          </Container>
        </Gutter>
      </Box>
    </>
  );
}

