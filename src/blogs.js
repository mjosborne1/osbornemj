import _ from 'lodash'
import all from '../blogs/*.md'

export const blogs  = _.chain(all) // begin a chain
                      .map(transform) // transform the shape of each post
                      .orderBy('date', 'desc') // sort by date descending
                      .value() // convert chain back to array

// function for reshaping each post
function transform({filename, html, metadata}) {
  // the permalink is the filename with the '.md' ending removed
  const permalink = filename.replace(/\.md$/, '')

  // convert date string into a proper `Date`
  const date = new Date(metadata.date)

  // return the new shape
  return {...metadata, filename, html, permalink, date}
}

// provide a way to find a recipe by permalink
export function findBlog(permalink) {
  // use lodash to find by field name:
  return _.find(blogs, {permalink})
}