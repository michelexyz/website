import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('blog')).sort((a, b) => {
    const da = (a.data?.pubDate?.getTime?.() || 0);
    const db = (b.data?.pubDate?.getTime?.() || 0);
    return db - da; // newest first
  });
  return rss({
    title: "Michele Vannucci's Blog",
    description: "Thoughts, stories and ideas.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.id}/`,
    })),
    customData: `<language>en-us</language>`,
  })
}