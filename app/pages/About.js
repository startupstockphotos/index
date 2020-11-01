import { h } from 'hyposcript'
import { Box } from 'hypobox'
import { load } from 'presta/load'

import { client } from '@/app/lib/sanity'
import { documentTitle } from '@/app/lib/documentTitle'

import { Img } from '@/app/components/Img'
import { Layout } from '@/app/components/Layout'
import { Gutter } from '@/app/components/Gutter'

export function getPaths () {
  return ['/about']
}

export function Page (props) {
  const [_, slug] = props.pathname.match(/\/(.+)$/) || []
  const page = load(
    () =>
      client.fetch(
        `
      *[_type == 'page' && slug.current == $slug]{
        title,
        description,
        featuredImage,
      }[0]
    `,
        { slug }
      ),
    { key: 'about' }
  )

  props.head({ title: documentTitle(page ? page.title : '') })

  return (
    <Layout>
      {page && (
        <Gutter>
          <Box
            py={3}
            css={{
              maxWidth: '640px'
            }}
          >
            <Box as='h1'>About</Box>
            <Box as='p' lh={6}>
              {page.description}
            </Box>
          </Box>
        </Gutter>
      )}
    </Layout>
  )
}
