import { h } from 'hyposcript'
import { Box } from 'hypobox'
import { load, cache, prime } from 'presta/load'
import { head } from 'presta/head'

import { client } from '@/app/lib/sanity'
import { documentTitle } from '@/app/lib/documentTitle'
import { image } from '@/app/lib/sanity'

import { Img } from '@/app/components/Img'
import { Layout } from '@/app/components/Layout'
import { Gutter } from '@/app/components/Gutter'

const photoQuery = `
  title,
  image {
    asset->{
      _id,
      url,
  		metadata {
  			dimensions,
  			palette {
    			dominant
  			},
			}
    }
  },
	user->{
    username,
    image
  },
  "slug": slug.current,
`

export async function getPaths () {
  const photos = await cache(
    async () =>
      await client.fetch(`
    *[_type == 'photo'] {
      ${photoQuery}
    } | order(_createdAt desc)
    `),
    { key: 'photos', duration: '1m' }
  )

  photos.map(p => prime(p, { key: p.slug }))

  return photos.map(p => `/photos/${p.slug}`)
}

export function Page (props) {
  const [_, slug] = props.pathname.match(/photos\/(.+)/) || []

  const photo = load(
    () =>
      client.fetch(
        `*[_type == 'photo' && slug.current == $slug]{
          ${photoQuery}
        }[0]`,
        { slug }
      ),
    { key: slug }
  )

  if (!photo) return null

  head({
    title: documentTitle('#' + photo.title),
    description: `SSP #${photo.slug}`,
    image: image(photo.image)
      .width(1200)
      .url()
  })

  const { title, user } = photo
  const { metadata } = photo.image.asset
  const username = user.username.current

  return (
    <Layout navSubpage={slug}>
      <Gutter>
        <Box py={4}>
          <Box f aie mb={3}>
            <Box as='h1' my='0' lh='1'>
              #{title}
            </Box>
          </Box>
          <Box as='p' my='0' fs={6} c='gray'>
            {metadata.dimensions.width} x {metadata.dimensions.height} •{' '}
            <Box as='a' href={photo.image.asset.url + `?dl=ssp${slug}.jpg`}>
              Download
            </Box>
          </Box>
        </Box>
      </Gutter>

      <Box h='calc(100vh - 75px)'>
        <Img
          bg={metadata.palette.dominant.background}
          asset={photo.image}
          pt='auto'
          width={2000}
          h
        />
      </Box>
    </Layout>
  )
}
