import { z, defineCollection } from 'astro:content';

const postCollection = defineCollection({
  type:'data',
  schema: z.object({
    title: z.string(),
    pubDate: z.string().datetime(),
    description: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  'posts': postCollection,
};