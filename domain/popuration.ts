import * as z from "zod";

export type PrefCode = number;

export const prefectureSchema = z.object({
  message: z.string().nullable(),
  result: z
    .object({
      prefCode: z.number(),
      prefName: z.string(),
    })
    .array(),
});

export type Prefecture = z.infer<typeof prefectureSchema>;

export const populationCategorySchema = z.enum([
  "総人口",
  "年少人口",
  "生産年齢人口",
  "老年人口",
]);

export type PopulationCategory = z.infer<typeof populationCategorySchema>;

export const labelValues = Object.keys(populationCategorySchema.Values);

export const populationSchema = z.object({
  message: z.string().nullable(),
  result: z.object({
    boundaryYear: z.number().int(),
    data: z
      .object({
        label: populationCategorySchema,
        data: z
          .object({
            year: z.number().int(),
            value: z.number().finite(),
          })
          .array(),
      })
      .array(),
  }),
});

export type Population = z.infer<typeof populationSchema>;
