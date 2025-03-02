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
    firstMalePrice: z.number(),
    secondMalePrice: z.number(),
    thirdMalePrice: z.number(),
    firstFemalePrice: z.number(),
    secondFemalePrice: z.number(),
    thirdFemalePrice: z.number(),
    firstMaleSold: z.boolean(),
    secondMaleSold: z.boolean(),
    thirdMaleSold: z.boolean(),
    firstFemaleSold: z.boolean(),
    secondFemaleSold: z.boolean(),
    thirdFemaleSold: z.boolean(),
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

export const collections = {
  'dogs': dogsCollection,
  'breedings': breedingsCollection,
  'about': aboutCollection,
}; 