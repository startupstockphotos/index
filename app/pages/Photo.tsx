import React from 'react'
import { Box } from '@sure-thing/box'
import { load, cache, prime } from 'presta/load'

import { client } from '@/app/lib/sanity'
import { documentTitle } from '@/app/lib/documentTitle'

import { Img } from '@/app/components/Img'
import { Layout } from '@/app/components/Layout'
import { Gutter } from '@/app/components/Gutter'

const photoQuery = `
  title,
  image {
    asset->{
      _id,
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
  const photos: { slug: string }[] = await client.fetch(`
    *[_type == 'photo'] {
      ${photoQuery}
    } | order(_createdAt desc)
  `)

  photos.map(p => prime(p, { key: p.slug }))

  return photos.map(p => `/photos/${p.slug}`)
}

export function Page (props: any) {
  const [_, slug] = props.pathname.match(/photos\/(.+)/) || []

  const photo: any = load(
    () =>
      client.fetch(
        `*[_type == 'photo' && slug.current == $slug]{
          ${photoQuery}
        }[0]`,
        { slug }
      ),
    { key: slug }
  )

  props.head.title = documentTitle(photo ? photo.title : '')

  if (!photo) return null

  const { title, image, user } = photo
  const { metadata } = image.asset
  const username = user.username.current

  return (
    <Layout navSubpage={slug}>
      <Gutter>
        <Box py={4}>
          <Box f aie mb={3}>
            <Box as='h1' my='0' lh='1'>
              #{title}
            </Box>
            <Box as='p' my='0' lh='1' pb='3px' ml={3}>
              by{' '}
              <strong>
                <a href={`/${username}/photos`}>{username}</a>
              </strong>
            </Box>
          </Box>
          <Box as='p' my='0' fs={6} c='gray'>
            {metadata.dimensions.width} x {metadata.dimensions.height}
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
