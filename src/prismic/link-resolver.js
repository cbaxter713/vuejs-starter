/**
 * To learn more about Link Resolving check out the Prismic documentation
 * https://prismic.io/docs/vuejs/beyond-the-api/link-resolving
 */

export default function (doc) {
  if (doc.isBroken) {
    return '/not-found'
  }

  if (doc.type === 'home_page') {
    return '/'
  }

  if (doc.type === 'team_page') {
    return '/team/'
  }

  if (doc.type === 'team_member') {
    return '/team/' + doc.uid
  }

  return '/not-found'
}
