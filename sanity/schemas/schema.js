// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import post from './post'
import user from './user'
import tag from './tag'
import photo from './photo'
import page from './page'
import root from './root'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // post,
    user,
    // tag,
    photo,
    page,
    root,
  ])
})
