import { allBlogs } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'
import { NextResponse } from 'next/server'

export const dynamic = 'force-static'

export async function GET() {
  const sortedBlogs = allBlogs
    .filter((post) => !post.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 20) // Latest 20 posts

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${siteMetadata.title}</title>
    <link>${siteMetadata.siteUrl}</link>
    <description>${siteMetadata.description}</description>
    <language>${siteMetadata.language}</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteMetadata.siteUrl}/api/feed" rel="self" type="application/rss+xml"/>
    ${sortedBlogs
      .map(
        (post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${siteMetadata.siteUrl}/${post.path}</link>
      <description>${escapeXml(post.summary || '')}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <guid>${siteMetadata.siteUrl}/${post.path}</guid>
      ${post.tags?.map((tag) => `<category>${escapeXml(tag)}</category>`).join('') || ''}
    </item>`
      )
      .join('')}
  </channel>
</rss>`

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}
