import { defineCollection, z } from 'astro:content';

const dogsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    longAlias: z.string(),
    image: z.string(),
    weight: z.number(),
    headSize: z.number(),
    height: z.number(),
    stillGrowing: z.boolean(),
    order: z.number(),
  }),
});

const breedingsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    father: z.string(),
    mother: z.string(),
    fatherImage: z.string(),
    motherImage: z.string(),
    items: z.array(z.object({
      title: z.string(),
      price: z.number(),
      sold: z.boolean(),
    })),
  }),
});

const aboutCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    image: z.string(),
  }),
});

const contactCollection = defineCollection({
  type: 'content',
  schema: z.object({
    heading: z.string(),
    date: z.date(),
    phone: z.string(),
    email: z.string(),
  }),
});

export const collections = {
  'dogs': dogsCollection,
  'breedings': breedingsCollection,
  'about': aboutCollection,
  'contact': contactCollection,
}; 