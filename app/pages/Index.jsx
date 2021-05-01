import { h } from 'hyposcript'
import { Box } from 'hypobox'
import { html } from 'presta/html'
import { cache } from 'presta/load'
import merge from 'deepmerge'

import { client, image } from '@/app/lib/sanity'
import { hypostyle } from '@/app/lib/hypostyle'
import { head } from '@/app/lib/head'
import { foot } from '@/app/lib/foot'

import { Img } from '@/app/components/Img'
import { Layout } from '@/app/components/Layout'
import { Gutter } from '@/app/components/Gutter'

export function getStaticPaths () {
  return ['/']
}

export async function handler () {
  const photos = await cache(
    () =>
      client.fetch(`
    *[_type == 'photo']{
        title,
        slug,
        image,
        "palette": image.asset->metadata.palette {
          dominant,
        },
        "username": user->username.current,
    } | order(_createdAt desc)
  `),
    { key: 'homePhotos', duration: 1000 * 60 }
  )
  const page = await cache(
    () =>
      client.fetch(`
    *[_type == 'root']{
        metaTitle,
        metaDescription,
        metaImage,
        metaKeywords,
        title,
        description,
    }[0]
  `),
    { key: 'index', duration: 1000 * 60 }
  )

  const body = (
    <Layout>
      <Gutter>
        <Box py={[8, 8, 12]}>
          <Box mw={600}>
            <Box as='h1' mb={4} fs={2}>
              {page.title}
            </Box>
            <Box as='p'>{page.description}</Box>
          </Box>
        </Box>
      </Gutter>

      <Box as='ul' f fw>
        {photos.map(photo => {
          return (
            <Box
              key={photo.slug.current}
              as='li'
              db
              w={[1, 1 / 2, 1 / 3, 1 / 4]}
            >
              <Box
                as='a'
                db
                rel
                href={`/photos/${photo.slug.current}`}
                cx={{
                  ':focus': {
                    outline: '0'
                  },
                  ':focus .box': {
                    opacity: 0.4
                  },
                  ':hover .box': {
                    opacity: 0.4
                  }
                }}
              >
                <Img
                  bg={photo.palette.dominant.background}
                  asset={photo.image}
                  width={400}
                />
                <Box
                  abs
                  cover
                  z={2}
                  c='d'
                  className='box'
                  bg='black'
                  cx={{
                    opacity: 0,
                    transition: `opacity 300ms cubic-bezier(.01,.79,.35,.99)`
                    // boxShadow: 'inset 0 0 0 4px'
                  }}
                />
              </Box>
            </Box>
          )
        })}
      </Box>
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
        meta: [{ name: 'keywords', content: page.metaKeywords }],
        style: [{ id: 'style', children: hypostyle.flush() }]
      }),
      body: `<div id="root">${body}</div>`,
      foot
    })
  }
}
