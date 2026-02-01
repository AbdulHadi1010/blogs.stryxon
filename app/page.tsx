import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = sortedPosts.map((post) => ({
    ...allCoreContent([post])[0],
    images: post.images,
  }))
  return <Main posts={posts} />
}
