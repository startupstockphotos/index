import { h } from 'hyposcript'
import { Box } from 'hypobox'
import { load } from 'presta/load'

import { client, image } from '@/app/lib/sanity'
import { documentTitle } from '@/app/lib/documentTitle'

import { Img } from '@/app/components/Img'
import { Layout } from '@/app/components/Layout'
import { Gutter } from '@/app/components/Gutter'
import { Markdown } from '@/app/components/Markdown'

export async function getPaths () {
  const pages = await client.fetch(`
    *[_type == 'page']{
      "slug": slug.current
    }
  `)

  return pages.map(p => p.slug)
}

export function Page ({ pathname: slug, head }) {
  const page = load(
    () =>
      client.fetch(
        `
        *[_type == 'page' && slug.current == $slug]{
          metaTitle,
          metaDescription,
          metaImage,
          title,
          body,
        }[0]
      `,
        { slug }
      ),
    { key: slug }
  )

  if (!page) return ''

  head({
    title: page.metaTitle,
    description: page.metaDescription,
    image: image(page.metaImage)
      .width(1200)
      .url()
  })

  return (
    <Layout navSubpage={page.title}>
      <Gutter>
        <Box
          py={[8, 8, 12]}
          css={{
            maxWidth: '640px'
          }}
        >
          <Box as='h1' mb={6} fs={2}>
            {page.title}
          </Box>
          <Markdown>{page.body}</Markdown>
        </Box>
      </Gutter>
    </Layout>
  )
}
