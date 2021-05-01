import { h } from 'hyposcript'
import { Box } from 'hypobox'
import { html } from 'presta/html'
import merge from 'deepmerge'

import { client, image } from '@/app/lib/sanity'
import { hypostyle } from '@/app/lib/hypostyle'
import { head } from '@/app/lib/head'
import { foot } from '@/app/lib/foot'

import { Layout } from '@/app/components/Layout'
import { Gutter } from '@/app/components/Gutter'
import { Markdown } from '@/app/components/Markdown'

export async function getStaticPaths () {
  const pages = await client.fetch(`
    *[_type == 'page']{
      "slug": slug.current
    }
  `)

  return pages.map(p => p.slug)
}

export async function handler ({ path: slug }) {
  const page = await client.fetch(
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
  )

  const body = (
    <Layout navSubpage={page.title}>
      <Gutter>
        <Box
          py={[8, 8, 12]}
          cx={{
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

  return {
    html: html({
      head: merge(head, {
        title: page.metaTitle,
        description: page.metaDescription,
        image: image(page.metaImage)
          .width(1200)
          .url(),
        style: [{ id: 'style', children: hypostyle.flush() }]
      }),
      body: `<div id="root">${body}</div>`,
      foot
    })
  }
}
