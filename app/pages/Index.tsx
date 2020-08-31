import React from 'react'
import { Box } from '@sure-thing/box'
import { load } from 'presta/load'

import { client } from '@/app/lib/sanity'
import { documentTitle } from '@/app/lib/documentTitle'

import { Img } from '@/app/components/Img'
import { Layout } from '@/app/components/Layout'
import { Gutter } from '@/app/components/Gutter'

export function getPaths () {
  return ['/']
}

export function Page (props: any) {
  const result = load(
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
    { key: 'index', duration: '5m' }
  )

  props.head.title = documentTitle()

  return (
    <Layout>
      <Gutter>
        <Box py={3}>
          <Box as='h1'>Startup Stock Photos</Box>
          <Box as='p'>The original tech photo site.</Box>
        </Box>
      </Gutter>

      <Box as='ul' f fw>
        {result
          ? result.map((photo: any) => {
              return (
                <Box
                  key={photo.slug.current}
                  as='li'
                  db
                  w={[1, 1 / 2, 1 / 3, 1 / 4]}
                >
                  <Box as='a' db href={`/photos/${photo.slug.current}`}>
                    <Img
                      bg={photo.palette.dominant.background}
                      asset={photo.image}
                      width={450}
                    />
                  </Box>
                </Box>
              )
            })
          : null}
      </Box>
    </Layout>
  )
}
