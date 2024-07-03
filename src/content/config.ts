import { defineCollection, reference, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      description: z.string(),
      image: image(), // you can use refine to validate the image

      //Relation
      //   author: z.string(),
      author: reference('author'),

      //Relation
      tags: z.array(z.string()),

      //Boolean
      isDraft: z.boolean().default(false),
    }),
});

const authorCollection = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      avatar: image(),
      twitter: z.string().optional(),
      linkedIn: z.string().optional(),
      github: z.string().optional(),
      bio: z.string(),
      subtitle: z.string(),
      //make image a webp and size it to 200x200
    }),
});

export const collections = {
  author: authorCollection,
  blog: blogCollection,
};
