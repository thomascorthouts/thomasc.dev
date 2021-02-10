import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import blockContent from './blockContent'
import job from './job'
import company from './company'
import accomplishment from './accomplishment'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // Documents
    job,
    company,
    // Objects
    blockContent,
    accomplishment,
  ]),
})
