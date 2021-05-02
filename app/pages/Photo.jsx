import { h } from 'hyposcript'
import { Box } from 'hypobox'
import { html } from 'presta/html'
import merge from 'deepmerge'

import { client, image } from '@/app/lib/sanity'
import { documentTitle } from '@/app/lib/documentTitle'
import { hypostyle } from '@/app/lib/hypostyle'
import { head } from '@/app/lib/head'
import { foot } from '@/app/lib/foot'

import { Img } from '@/app/components/Img'
import { Layout } from '@/app/components/Layout'
import { Gutter } from '@/app/components/Gutter'

const photoQuery = `
  title,
	description,
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

export const route = '/photos/:slug'

export async function handler (props) {
  const { slug } = props.params

  const photo = await client.fetch(
    `*[_type == 'photo' && slug.current == $slug]{
			${photoQuery}
		}[0]`,
    { slug }
  )

  const { title } = photo
  const { metadata } = photo.image.asset

  const body = (
    <Layout navSubpage={slug}>
      <Gutter>
        <Box py={[8, 8, 12]}>
          <Box f aie mb={3}>
            <Box as='h1' my='0' lh='1'>
              #{title}
            </Box>
          </Box>
          <Box as='p' my='0' fs={6} c='gray' ff='mono' fe={7}>
            {metadata.dimensions.width} x {metadata.dimensions.height} •{' '}
            <Box as='a' href={photo.image.asset.url + `?dl=ssp${slug}.jpg`}>
              Download
            </Box>
          </Box>
        </Box>
      </Gutter>

      <Box rel h='calc(100vh - 75px)'>
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

  return {
    headers: {
      'Cache-Control': 'max-age=3600, public'
    },
    html: html({
      head: merge(head, {
        title: documentTitle('#' + photo.title),
        description: photo.description || `SSP #${photo.slug}`,
        image: image(photo.image)
          .width(1200)
          .url(),
        style: [{ id: 'style', children: hypostyle.flush() }]
      }),
      body: `<div id="root">${body}</div>`,
      foot
    })
  }
}
