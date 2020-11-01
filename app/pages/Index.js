import { h } from 'hyposcript'
import { Box } from 'hypobox'
import { load } from 'presta/load'

import { client } from '@/app/lib/sanity'
import { documentTitle } from '@/app/lib/documentTitle'
import { image } from '@/app/lib/sanity'

import { Img } from '@/app/components/Img'
import { Layout } from '@/app/components/Layout'
import { Gutter } from '@/app/components/Gutter'

export function getPaths () {
  return ['/']
}

export function Page (props) {
  const photos = load(
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
    { key: 'indexPhotos', duration: '5m' }
  )
  const page = load(
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
    { key: 'indexPage' }
  )

  if (!photos || !page) return

  props.head({
    title: page.metaTitle,
    description: page.metaDescription,
    image: image(page.metaImage)
      .width(1200)
      .url(),
    meta: [{ name: 'keywords', content: page.metaKeywords }]
  })

  return (
    <Layout>
      <Gutter>
        <Box py={3}>
          <Box as='h1'>Startup Stock Photos</Box>
          <Box as='p'>The original tech photo site.</Box>
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
                href={`/photos/${photo.slug.current}`}
                css={{
                  ':focus': {
                    outline: '0'
                  },
                  ':focus .box': {
                    opacity: 1
                  },
                  ':hover .box': {
                    opacity: 1
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
                  fill
                  z={2}
                  c='black'
                  className='box'
                  css={{
                    opacity: 0,
                    boxShadow: 'inset 0 0 0 4px'
                  }}
                />
              </Box>
            </Box>
          )
        })}
      </Box>
    </Layout>
  )
}
