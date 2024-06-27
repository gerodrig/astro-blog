import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: ({image}) => z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    image: image(), // you can use refine to validate the image

    //Relation
    author: z.string(),

    //Relation
    tags: z.array(z.string()),
  }),
});

export const collections = {
  blog: blogCollection,
};
