import { z, defineCollection } from 'astro:content';

// Blog collection ( in src/content/blog)
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(), // converte stringhe in Date
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }),
    tags: z.array(z.string())
  })
});

// Projects collection (in src/content/projects)
const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).optional()
  })
});

// Links collection (in src/content/links)
const links = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    icon: z.string().optional()
  })
});

const albums = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      cover: image(),
      captions: z
        .array(
          z.object({
            imagenr: z.number().int().positive(),
            caption: z.string(),
          })
        )
        .optional(),
    }),
});

// Export all collections including music
// Music EPs collection (data)
const music = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      cover: image(),
      pubDate: z.coerce.date().optional(),
      tracks: z.array(
        z.object({
          filename: z.string(), // URL path to audio (recommend placing under /music in public)
          title: z.string(),
          caption: z.string().optional(),
        })
      ),
    }),
});

export const collections = { blog, projects, links, albums, music };